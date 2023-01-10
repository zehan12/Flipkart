import { Fragment, useState, useCallback } from "react";
import Products from "../data/productList.json";
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import ProductCard from "../components/productListing/productCard";
import { useEffect } from "react";

const Spinner = () => {
    return (
        <Fragment>
            <div class="flex space-x-2">
                <div aria-label="Loading..." role="status">
                    <svg class="h-12 w-12 animate-spin" viewBox="3 3 18 18">
                        <path
                            class="fill-gray-200"
                            d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"></path>
                        <path
                            class="fill-blue-500"
                            d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"></path>
                    </svg>
                </div>
            </div>
        </Fragment>
    )
}

const ProductListing = () => {



    const [sortBy, setSortBy] = useState("none");
    const [gender, setGender] = useState(null);
    const [isGenderOpen, setISGenderOpen] = useState(false);
    const [sortData, setSortData] = useState(Products);
    const [isLoading, setLoading] = useState(false);


    let sizes = Products.reduce((acc, cv) => {
        acc = acc.concat(cv.availableSizes);
        return acc;
    }, []).filter((v, i, a) => a.indexOf(v) === i);


    const debounce = (func) => {
        let timer;
        return function (...args) {
            const context = this;
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
                timer = null;
                func.apply(context, args);
            }, 500);
        };
    };

    const waitLoading = () => {
        setLoading(true)
        setTimeout(() => { setLoading(false) }, 500);
    }

    const genderOptions = [
        "Men",
        "Women",
        "Men & Women",
        "Boys",
        "Girls",
        "Boys & Girls",
        "Unisex",
        "Baby Girls",
        "Baby Boys & Baby Girls",
        "Baby Boys",
        "Couple",
        "Baby Boys Baby Girls"
    ]

    const handleGender = (value) => {
        if (gender === value) setGender(null)
        else setGender(value)
    }

    useEffect(() => { handleProductData() }, [gender])

    const sortOptions = [
        { name: "None", value: "none" },
        { name: "Popularity", value: "popular" },
        { name: "Price -- Low to High", value: "L2H" },
        { name: "Price -- High to Low", value: "H2L" },
        { name: "Newest First", value: "new" }

    ]

    const handleSortOption = (option) => {
        waitLoading()
        setSortBy(option)
        handleProductData(option)
    }

    const handleProductData = (option) => {
        let sortData = [...Products];
        if (gender !== null) {
            // sortData.forEach((v)=>{
            //     console.log(gender,v.idealFor,v.idealFor?.includes(gender),"iterative")
            // })
            sortData = sortData.filter((product) => {
                if (product.idealFor?.includes(gender)) {
                    console.log
                    return product
                }
                // else if ( product.idealFor?.includes(genderOptions[0]) || product.idealFor?() ) {
                //     return product
                // }
            })
        }

        console.log(sortData, "after")

        // console.log(sortData,"data")
        switch (option) {
            case "none":
                setSortData(Products);
                break;
            case "popular":
                let popular = Products.filter((product) => product.price > 9);
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

    console.log(sortData, "fata")

    // const OptimizedhandleSort = useCallback(debounce(handleSortOption), []);

    return (
        <Fragment>
            <section className="bg-[#F1F3F6] flex flex-row">
                <aside className="bg-white  w-[20%] h-full m-2 px-4">
                    <div className="flex justify-between py-4">
                        <h4 className="font-semibold text-xl">Filters</h4>
                        <button className="uppercase text-xs font-semibold text-blue-500">clear all</button>
                    </div>
                    <hr className="w-[0.1] h-[1px] border-none bg-gray-100" />
                    <div className="py-4">
                        <h5 className="font-semibold text-xs py-4">CATEGORIES</h5>
                        <p className="font-semibold">Clothing and Accessories...</p>
                    </div>
                    <hr className="w-[0.1] h-[1px] border-none bg-gray-100" />

                    <div className="mb-4">
                        <div onClick={() => setISGenderOpen(!isGenderOpen)} className="flex items-center justify-between">
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
                            <input  type="checkbox"
                                //  checked={true}
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <img className="w-20" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" />
                        </div>
                    </div>
                    <hr className="w-[0.1] h-[1px] border-none bg-gray-100" />

                    <div>
                        <h5 className="font-semibold text-xs my-3" >SIZES</h5>
                        <div className="flex flex-wrap gap-2">
                            {
                                sizes.map((size) => <div key={size} style={{border:"1px solid orange"}} className="w-8 h-6 text-center text-[14px] rounded cursor-pointer hover:bg-orange-100 ">{size}</div>)
                            }
                        </div>
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
                        <div className="text-xs font-normal text-gray-500">(Showing products of products)</div>

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
                        <div className="flex flex-wrap gap-5">
                            {
                                isLoading ?
                                    <div className="mx-auto w-40 m-40">
                                        <Spinner />
                                    </div> :
                                    sortData.map((product) => (

                                        <div key={product.id} className="w-80  rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                                            <ProductCard title={product.title}
                                                // styles={product.style}
                                                price={product.price} />
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