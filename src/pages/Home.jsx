import { Fragment, useState } from "react"
import HomeNav from "../components/home/HomeNav";
import ProductDetail from "../pages/ProductDetail";
import ProductRow from "../components/home/ProductRow";
import Slider from "../components/home/Slider";
import { data } from "../data/products.json";

const Home = () => {
    const { products } = data;
    return (
        <Fragment>
            <HomeNav />
            <Slider />
            <ProductRow products={products} />
        </Fragment>
    )
}

export default Home;