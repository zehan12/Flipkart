import { Fragment, useState } from "react"
import HomeNav from "../components/home/HomeNav";
import ProductDetail from "../pages/ProductDetail";
import ProductRow from "../components/home/ProductRow";
import Slider from "../components/home/Slider";
import { data } from "../data/products.json";
import CardGrid from "../components/home/CardGrid";

const Home = () => {
    const { products } = data;
    return (
        <Fragment>
            <HomeNav />
            <Slider />
            <img
                src="https://rukminim1.flixcart.com/fk-p-flap/2000/2000/image/86411e6addfb2db6.jpg?q=50"
            />
            <CardGrid card={img1} />
            <CardGrid card={img2} />
            <ProductRow products={products} />
            <CardGrid card={img3} />
            <CardGrid card={img4} />
            <ProductRow products={products} />
        </Fragment>
    )
}

const img1 = [
    "https://rukminim1.flixcart.com/fk-p-flap/960/960/image/4232ffe2c1642345.jpg?q=50",
    "https://rukminim1.flixcart.com/fk-p-flap/960/960/image/403b22688b1f0b64.jpg?q=50",
    "https://rukminim1.flixcart.com/fk-p-flap/960/960/image/4aceb8d40f7e76f3.jpg?q=50"
]

const img2 = [
    "https://rukminim1.flixcart.com/fk-p-flap/960/960/image/d4d557f0f04d338a.jpeg?q=50",
    "https://rukminim1.flixcart.com/fk-p-flap/960/960/image/1efad69de5061d93.jpg?q=50",
    "https://rukminim1.flixcart.com/fk-p-flap/960/960/image/ab05c11074b4af27.jpg?q=50"
]

const img3 = [
    "https://rukminim1.flixcart.com/fk-p-flap/960/960/image/9ef91d8d939e16d9.jpg?q=50",
    "https://rukminim1.flixcart.com/fk-p-flap/960/960/image/1c8aaa1616db2daf.jpg?q=50",
    "https://rukminim1.flixcart.com/fk-p-flap/960/960/image/27a523d8cf02ccf2.jpg?q=50"
]

const img4 = [
    "https://rukminim1.flixcart.com/fk-p-flap/400/400/image/d10fc1ea3a67ee73.jpg?q=50",
    "https://rukminim1.flixcart.com/fk-p-flap/400/400/image/d10fc1ea3a67ee73.jpg?q=50",
    "https://rukminim1.flixcart.com/fk-p-flap/400/400/image/d10fc1ea3a67ee73.jpg?q=50",
    "https://rukminim1.flixcart.com/fk-p-flap/400/400/image/d10fc1ea3a67ee73.jpg?q=50"
]

export default Home;