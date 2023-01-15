import { Fragment } from "react";
import { BsFillBagFill } from "react-icons/bs";
import { MdStars } from "react-icons/md";
import { FaGift } from "react-icons/fa";
import { IoMdHelpCircle } from "react-icons/io";

const Footer = () => {
    return (
        <Fragment>
            <footer className="bg-[#172337] text-white py-4 w-full text-center text-sm  bottom-0 ">
            //  fixed bottom-0

                <div className="flex justify-start gap-10 px-20 py-10 w-[100%] text-xs leading-[1.5rem]" >
                    <div className="w-[70%] flex justify-start gap-20 text-left" >
                        <div className="w-40">
                            <h5 className="mb-3 text-xs text-gray-400" >ABOUT</h5>
                            <p className="hover:underline cursor-pointer">Contact Us</p >
                            <p className="hover:underline cursor-pointer">About us</p>
                            <p className="hover:underline cursor-pointer">Careers</p>
                            <p className="hover:underline cursor-pointer">Flipkart Stories</p>
                            <p className="hover:underline cursor-pointer">Press</p>
                            <p className="hover:underline cursor-pointer">Flipkart Wholesale</p>
                            <p className="hover:underline cursor-pointer">Corporate Information</p>
                        </div>

                        <div className="w-40">
                            <h5 className="mb-3 text-xs text-gray-400" >HELP</h5>
                            <p className="hover:underline cursor-pointer">Payments</p>
                            <p className="hover:underline cursor-pointer">Shipping</p>
                            <p className="hover:underline cursor-pointer">Cancellation & Returns</p>
                            <p  className="hover:underline cursor-pointer">FAQ</p>
                            <p className="hover:underline cursor-pointer">Report Infringement</p>
                        </div>

                        <div className="w-40">
                            <h5 className="mb-3 text-xs text-gray-400" >POLICY</h5>
                            <p className="hover:underline cursor-pointer">Return Policy</p>
                            <p className="hover:underline cursor-pointer">Terms Of Use</p>
                            <p className="hover:underline cursor-pointer">Security</p>
                            <p className="hover:underline cursor-pointer">Privacy</p>
                            <p className="hover:underline cursor-pointer">Sitemap</p>
                            <p className="hover:underline cursor-pointer">EPR Complianc</p>

                        </div>
                        <div className="w-40">
                            <h5 className="mb-3 text-xs text-gray-400" >SOCIAL</h5>
                            <p className="hover:underline cursor-pointer">Facebook</p>
                            <p className="hover:underline cursor-pointer">Twiter</p>
                            <p className="hover:underline cursor-pointer">YouTube</p>
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