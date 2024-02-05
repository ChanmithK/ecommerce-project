import React, { useState } from "react";

import RatingStars from "../rating-stars";
import Image from "next/image";
import { ItemProps } from "../../../../../type";
import { useDispatch } from "react-redux";

import Link from "next/link";
import { TbFocusCentered, TbHeartFilled } from "react-icons/tb";
import FormattedPrice from "../../common/formatted-price";
import { IoStatsChart } from "react-icons/io5";
import { addToCart, addToWishlist } from "@/redux/slices/user-slice";
import toast from "react-hot-toast";
import { viewModal } from "@/redux/slices/temporary-data-slice";

const Card3 = ({ item }: ItemProps) => {
  const dispatch = useDispatch();

  return (
    //  products-list
    <div className="flex m-2 shrink-0 border rounded shadow-md">
      {/* product-card */}
      <div className="flex mobile:flex-col  md:flex-row  relative w-full">
        {/* actions-list */}
        <div className="absolute overflow-hidden z-1 right-0">
          <button
            onClick={() => {
              dispatch(viewModal(item));
            }}
            className="relative p-2 hover:bg-gray-200"
          >
            <TbFocusCentered />
          </button>
        </div>

        {/* product-card__image */}
        <div className="pt-4 pr-6 w-[260px]">
          <Link href={`/pages/products/${item?.slug}`}>
            <Image
              src={item?.images[0]}
              alt="product"
              layout="responsive"
              width={260} // Adjust the width based on your design
              height={260} // Adjust the height based on your design
              className="w-full h-full object-cover"
            />
          </Link>
        </div>
        {/* product-card__info */}
        <div className="pt-6 pr-6 grow">
          {/* product-card__meta */}
          <div className="absolute right-5 bottom-0 p-0 text-center h-9 leading-8 border-t  mobile:w-[85%] xs:w-[90%]  mobile:ml-8  md:w-[220px] text-sm text-gray-400">
            <span>SKR:</span>
            {item?.sku}
          </div>
          {/* product-card__name */}
          <div className="flex pl-4">
            {/* product-card__badges */}
            <div className="left-[16px] absolute top-4 flex z-10 flex-start flex-col">
              {item?.isSale}
              <div
                className={`bg-red-500 -skew-x-12 pl-2 pr-2 m-1 text-sm text-white ${
                  item.isSale ? "" : "hidden"
                }`}
              >
                Sale
              </div>
              <div
                className={`bg-yellow-500 -skew-x-12 pl-2 pr-2 m-1 text-sm text-white ${
                  item.isOffer ? "" : "hidden"
                }`}
              >
                Offer
              </div>
              <div
                className={`bg-blue-500 -skew-x-12 pl-2 pr-2 m-1 text-sm text-white ${
                  item.isNew ? "" : "hidden"
                }`}
              >
                New
              </div>
            </div>
            <Link href={`/pages/products/${item?.slug}`}>{item?.name}</Link>
          </div>
          {/* product-card__rating */}
          <div className="flex flex-wrap pt-2 pl-4">
            {/* rating product-card__rating-stars */}
            <div>
              {/* rating__body */}
              <div className="flex">
                <RatingStars rating={item?.rating} />
                {/* Example rating (adjust as needed) */}
              </div>
            </div>
            {/* product-card__rating-label */}
            <div className="text-xs text-gray-400 pt-1 pl-2">
              {item?.reviews} reviews
            </div>
          </div>

          {/* card__features */}
          <div className="pt-2 pl-4 pb-4 text-xs text-gray-400">
            <ul className="list-disc pl-4">
              {item?.keyFeatures.map((feature: string, index: number) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* product-card__footer */}
        <div className="flex order-2 mobile:border-t md:border-t-0  md:border-l shrink-0 flex-col items-center mobile:w-full  md:w-[260px] p-6">
          {/* card__prices */}
          <div className="flex flex-end flex-wrap justify-center p-6">
            {/* price--new */}
            <div className={`${item?.oldPrice !== 0 ? "" : "hidden"}`}>
              <FormattedPrice amount={item?.price} />
            </div>
            {/* price--old */}
            <div className="ml-1.5 text-sm line-through text-gray-400 font-normal">
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
            className="bg-primary hover:bg-secondary text-white rounded-sm h-9 w-full mb-2"
          >
            Add to cart
          </button>

          <button
            onClick={() => {
              dispatch(addToWishlist(item));
            }}
            className="flex  items-center relative p-1 text-xs  hover:bg-gray-200"
          >
            <TbHeartFilled className="mr-2" /> Add to wishlist
          </button>
          <button className="flex  items-center relative p-1 mb-5 text-xs  hover:bg-gray-200">
            <IoStatsChart className="mr-2" /> Add to compare
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card3;
