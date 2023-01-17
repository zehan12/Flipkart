import { Fragment, useState, useEffect, useCallback } from "react";
import { MdFavorite, MdFiberManualRecord } from "react-icons/md"

const Card = ({ product }) => {
    const {
        title,
        sku,
        availableSizes,
        price,
        actualPrice,
        currencyFormat,
        rating
    } = product

    const img = [
        `/static/products/${sku}-1-product.webp`,
        `/static/products/${sku}-2-product.webp`
    ]
    const ratingRemaing = 5 - rating;

    const [image, setImage] = useState(img[0])
    const imgNo = image.split("-")[1] 

    return (
        <Fragment>
            <div key={sku} className="relative overflow-hidden shadow-lg m-2">
                <div className="absolute top-0 z-10 flex m-2">
                    <MdFiberManualRecord color={ imgNo == 2 ? "gray" : "black"  } />
                    <MdFiberManualRecord color={ imgNo == 1 ? "gray" : "black"  } />
                </div>
                <div style={{ float: "right" }} className="absolute top-0 z-10 right-0 px-1 m-2">
                    <MdFavorite size={25} color={"gray"}
                        className="cursor-pointer"
                        onMouseOver={({ target }) =>
                            (target.style.color = '#e91f63')}
                        onMouseOut={({ target }) =>
                            (target.style.color = 'gray')
                        }
                    />
                </div>
                <div className="relative">
                    <img
                        src={image}
                        onMouseOver={() => setImage(img[1])}
                        onMouseOut={() => setImage(img[0])}

                        alt="images"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="group p-6 relative hover:translate-y-[-20%] ease-in duration-300 ">
                    <p className="text-gray-800 font-medium">{title}</p>
                    <p className="text-gray-600">running shoes</p>
                    <span className="text-red-500 font-medium">{currencyFormat}{price}</span>
                    <span className="text-gray-500 pl-2 text-sm line-through">{currencyFormat}{actualPrice}</span>
                    <span className="text-green-500 pl-2 text-sm font-medium">56%</span>
                    <ul class="flex justify-center gap-1 mt-2">
                        {
                            Array(rating).fill(0)
                                .map((_) => (<li>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                </li>))
                        }
                        {
                            Array(ratingRemaing).fill(0)
                                .map((_) => (<li>
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                        <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
                                    </svg>
                                </li>
                                ))
                        }
                    </ul>
                    <div className="opacity-1 group-hover:opacity-1 absolute py-5 ">
                        <p className="text-gray-400 font-sans font-semibold">
                            Size: <span className="text-black font-normal">{availableSizes.join(",  ")}</span>
                        </p>
                    </div>
                </div>

            </div>


        </Fragment>
    )
}




export default Card;