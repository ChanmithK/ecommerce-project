import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";
import { IoStatsChart } from "react-icons/io5";
import { TbFocusCentered, TbHeartFilled } from "react-icons/tb";
import RatingStars from "../rating-stars";
import Image from "next/image";

import { CiShoppingCart } from "react-icons/ci";
import { ItemProps } from "../../../../../type";
import { useDispatch } from "react-redux";
import { addToCart, addToWishlist } from "@/redux/slices/user-slice";
import FormattedPrice from "../../common/formatted-price";
import toast from "react-hot-toast";
import { viewModal } from "@/redux/slices/temporary-data-slice";
import Link from "next/link";

const Card2 = ({ item }: ItemProps) => {
  const dispatch = useDispatch();

  const [hover, setHover] = useState(false);
  const div2Animation = useAnimation();

  const handleDiv1HoverStart = async () => {
    setHover(true);
    await div2Animation?.start({ x: 0 });
  };

  const handleDiv1HoverEnd = async () => {
    setHover(false);
    await div2Animation?.start({ x: 50 });
  };

  return (
    <motion.div
      onHoverStart={handleDiv1HoverStart}
      onHoverEnd={handleDiv1HoverEnd}
      onTapStart={handleDiv1HoverStart}
      onTap={handleDiv1HoverEnd}
      className="flex flex-col relative m-2 border rounded shadow-md "
    >
      {/* product-card__actions-list */}
      <div className="flex absolute overflow-hidden z-10 right-0  flex-col">
        <button
          onClick={() => {
            dispatch(viewModal(item));
          }}
          className="relative p-2 hover:bg-gray-200"
        >
          <TbFocusCentered />
        </button>
        <motion.button
          initial={{ x: 50 }}
          animate={div2Animation}
          onClick={() => {
            dispatch(addToWishlist(item));
          }}
          className="relative p-2  hover:bg-gray-200"
        >
          <TbHeartFilled />
        </motion.button>
        <motion.button
          initial={{ x: 50 }}
          animate={div2Animation}
          className="relative p-2  hover:bg-gray-200"
        >
          <IoStatsChart />
        </motion.button>
      </div>

      {/* product-card__image */}
      <div className=" relative block">
        <Link href={`/pages/products/${item?.slug}`}>
          <Image
            src={item?.images[0]}
            alt="product"
            layout="responsive"
            width={800} // Adjust the width based on your design
            height={800} // Adjust the height based on your design
            className="w-full h-full object-cover"
          />
        </Link>
      </div>
      {/* product-card__info */}
      <div className="flex flex-col">
        {/* product-card__meta */}
        <div className="flex pt-1.5 pl-4 text-sm text-gray-400">
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
        <div className="pt-2 pl-4 text-xs text-gray-400">
          <ul className="list-disc pl-4">
            {item?.keyFeatures.map((feature: string, index: number) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
      {/* product-card__footer */}
      <div className="p-4 items-center flex order-2">
        {/* card__prices */}
        <div className="grow text-lg flex items-end flex-wrap">
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
          className={`relative border-0 rounded-full p-2  ${
            hover ? "bg-primary text-white" : " bg-transparent"
          } text-gray-400 hover:bg-secondary hover:text-white`}
        >
          <CiShoppingCart size={25} />
        </button>
      </div>
    </motion.div>
  );
};

export default Card2;
