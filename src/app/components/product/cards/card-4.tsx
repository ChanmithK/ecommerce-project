import React, { useState } from "react";

import RatingStars from "../rating-stars";
import Image from "next/image";
import { ItemProps } from "../../../../../type";
import { useDispatch } from "react-redux";

import Link from "next/link";
import { TbFocusCentered, TbHeartFilled } from "react-icons/tb";
import FormattedPrice from "../../common/formatted-price";
import { IoStatsChart } from "react-icons/io5";
import { addToCart } from "@/redux/slices/user-slice";
import toast from "react-hot-toast";
import { viewModal } from "@/redux/slices/temporary-data-slice";
import { CiShoppingCart } from "react-icons/ci";
import { motion } from "framer-motion";

const Card4 = ({ item }: ItemProps) => {
  const dispatch = useDispatch();

  const [hover, setHover] = useState(false);

  const handleDiv1HoverStart = () => {
    setHover(true);
  };

  const handleDiv1HoverEnd = () => {
    setHover(false);
  };

  return (
    // <div className={`flex border-b  items-center`}>
    //   <div className="w-[90px] text-center pr-4 box-content">Image</div>
    //   <div className="w-[140px] text-center pr-4">SKU</div>
    //   <div className="grow pr-4">Product</div>
    //   <div className="w-[140px] text-center grow pr-4">Rating</div>
    //   <div className="w-[136px] grow pr-4 mr-1 text-right">Price</div>
    // </div>
    //  products-list
    <motion.div
      onHoverStart={handleDiv1HoverStart}
      onHoverEnd={handleDiv1HoverEnd}
      onTapStart={handleDiv1HoverStart}
      onTap={handleDiv1HoverEnd}
      className="flex flex-wrap  mobile:border md:border-0  md:border-b md:shadow-none mobile:rounded mobile:shadow-md md:m-0 mobile:m-2"
    >
      <div className="flex shrink-0 w-full">
        {/* product-card */}
        <div className="flex mobile:flex-wrap mobile:items-stretch md:flex-nowrap md:item-center pr-0 pl-0 w-full">
          {/* product-card__image */}
          <div className="shrink-0  mobile:mr-2 md:mr-4 mobile:w-[60px] md:w-[90px] flex items-center">
            <Link href={`/pages/products/${item?.slug}`}>
              <Image
                src={item?.images[0]}
                alt="product"
                layout="responsive"
                width={90} // Adjust the width based on your design
                height={90} // Adjust the height based on your design
                className="w-full h-full object-cover"
              />
            </Link>
          </div>
          {/* product-card__info */}
          <div className="md:flex md:flex-col mobile:p-2 mobile:order-3 mobile:border-t md:border-none md:order-none mobile:w-full  md:pr-4 xl:pr-0 mt-4 xl:flex-row md:self-stretch  md:grow">
            {/* product-card__meta */}
            <div className="flex md:border-l items-center md:justify-center mobile:m-0 w-[140px] shrink-0  text-xs text-gray-400">
              <span>SKR:</span>
              {item?.sku}
            </div>

            {/* product-card__name */}
            <div className="flex pr-4 grow items-center  md:border-l  text-sm">
              {/* product-card__badges */}
              <div className="left-0 mr-2 relative  inline-block align-middle">
                {item?.isSale}
                <div
                  className={`bg-red-500 pl-2 pr-2 m-1 text-xs text-white ${
                    item.isSale ? "" : "hidden"
                  }`}
                >
                  Sale
                </div>
                <div
                  className={`bg-yellow-500 pl-2 pr-2 m-1 text-xs text-white ${
                    item.isOffer ? "" : "hidden"
                  }`}
                >
                  Offer
                </div>
                <div
                  className={`bg-blue-500 pl-2 pr-2 m-1 text-xs text-white ${
                    item.isNew ? "" : "hidden"
                  }`}
                >
                  New
                </div>
              </div>
              <Link href={`/pages/products/${item?.slug}`}>{item?.name}</Link>
            </div>

            {/* product-card__rating */}
            <div className="flex xl:w-[140px] md:p-4 xl:justify-center pt-0 mt-0 shrink-0  md:border-l  items-center md:flex-wrap xl:flex-col">
              {/* rating product-card__rating-stars */}
              <div>
                {/* rating__body */}
                <div className="flex">
                  <RatingStars rating={item?.rating} />
                  {/* Example rating (adjust as needed) */}
                </div>
              </div>
              {/* product-card__rating-label */}
              <div className="text-xs text-gray-400 pt-1 ">
                {item?.reviews} reviews
              </div>
            </div>
          </div>

          {/* product-card__footer */}
          <div className="flex border-l mobile:grow md:grow-0 pr-4 items-center self-stretch shrink-0 mt-5 mb-2">
            {/* card__prices */}
            <div className="flex flex-col flex-wrap grow  mobile:pl-4 shrink-0 justify-center  md:items-end self-stretch w-[136px] border-r pr-4">
              {/* price--new */}
              <div>
                <FormattedPrice amount={item?.price} />
              </div>
              {/* price--old */}
              <div
                className={`ml-1.5 text-sm  ${
                  item?.oldPrice !== 0
                    ? "line-through text-gray-400 font-normal"
                    : "hidden"
                }`}
              >
                <FormattedPrice amount={item?.oldPrice} />
              </div>
            </div>
            {/* addtocart-icon */}
            <button
              onClick={() =>
                dispatch(addToCart(item)) &&
                toast.success(
                  `${item?.name.substring(0, 15)} add to cart successfully!`,
                  { position: "top-center" }
                )
              }
              className={`relative ml-4 border-0 rounded-full p-2  ${
                hover ? "bg-primary text-white" : " bg-transparent"
              } text-gray-400 hover:bg-secondary hover:text-white`}
            >
              <CiShoppingCart size={25} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card4;
