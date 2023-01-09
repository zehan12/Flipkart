import { Fragment } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

const Header = () => {
    return (
        <Fragment>
            {/* <header className="bg-blue-600 fixed top-0 py-2.5 w-full z-1"> */}
            <div className='bg-blue-500 fixed top-0 w-full z-50'>


                <div className='container mx-auto px-4 py-4 flex items-center justify-start gap-5'>

                    <div className='flex flex-col items-center ml-28'>
                        <img src='//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png' alt='flipkart logo' className='w-20 h-12 mb-0 pb-0 object-contain' />
                        <div className='flex items-center absolute top-12'>
                            <span className='text-white font-italic text-xs'>Explore</span>
                            <span className='text-yellow-400 font-italic text-xs'>Plus</span>
                            <span>
                                <img width='10' src='//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png' alt='plus' className='w-4 h-4' />
                            </span>
                        </div>
                    </div>



                    <div className=" relative w-[40%] text-xs text-gray-900">
                        <input type="text"

                            style={{ boxShadow: "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px"}}
                            className=" flex-1 mt-2 h-9 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base border-none" placeholder='Search for products, brands and more' />
                        <FaSearch size={20} className='absolute top-0 right-4 mt-4 text-blue-500' />
                    </div>


                    {/* <div className='relative border-none w-40' >
                        <input className='h-9 mt-1 bg-white w-80 text-black' placeholder='Search for products, brands and more' type='text' />
                        <FaSearch className='absolute top-0 right-[-150px] mt-4 text-red-500' />
                    </div> */}
                    <div className='flex items-center gap-10'>
                        <div className=" py-1 w-28  mt-2 bg-white font-bold text-blue-500 text-center">
                            Login
                        </div>
                        <div className="text-[#fff] font-bold mt-2">
                            Become a Seller
                        </div>
                        <div className="text-[#fff] font-bold mt-2">
                            More
                        </div>
                        {/* <Tippy
                                theme='light'
                                content={<LoginT></LoginT>}
                                interactive={true}
                                offset={[5, 18]}
                            >
                                <button className='px-3 py-2 rounded-md text-blue-500 hover:bg-blue-400'>Login</button>
                            </Tippy>

                            <Tippy
                                theme='light'
                                content={<MoreT></MoreT>}
                                offset={[5, 18]}
                                interactive={true}
                            >
                                <span className='px-3 py-2 rounded-md text-white hover:bg-blue-400'>More</span>
                            </Tippy> */}
                        {/* <ExpandMoreIcon className='text-white' /> */}
                    </div>
                    <div className='relative flex items-center mt-2 gap-3 ml-7'>
                        {/* <ShoppingCartIcon className='text-white' /> */}
                        <div className="absolute top-[-10px] right-[29px] bg-red-700 rounded-lg text-center text-white font-semibold text-xs h-6 w-6" style={{border:"2px solid white"}}>1</div>
                        <FaShoppingCart color="white" size={30} />
                        <p className='text-white font-semibold'>Cart</p>
                    </div>
                </div>
            </div>
            {/* </header> */}
        </Fragment>
    )
}

export default Header;