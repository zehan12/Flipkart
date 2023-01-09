import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ProductListing from "../pages/ProductListing";


const AllRoutes = () => {
    return (
        <Fragment>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/clothing-and-accessories" element={<ProductListing />} />
            </Routes>
        </Fragment>
    )
}

export default AllRoutes;