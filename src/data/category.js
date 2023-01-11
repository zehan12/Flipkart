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

const categoriesj = [
    {
        name: "Electronics",
        children: [
            {
                name: "Mobile",
                children: [
                    "Mi", "Realme", "Samsung", "Infinix", "OPPO", "Apple", "Vivo", "Honor", "Asus", "Poco X2", "realme Narzo 10", "Infinix Hot 9", "IQOO 3", "iPhone SE", "Motorola razr", "realme Narzo 10A", "Motorola g8 power lite"
                ].map(item => {
                    return { name: item, children: [] }
                })

            },
            {
                name: "Mobile Accessories",
                children: [
                    "Mobile Cases", "Headphones & Headsets", "Power Banks", "Screenguards", "Memory Cards", "Smart Headphones", "Mobile Cables", "Mobile Chargers", "Mobile Holders",
                ].map(item => {
                    return { name: item, children: [] }
                })

            },
            {
                name:"const categories = [
                    {
                        name: "Electronics",
                        children: [
                            {
                                name: "Mobile",
                                children: [
                                    "Mi", "Realme", "Samsung", "Infinix", "OPPO", "Apple", "Vivo", "Honor", "Asus", "Poco X2", "realme Narzo 10", "Infinix Hot 9", "IQOO 3", "iPhone SE", "Motorola razr", "realme Narzo 10A", "Motorola g8 power lite"
                                ].map(item => {
                                    return { name: item, children: [] }
                                })
            
                            },
                            {
                                name: "Mobile Accessories",
                                children: [
                                    "Mobile Cases", "Headphones & Headsets", "Power Banks", "Screenguards", "Memory Cards", "Smart Headphones", "Mobile Cables", "Mobile Chargers", "Mobile Holders",
                                ].map(item => {
                                    return { name: item, children: [] }
                                })
            
                            }]
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
                ]"
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