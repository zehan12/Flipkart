import { Fragment } from "react"

const Navigation = () => {
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
    return (
        <Fragment>
            <nav className="mt-20 bg-white ">
                <ul className="flex justify-center gap-10" style={{border:"1px solid #CDCFD1"}}>
                    {navItems.map((item) => (<li className="font-semibold p-2" key={item}>{item}</li>))}
                </ul>
            </nav>
        </Fragment>
    )
}

export default Navigation;