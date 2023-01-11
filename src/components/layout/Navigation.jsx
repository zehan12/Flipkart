import { Fragment } from "react"

const Navigation = () => {



    // const categories = [
    //     {
    //         name: "Electronics",
    //         children: [
    //             {
    //                 name: "Mobile",
    //                 children: [
    //                     {
    //                         name: "Mi",
    //                         children: []

    //                     },
    //                     {
    //                         name: ""
    //                     }
    //                 ]
    //             }
    //         ]

    //     },
    //     {
    //         name: "TV & Appliacances",
    //         children: [{}]
    //     },
    //     {
    //         name: "Men",
    //         children: [{}]
    //     },
    //     {
    //         name: "Women",
    //         children: [{}]
    //     }
    // ]

    const categories = [
        {
            name: "Electronics",
            children: [
                {
                    name: "Mobile",
                    children: [
                        "Mi", "Realme", "Samsung", "Infinix", "OPPO", "Apple", "Vivo", "Honor", "Asus", "Poco X2", "realme Narzo 10", "Infinix Hot 9", "IQOO 3", "iPhone SE", "Motorola razr", "realme Narzo 10A", "Motorola g8 power lite"
                    ].map(item => {
                        return { name: item }
                    })
                    // [{ name: "Mi", }, { name: "Realme" }, { name: "Samsung" }, { name: "Infinix" }, { name: "OPPO" }, { name: "Apple" }

                }
            ]

        },
        {
            name: "TV & Appliacances",
            children: []
        },
        {
            name: "Men",
            children: []
        },
        {
            name: "Women",
            children: []
        }
    ]

    console.log(categories)

    {
        <div class="flex items-center justify-center cursor-pointer" >
            <div class="relative flex flex-col items-center group">
                <div className="text-[#fff] font-bold mt-2">
                    More
                </div>
                {/* <div class="absolute top-3 flex-col items-center hidden mt-6 group-hover:flex">
                    <div class="w-3 h-3 -mb-2 rotate-45 bg-white"></div>
                    <span class="relative h-full w-48 z-10 p-2 text-xs leading-none bg-white whitespace-no-wrap shadow-lg">
                        {
                            moreOptions.map((o) => <div key={o.name} className="m-3" style={{ borderBottom: "1px solid black" }}>{o.name}</div>)
                        }
                    </span>
                </div> */}
            </div>
        </div >
    }


    const renderCategories = (categories) => {
        let myCategory = [];
        for (let category of categories) {
            console.log(categories)
            if (categories.children?.length !== 0) {
                console.log(category.children,"why")
            }
            myCategory.push(
                <li class="flex items-center justify-center cursor-pointer" >
                    <div class="relative flex flex-col items-center group">
                        <div className="font-semibold p-2">
                            {category.name}
                            {
                                // categories.children?.length !== 0 ? 

                                // (<ul>
                                //     {
                                //         renderCategories(category.children)
                                //     }
                                // </ul>) : null
                            }
                        </div>
                    </div>
                </li>
            )
        }
        return myCategory;
    }


    const navItems = [
        "Electornics",
        "TV & Appliances",
        "Men",
        "Women",
        "Baby & Kid",
        "Home & Furniture",
        "Sports, Books & More",
        "Flights",
        "Offer Zone"
    ]

    const NavList = [
        {
            "Mobile": [
                "Mi", "Realme", "Samsung", "Infinix", "OPPO", "Apple", "Vivo", "Honor", "Asus", "Poco X2", "realme Narzo 10", "Infinix Hot 9", "IQOO 3", "iPhone SE", "Motorola razr", "realme Narzo 10A", "Motorola g8 power lite"
            ]
        },
        {
            "Mobile Accessories": [
                "Mobile Cases", "Headphones & Headsets", "Power Banks", "Screenguards", "Memory Cards", "Smart Headphones", "Mobile Cables", "Mobile Chargers", "Mobile Holders",
            ]
        },
        {
            "Smart Wearable Tech": [
                "Smart Wearable Tech", "Smart Watches", "Smart Glasses (VR)", "Smart Bands"
            ]
        }
    ]

    return (
        <Fragment>
            <nav className="mt-20 bg-white">
                <ul className="flex justify-center gap-10" style={{ border: "1px solid #CDCFD1" }}>
                    {
                        renderCategories(categories)
                    }
                    {/* {navItems.map((item) => (<li className="font-semibold p-2" key={item}>{item}</li>))} */}
                </ul>
            </nav>
        </Fragment>
    )
}

export default Navigation;