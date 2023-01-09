import { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../components/common/Footer";
import Layout from "../components/layout/Layout";
import AllRoutes from "../routes/AllRoutes";

const Main = ( ) => {
    return(
        <Fragment>
            <BrowserRouter>
                <Layout />
                <AllRoutes />
                <Footer />
            </BrowserRouter>
        </Fragment>
    )
}

export default Main;