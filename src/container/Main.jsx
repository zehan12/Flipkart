import { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import AllRoutes from "../routes/AllRoutes";

const Main = ( ) => {
    return(
        <Fragment>
            <BrowserRouter>
                <Header />
                <AllRoutes />
                <Footer />
            </BrowserRouter>
        </Fragment>
    )
}

export default Main;