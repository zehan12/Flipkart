import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/Error";
import Home from "../pages/Home";
import ProductListing from "../pages/ProductListing";
import ProductDetail from "../pages/ProductDetail";


const AllRoutes = () => {
    return (
        <Fragment>
            <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="clothing-and-accessories" element={<ProductListing />} />
                <Route path="product/:product" element={<ProductDetail />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Fragment>
    )
}

export default AllRoutes;