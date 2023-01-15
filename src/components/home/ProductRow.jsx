import { Fragment } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const ProductRow = ({ products }) => {

    const PreviousBtn = (props) => {
        const { className, onClick } = props
        return (
            <div className={className} onClick={onClick}>
                <MdOutlineArrowBackIosNew size={50} color="black" />
            </div>
        )
    }
    const NextBtn = (props) => {
        const { className, onClick } = props
        return (
            <div className={className} onClick={onClick}>
                <MdArrowForwardIos size={50} color="black" />
            </div>
        )
    }

    return (
        <Fragment>
            <div className="" style={{ margin: "30px" }}>
                <div className="flex justify-between items-center p-5">
                    <h4 className="text-3xl font-semibold">Clothing and Accessories</h4>
                    <Link to="/clothing-and-accessories" className="uppercase bg-[#2874F0] font-semibold text-white h-8 w-24 text-center text-sm pt-[5px]">view all</Link>
                </div>
                <Slider
                    autoplay
                    autoplaySpeed={2000}
                    infinite
                    prevArrow={<PreviousBtn />}
                    nextArrow={<NextBtn />}
                    slidesToShow={5}
                >
                    {products.map((product) => (<ProductCard key={product.sku} product={product} />))}
                </Slider>
            </div>
        </Fragment >)
}

export default ProductRow;