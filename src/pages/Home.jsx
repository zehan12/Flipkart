import { Fragment } from "react"
import HomeNav from "../components/home/HomeNav";
import Slider from "../components/home/Slider";
import { data } from "../static/json/products.json";


const { products } = data;

const photo = "../static/products"


console.log(photo)

const Home = () => {
    return (
        <Fragment>
            <h1 className="bg-red-600">Home</h1>
            <HomeNav />
            <Slider />
            {
                products.map((product) => {
                    return <picture>
                        <img src={`../static/products/${product.sku}-1-product.webp`} />
                    </picture>
                })
            }

        </Fragment>
    )
}

export default Home;