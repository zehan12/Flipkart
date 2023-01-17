import { Fragment, useState, useCallback } from "react";
import { data } from "../data/products.json";
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { useEffect } from "react";
import Spinner from "../components/common/Spinner";
import Card from "../components/productListing/Card";


const Products = data.products
const ProductListing = () => {

    const sortOptions = [
        { name: "All", value: "all" },
        { name: "Popularity", value: "popular" },
        { name: "Price -- Low to High", value: "L2H" },
        { name: "Price -- High to Low", value: "H2L" },
        { name: "Newest First", value: "new" }
    ]


    const genderOptions = Products.reduce((acc, cv) => {
        acc = acc.concat(cv.idealFor);
        return acc;
    }, []).filter((v, i, a) => a.indexOf(v) === i);

    const [sortBy, setSortBy] = useState("all");
    const [gender, setGender] = useState(null);
    const [isGenderOpen, setGenderOpen] = useState(false);
    const [brand, setBrand] = useState(null);
    const [isBrandOpen, setBrandOpen] = useState(false);
    const [sortData, setSortData] = useState(Products);
    const [isLoading, setLoading] = useState(false);
    const [activeSize, setActiveSize] = useState([]);
    const [assured, setAssured] = useState(false);


    const clear = () => {
        setSortData([...Products])
        setSortBy("all");
        setGender(null);
        setBrand(null);
        setActiveSize([])
    }

    let sizes = Products.reduce((acc, cv) => {
        acc = acc.concat(cv.availableSizes);
        return acc;
    }, []).filter((v, i, a) => a.indexOf(v) === i);

    const brands = Products.filter((v) => v.brand).map((v) => v.brand).filter((v, i, a) => a.indexOf(v) === i);


    let maxPrice = sortData.reduce((acc, cv) => acc += cv.price, 0);

    const waitLoading = () => {
        setLoading(true)
        setTimeout(() => { setLoading(false) }, 500);
    }


    const handleGender = (value) => {
        if (gender === value) setGender(null)
        else setGender(value)
    }

    const handleBrand = (value) => {
        if (brand === value) setBrand(null)
        else setBrand(value)
    }


    const handleSize = (size) => {
        let arr = [];
        if (activeSize.includes(size)) {
            arr = activeSize.filter((v) => v !== size)
        } else {
            arr = [...activeSize, size];
        }
        setActiveSize(arr);
    }

    useEffect(() => { handleProductData() }, [gender])
    useEffect(() => { handleProductData() }, [brand])
    useEffect(() => { handleProductData() }, [assured])
    useEffect(() => { handleProductData() }, [activeSize])



    const handleSortOption = (option) => {
        waitLoading()
        setSortBy(option)
        handleProductData(option)
    }



    const handleProductData = (option) => {
        let sortData = [...Products];

        if (assured) {
            sortData = sortData
                .filter((product) => product?.assured);
            console.log(sortData)
        }

        if (gender !== null) {
            sortData = sortData.filter((product) => {
                if (product.idealFor?.includes(gender)) {
                    return product
                }
            })
        }

        if (brand !== null) {
            sortData = sortData
                .filter((product) => product.brand === brand)
        }

        if (activeSize.length > 0) {
            sortData = sortData.
                filter((product) => product.availableSizes
                    .some((size) => activeSize
                        .includes(size)))
        }

        switch (option) {
            case "none":
                setSortData(Products);
                break;
            case "popular":
                let popular = sortData.sort((a, b) => parseInt(b.rating) - parseInt(a.rating));
                setSortData([...popular]);
                break;
            case "H2L":
                sortData.sort((a, b) => b.price - a.price);
                setSortData(sortData);
                break;
            case "L2H":
                sortData.sort((a, b) => a.price - b.price);
                setSortData(sortData);
                break;
            default:
                setSortData(sortData);
        }
    }



    return (
        <Fragment>
            <section className="bg-[#F1F3F6] flex flex-row">
                <aside className="bg-white  w-[20%] h-full m-2 px-4">
                    <div className="flex justify-between py-4">
                        <h4 className="font-semibold text-xl">Filters</h4>
                        <button onClick={()=>clear()} className="uppercase text-xs font-semibold text-blue-500">clear all</button>
                    </div>
                    <hr className="w-[0.1] h-[1px] border-none bg-gray-100" />
                    <div className="py-4">
                        <h5 className="font-semibold text-xs py-4">CATEGORIES</h5>
                        <p className="font-semibold">Clothing and Accessories...</p>
                    </div>
                    <hr className="w-[0.1] h-[1px] border-none bg-gray-100" />

                    <div className="mb-4">
                        <div onClick={() => setGenderOpen(!isGenderOpen)} className="flex items-center justify-between">
                            <h5 className="font-semibold text-xs my-3" >GENDER</h5>
                            {isGenderOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </div>

                        {isGenderOpen &&
                            <div class="flex flex-col justify-center">
                                {genderOptions.map((option) => (
                                    <div key={option} class="flex items-center gap-3">
                                        <input id="vue-checkbox" type="checkbox" checked={gender === option} onChange={() => handleGender(option)} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                        <label class="form-check-label inline-block text-gray-800">
                                            {option}
                                        </label>
                                    </div>

                                ))
                                }
                            </div>
                        }
                    </div>
                    <hr className="w-[0.1] h-[1px] border-none bg-gray-100" />
                    <div className="my-4">
                        <div class="flex items-center gap-3">
                            <input type="checkbox"
                                onChange={() => setAssured(!assured)}
                                checked={assured}
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <img className="w-20" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" />
                        </div>
                    </div>
                    <hr className="w-[0.1] h-[1px] border-none bg-gray-100" />

                    <div>
                        <h5 className="font-semibold text-xs my-3" >SIZES</h5>
                        <div className="flex flex-wrap gap-2">
                            {
                                sizes.map((size) => {
                                    if (activeSize.includes(size), size)
                                        return (<div key={size}
                                            style={{
                                                border: "1px solid orange", background: activeSize.indexOf(size) !== -1
                                                    ? "#f0d3b7" : "white"
                                            }}
                                            onClick={() => handleSize(size)}
                                            className={`w-8 h-6 text-center text-[14px] rounded cursor-pointer hover:bg-orange-100 `}>{size}</div>)
                                })
                            }
                        </div>
                    </div>
                    <hr className="w-[0.1] h-[1px] border-none bg-gray-100" />

                    <div className="mb-4">
                        <div onClick={() => setBrandOpen(!isBrandOpen)} className="flex items-center justify-between">
                            <h5 className="font-semibold text-xs my-3" >Brand</h5>
                            {isBrandOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </div>

                        {isBrandOpen &&
                            <div class="flex flex-col justify-center">
                                {brands.map((brandName) => (
                                    <div key={brandName} class="flex items-center gap-3">
                                        <input id="vue-checkbox" type="checkbox" checked={brand === brandName} onChange={() => handleBrand(brandName)} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                        <label class="form-check-label inline-block text-gray-800">
                                            {brandName}
                                        </label>
                                    </div>

                                ))
                                }
                            </div>
                        }
                    </div>


                </aside>
                <main className="bg-white m-2 w-full">
                    <div className="m-2 text-gray-600 text-xs">
                        <h6 >Home {">"} Clothing and Accessories</h6>
                        <p className="mt-2">Given how powerful social media has become these days, everyone around the world wants to look their best at all times. Thus, the right clothing and accessories are almost always in demand. Good-quality
                            <a className="text-blue-500 cursor-pointer">shirts, T-shirts, trousers, jeans, shorts, tops, sarees, kurtis, lehenga, dresses, skirts, bra, innerwear,</a> and more are some of the examples that people love and need to wear. Watches, earrings, rings, bracelets, chains, etc can accentuate the look of every outfit. Thus, it’s important to wear complementing accessories when you dress up in your finest.</p>
                    </div>
                    <div className="m-2">
                        <h5 className="text-xl font-semibold">Clothing and Accessories</h5>
                        <div className="text-xs font-normal text-gray-500">{`(Showing ${sortData.length} products of ${Products.length} products)`}</div>

                        <div className="flex font-sm items-center gap-8 py-1">
                            <div className="text-sm font-semibold">Sort By</div>
                            {sortOptions.map((options) => (
                                <div
                                    onClick={() => handleSortOption(options.value)}
                                    key={options.value}
                                    className={`text-sm cursor-pointer ${sortBy === options.value ? "text-blue-500 border-b-2 border-blue-500 font-semibold" : "font-normal"}`}
                                >
                                    {options.name}
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-1 justify-evenly item-start">
                            {
                                sortData.length === 0 && <h1>Not result Found</h1>
                            }
                            {
                                isLoading ?
                                    <div className="mx-auto w-40 m-40">
                                        <Spinner />
                                    </div> :
                                    sortData.map((product) => (

                                        <div key={product.id} className="flex ">
                                            <Card product={product} />

                                        </div>
                                    ))
                            }
                        </div>

                    </div>
                </main>
            </section>
        </Fragment >
    )
}

export default ProductListing;