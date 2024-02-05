"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import FormattedPrice from "../common/formatted-price";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Products, StateProps } from "../../../../type";
import {
  addToCart,
  deleteProduct,
  removeWishlist,
} from "@/redux/slices/user-slice";

import RatingStars from "../product/rating-stars";
import toast from "react-hot-toast";
import Link from "next/link";

const WishlistComponent = () => {
  const dispatch = useDispatch();

  const { wishlistData } = useSelector((state: StateProps) => state?.user);

  return (
    <div>
      {/* Page navigation */}
      <div className="flex flex-wrap mobile:gap-1 md:gap-0 mt-3 md:px-20 mobile:px-8">
        <div className=" bg-gray-200 h-5 max-w-12 hover:bg-primary hover:text-white cursor-pointer">
          <div className="-skew-x-12  bg-gray-200 text-gray-400 font-semibold hover:bg-primary hover:text-white text-xs p-1 h-full w-full ml-1 flex items-center">
            <Link href={"/"}>Home</Link>
          </div>
        </div>
        <div className="px-1">
          <div className="-skew-x-12 px-1 bg-gray-200 text-gray-400 font-semibold text-xs hover:bg-primary hover:text-white p-1  w-full ml-1 flex items-center h-5  cursor-pointer">
            <Link href={"/pages/shop"}>Shop</Link>
          </div>
        </div>
        <div className="px-1">
          <div className="-skew-x-12 px-1 bg-gray-200 text-gray-400 font-semibold text-xs hover:bg-primary hover:text-white p-1  w-full  flex items-center h-5  cursor-pointer">
            Wishlist
          </div>
        </div>
      </div>
      <h1 className="text-4xl font-bold flex mobile:ml-8  md:justify-center mt-3">
        Wishlist
      </h1>
      {/* Laptop View */}
      <div className=" mobile:hidden lg:block">
        {/* Table View */}
        <div className="relative overflow-x-auto  sm:rounded-lg px-20 pt-8 mb-10">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs uppercase dark:text-secondary border-b dark:border-gray-300">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Image
                </th>
                <th scope="col" className="px-20 py-3">
                  Product
                </th>
                <th scope="col" className="px-6 py-3">
                  Stock status
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {wishlistData?.map((item: Products, index: number) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:border-gray-300 hover:bg-gray-50 "
                >
                  <td className="px-6 py-4 flex items-center">
                    <Image
                      src={item?.images[0]}
                      alt="Description of your image"
                      width={90}
                      height={2}
                      className="ml-2"
                    />
                  </td>
                  <td className="px-20 py-4 ">
                    <div>
                      <h2 className="text-md text-secondary">{item?.name}</h2>
                      <div className="flex items-center">
                        <RatingStars rating={item?.rating} />
                        <h3 className="text-sm ml-2">
                          {item?.reviews} reviews
                        </h3>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-secondary font-medium">
                    <div className="text-xs rounded-xl bg-[#e2f2da] ml-2 p-2 text-[#44782a] w-[70%] flex justify-center">
                      {item?.isStock ? "In Stock" : "Out Of Stock"}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-secondary font-medium">
                    <FormattedPrice amount={item?.price} />
                  </td>

                  <td className="px-1 py-4 text-secondary font-medium">
                    <div className="flex justify-between items-center gap-4">
                      <button
                        onClick={() =>
                          dispatch(addToCart(item)) &&
                          toast.success(
                            `${item?.name.substring(
                              0,
                              15
                            )} add to cart successfully!`,
                            { position: "top-center" }
                          )
                        }
                        className="h-8 text-md font-semibold bg-primary text-white hover:bg-secondary w-[90%] mt-3 rounded-md "
                      >
                        Add to Cart
                      </button>
                      <button
                        onClick={() => dispatch(removeWishlist(item?.id))}
                        className="hover:text-primary mt-3"
                      >
                        <IoCloseOutline size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile and Tab View */}
      <div className="mobile:grid lg:hidden grid md:grid-cols-3 md:p-5 md:gap-2 mt-3">
        {wishlistData?.map((item: Products, index: number) => (
          <div key={index} className="md:p-1 mobile:px-8 mobile:py-3">
            <div className="p-3 border-2 border-gray-200 rounded-sm">
              <div className="mb-12 relative">
                <button
                  className="absolute top-2 right-2 text-gray-500 cursor-pointer hover:text-primary"
                  onClick={() => dispatch(removeWishlist(item?.id))}
                >
                  <AiOutlineClose size={24} />
                </button>
              </div>

              {/* Card Image */}
              <div className="div">
                <Image
                  src={item?.images[0]}
                  alt={"img"}
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              {/* Card Details */}
              <div className="">
                <h2 className="text-md text-secondary text-center">
                  {item?.name}
                </h2>
                <div className="flex flex-col items-center gap-1 mt-1">
                  <RatingStars rating={item?.rating} />
                  <h3 className="text-sm ml-2">{item?.reviews} reviews</h3>
                </div>
              </div>
              <div className="mt-3 flex justify-center">
                <button
                  onClick={() =>
                    dispatch(addToCart(item)) &&
                    toast.success(
                      `${item?.name.substring(
                        0,
                        15
                      )} add to cart successfully!`,
                      { position: "top-center" }
                    )
                  }
                  className="h-8 text-md font-semibold bg-primary text-white hover:bg-secondary w-[90%] mt-3 rounded-md "
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistComponent;
