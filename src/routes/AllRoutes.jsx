import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/Error";
import Home from "../pages/Home";
import ProductListing from "../pages/ProductListing";


const AllRoutes = () => {
    return (
        <Fragment>
            <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="clothing-and-accessories" element={<ProductListing />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Fragment>
    )
}

export default AllRoutes;