import { Fragment } from "react";
import { BsFillBagFill } from "react-icons/bs";
import { MdStars } from "react-icons/md";
import { FaGift } from "react-icons/fa";
import { IoMdHelpCircle } from "react-icons/io";

const Footer = () => {
    return (
        <Fragment>
            <footer className="bg-[#172337] text-white py-4 w-full text-center text-sm fixed bottom-0">
                <div className="flex justify-start gap-10 mx-20 my-7 w-full text-xs leading-[1.5rem]" >
                    <div className="w-[900px] flex justify-start gap-20 text-left" >
                        <div className="w-40">
                            <h5 className="mb-3 text-xs text-gray-400" >ABOUT</h5>
                            <p>Contact Us</p>
                            <p>About us</p>
                            <p>Careers</p>
                            <p>Flipkart Stories</p>
                            <p>Press</p>
                            <p>Flipkart Wholesale</p>
                            <p>Corporate Information</p>
                        </div>

                        <div className="w-40">
                            <h5 className="mb-3 text-xs text-gray-400" >HELP</h5>
                            <p>Payments</p>
                            <p>Shipping</p>
                            <p>Cancellation & Returns</p>
                            <p>FAQ</p>
                            <p>Report Infringement</p>
                        </div>

                        <div className="w-40">
                            <h5 className="mb-3 text-xs text-gray-400" >POLICY</h5>
                            <p>Return Policy</p>
                            <p>Terms Of Use</p>
                            <p>Security</p>
                            <p>Privacy</p>
                            <p>Sitemap</p>
                            <p>EPR Complianc</p>

                        </div>
                        <div className="w-40">
                            <h5 className="mb-3 text-xs text-gray-400" >SOCIAL</h5>
                            <p>Facebook</p>
                            <p>Twiter</p>
                            <p>YouTube</p>
                        </div>

                    </div>
                    <div className="flex justify-start text-left" >
                        <div class="mr-5 w-0.5 h-32 bg-gray-600"></div>

                        <div className="w-60">

                            <h5 className="mb-3 text-xs text-gray-400" >Mail Us:</h5>
                            <p>
                                Flipkart Internet Private Limited,<br />
                                Buildings Alyssa, Begonia &<br />
                                Clove Embassy Tech Village,<br />
                                Outer Ring Road, Devarabeesanahalli Village,
                                Bengaluru, 560103,<br />
                                Karnataka, India
                            </p>
                        </div>

                        <div className="w-60 ml-3">
                            <h5 className="mb-3 text-xs text-gray-400">Registered Office Address:</h5>
                            <p>Flipkart Internet Private Limited, <br />Buildings Alyssa, Begonia & <br />
                                Clove Embassy Tech Village, <br />
                                Outer Ring Road, Devarabeesanahalli Village, <br />
                                Bengaluru, 560103,<br />
                                Karnataka, India<br />
                                CIN : U51109KA2012PTC066107<br />
                                Telephone: <a className="text-blue-500" href="tel: 044-45614700"> 044-45614700</a>
                            </p>
                        </div>
                    </div>
                </div>
                <hr className="w-[0.1] h-[1px] border-none text-red-600 bg-gray-500" />
                <div className="flex p-6 justify-evenly">
                    <div className="flex items-center gap-2">
                        <BsFillBagFill size={20} color="#FFC800" />
                        <p>Become a Seller</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <MdStars size={20} color="#FFC800" />
                        <p>Advertise</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <MdStars size={20} color="#FFC800" />
                        <p>Advertise</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaGift size={20} color="#FFC800" />
                        <p>Gift Cards</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <IoMdHelpCircle size={20} color="#FFC800" />
                        <p>Help Center</p>
                    </div>
                    <div>
                        © 2007-2023 Flipkart.com
                    </div>
                    <div>
                        <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/payment-method_69e7ec.svg" alt="" />
                    </div>



                </div>
            </footer>
        </Fragment>
    )
}

export default Footer;