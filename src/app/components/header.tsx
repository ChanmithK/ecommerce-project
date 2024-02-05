"use client";

import React, { useEffect, useRef, useState } from "react";

import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import DropCart from "./common/dropcart";
import { useSelector } from "react-redux";
import { StateProps, Products } from "../../../type";
import FormattedPrice from "./common/formatted-price";
import { useRouter } from "next/navigation";
import LoginOrRgister from "./login&register";
import AutocompleteInput from "./common/autocomplete-input";
import Image from "next/image";

const Header = () => {
  const router = useRouter();
  const [isHeaderTopVisible, setIsHeaderTopVisible] = useState(true);
  const [isDropCart, setIsDropCart] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const { productData } = useSelector((state: StateProps) => state?.user);
  const { wishlistData } = useSelector((state: StateProps) => state?.user);

  const [subTotal, setSubTotal] = useState(0);
  const [totalItem, setTotalItem] = useState(0);

  useEffect(() => {
    const subTotal =
      productData?.reduce((totalAmount: number, item: Products) => {
        return totalAmount + item.price * item.quantity;
      }, 0) || 0;
    setSubTotal(subTotal);

    const totalItem =
      productData?.reduce((quantity: number, item: Products) => {
        return quantity + item.quantity;
      }, 0) || 0;

    setTotalItem(totalItem);
  }, [productData]);

  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsDropCart(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderTopVisible(window.scrollY < 45);
    };

    document.addEventListener("click", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      {/* Header Top */}
      <div
        className={`border-b border-gray-200 hidden sm:block  ${
          isHeaderTopVisible ? "" : "hidden"
        }`}
      >
        <div className="container py-4">
          <div className="flex justify-between items-center">
            <div className="hidden lg:flex gap-1">
              <div className="header_top__icon_wrapper">
                <BsFacebook />
              </div>
              <div className="header_top__icon_wrapper">
                <BsTwitter />
              </div>
              <div className="header_top__icon_wrapper">
                <BsInstagram />
              </div>
              <div className="header_top__icon_wrapper">
                <BsLinkedin />
              </div>
            </div>

            <div className="text-gray-500 text-[12px]">
              <b>FREE SHIPPING</b> THIS WEEK ORDER OVER - $55
            </div>

            <div className="flex gap-4">
              <select
                className="text-gray-500 text-[12px] w-[70px]"
                name="currency"
                id="currency"
              >
                <option value="USD $">USD $</option>
                <option value="EUR €">EUR €</option>
                <option value="INR">INR</option>
              </select>

              <select
                className="text-gray-500 text-[12px] w-[80px]"
                name="language"
                id="language"
              >
                <option value="English">English</option>
                <option value="French">French</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Header Main */}
      <div
        className={`border-b border-gray-200 py-6 ${
          isHeaderTopVisible ? "" : "fixed top-0 left-0 right-0 z-30 bg-white"
        }`}
      >
        <div className="container sm:flex justify-between items-center">
          <div
            onClick={() => {
              router.push("/");
            }}
            className="font-bold text-4xl text-center pb-4 sm:pb-0 text-blackish cursor-pointer"
          >
            <Image
              src={"/logo.svg"}
              alt="product"
              layout="responsive"
              width={56}
              height={56}
              className=" md:max-h-56 md:max-w-56 object-cover"
            />
          </div>

          <div className="w-full sm:w-[300px] md:w-[60%] relative">
            {/* <input
              className="border-gray-200 border p-2 px-4 rounded-lg w-full"
              type="text"
              placeholder="Enter any product name..."
            />

            <IoSearchOutline
              className="absolute right-0 top-0 mr-3 mt-3 text-gray-400"
              size={20}
            /> */}
            <AutocompleteInput />
          </div>

          <div className="hidden md:flex gap-4 text-gray-500 text-[30px] items-center">
            <LoginOrRgister />

            <div className="relative pl-3 pr-3 border-l border-r border-gray-300">
              <CiHeart
                onClick={() => {
                  router.push("/pages/wishlist");
                }}
                className="hover:text-primary cursor-pointer"
              />
              <div className="bg-secondary rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center -translate-x-1 -translate-y-1">
                {wishlistData?.length}
              </div>
            </div>

            <div ref={ref} className="relative  ">
              <div
                onClick={() => {
                  setIsDropCart(!isDropCart);
                }}
                className="md:hidden lg:grid grid-cols-2 grid-rows-2   hover:text-primary cursor-pointer"
              >
                <div className="flex justify-end items-end pr-4 ">
                  <div className="text-xs font-normal capitalize whitespace-nowrap">
                    Shopping Cart:
                  </div>
                </div>
                <div className="col-start-1 row-start-2 flex items-start">
                  <span className="text-base font-bold tracking-tighter">
                    <FormattedPrice amount={subTotal} />
                  </span>
                </div>
                <div className="row-span-2 col-start-2 row-start-1 flex items-center">
                  <CiShoppingCart />
                  <span className="bg-secondary rounded-full w-[18px] h-[18px] text-[12px] text-white grid place-items-center -translate-x-2 -translate-y-2">
                    {totalItem}
                  </span>
                </div>
              </div>

              {/* tab view  */}
              <div
                className="lg:hidden"
                onClick={() => {
                  setIsDropCart(!isDropCart);
                }}
              >
                <CiShoppingCart className="hover:text-primary cursor-pointer" />
                <div className="bg-secondary  rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
                  {totalItem}
                </div>
              </div>

              {/* Drop Cart menu */}
              <div className={`${isDropCart ? "" : "hidden"}`}>
                <DropCart setIsDropCart={setIsDropCart} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
