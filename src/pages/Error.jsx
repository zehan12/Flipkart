import React from "react";
import { Link } from "react-router-dom";

const NotFound = ( ) => {
    return (
        <div
            style={{
                textAlign: "center",
                fontSize: "14px",
                // padding: "100px",
                // margin: "100px",
                height:"100%",
                margin:"30px"
            }}
        >
            <div className="mx-auto">
                <img
                    // style={{ width: "450px", maxWidth: "100%" }}
                    src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/error-500_f9bbb4.png"
                    alt=""
                />
                <div
                    style={{
                        fontSize: "1.3em",
                        paddingTop: "10px",
                        marginBottom: "35px",
                    }}
                >
                    Are You Lost Baby Girl ?
                    Unfortunately the page you are looking for has been moved or deleted
                </div>
                <button
                    style={{ backgroundColor: "#2874f0" }}
                >
                    <Link to="/">GO TO HOMEPAGE</Link>
                </button>
            </div>
        </div>
    );
}

export default NotFound;