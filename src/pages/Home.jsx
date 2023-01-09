import { Fragment } from "react"
import HomeNav from "../components/home/HomeNav";
import Slider from "../components/home/Slider";

const Home = () => {
    return (
        <Fragment>
            <h1 className="bg-red-600">Home</h1>
            <HomeNav />
            <Slider />

        </Fragment>
    )
}

export default Home;