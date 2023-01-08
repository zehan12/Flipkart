import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";


const AllRoutes = ( ) => {
    return(
        <Fragment>
            <Routes>
            <Route path="/" element={<Home />} />
            </Routes>
        </Fragment>
    )
}

export default AllRoutes;