"use client";
import { exampleProduct } from "@/app/components/data";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import FormattedPrice from "../common/formatted-price";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Products, StateProps } from "../../../../type";
import {
  decreaseQuantity,
  deleteProduct,
  increaseQuantity,
  resetCart,
  saveOrder,
} from "@/redux/slices/user-slice";
import Container from "../container";
import { motion } from "framer-motion";

import { default as EmptyCart } from "../../../../public/icons/empty-cart.svg";
import { useRouter } from "next/navigation";
import Link from "next/link";

const CartComponent = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { productData } = useSelector((state: StateProps) => state?.user);
  const [unSelectedItems, setUnSelectedItems] = useState<string[]>([]);

  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    const subTotal =
      productData
        ?.filter(
          (item: any) =>
            !unSelectedItems.includes("" + item.defaultVariant?.grnProductId)
        )
        .reduce((totalAmount: number, item: Products) => {
          return totalAmount + item.price * item.quantity;
        }, 0) || 0;
    setSubTotal(subTotal);
  }, [productData, unSelectedItems]);

  console.log("unSelectedItems", unSelectedItems);

  const handleCheckboxChange = (itemId: string) => {
    if (unSelectedItems.includes(itemId)) {
      setUnSelectedItems((prevSelectedItems) =>
        prevSelectedItems.filter((id) => id !== itemId)
      );
    } else {
      setUnSelectedItems((prevSelectedItems) => [...prevSelectedItems, itemId]);
    }
  };

  const handleProceedCheckout = () => {
    if (subTotal !== 0) {
      dispatch(saveOrder(unSelectedItems));
      router.push("/pages/checkout");
    }
  };

  return (
    <>
      {productData.length > 0 ? (
        <div>
          {/* Page navigation */}
          <div className="flex flex-wrap mobile:gap-1 md:gap-0 mt-3 px-20">
            <div className=" bg-gray-200 h-5 max-w-12 hover:bg-primary hover:text-white cursor-pointer">
              <div className="-skew-x-12  bg-gray-200 text-gray-400 font-semibold hover:bg-primary hover:text-white text-xs p-1 h-full w-full ml-1 flex items-center">
                <Link href={"/"}>Home</Link>
              </div>
            </div>
            <div className="px-1">
              <div className="-skew-x-12 px-1 bg-gray-200 text-gray-400 font-semibold text-xs hover:bg-primary hover:text-white p-1  w-full ml-1 flex items-center h-5  cursor-pointer">
                <Link href={"/pages/shop"}> Shop</Link>
              </div>
            </div>
            <div className="px-1">
              <div className="-skew-x-12 px-1 bg-gray-200 text-gray-400 font-semibold text-xs hover:bg-primary hover:text-white p-1  w-full  flex items-center h-5  cursor-pointer">
                Cart
              </div>
            </div>
          </div>
          <h1 className="text-4xl font-bold flex mobile:ml-8  md:justify-center mt-3">
            Shopping Cart
          </h1>
          {/* Laptop View */}
          <div className=" mobile:hidden lg:block">
            {/* Table View */}
            <div className="relative overflow-x-auto  sm:rounded-lg px-20 pt-8">
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
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Quantity
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {productData?.map((item: Products, index: number) => (
                    <tr
                      key={index}
                      className="bg-white border-b dark:border-gray-300 hover:bg-gray-50 "
                    >
                      <td className="px-6 py-4 flex items-center">
                        <input
                          id={`checkbox-${index}`}
                          type="checkbox"
                          value=""
                          className="h-4 w-4 rounded accent-primary"
                          defaultChecked={true}
                          onChange={() =>
                            handleCheckboxChange(
                              item.defaultVariant.grnProductId + ""
                            )
                          }
                        />
                        <Image
                          src={item?.images?.[0]}
                          alt="Description of your image"
                          width={90}
                          height={2}
                          className="ml-2"
                        />
                      </td>
                      <td className="px-20 py-4 ">
                        <div>
                          <h2 className="text-md text-secondary">
                            {item?.name}
                          </h2>
                          <h3>
                            - Material:
                            {item?.defaultVariant?.materialName}
                          </h3>
                          <h3>
                            - Color:
                            {item?.defaultVariant?.colorName}
                          </h3>
                          <h3>
                            - Size:
                            {item?.defaultVariant?.sizeName}
                          </h3>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-secondary font-medium">
                        <FormattedPrice amount={item?.price} />
                      </td>
                      <td className="px-6 py-4 ">
                        <div className="flex items-center gap-0">
                          <button
                            onClick={() => dispatch(decreaseQuantity(item))}
                            className="px-3 py-1 bg-gray-300 text-gray-500 rounded-full"
                          >
                            -
                          </button>
                          <input
                            type="number"
                            value={item?.quantity}
                            className="mx-2 w-10 text-center  text-secondary"
                            readOnly
                          />
                          <button
                            onClick={() => dispatch(increaseQuantity(item))}
                            className="px-3 py-1 bg-gray-300  text-gray-500 rounded-full"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="pl-6 py-4 text-secondary font-medium">
                        <FormattedPrice amount={item?.price * item?.quantity} />
                      </td>
                      <td className="px-1 py-4 text-secondary font-medium">
                        <button
                          onClick={() =>
                            dispatch(
                              deleteProduct(item?.defaultVariant.grnProductId)
                            )
                          }
                          className="hover:text-primary"
                        >
                          <IoCloseOutline size={20} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-end">
                <button
                  onClick={() => dispatch(resetCart())}
                  className="h-10 text-sm bg-primary text-white hover:bg-secondary m-6 p-3 flex items-center rounded-sm"
                >
                  Reset Cart
                </button>
              </div>
            </div>
            {/* Cart View */}
            <div>
              <div className="text-sm mb-5 flex justify-end px-10 ">
                <div className="border-2 border-gray-100 p-10 w-[40%]">
                  <table className="w-full">
                    <tbody>
                      <tr>
                        <th className="text-left text-md">Subtotal</th>
                        <td className="text-right text-md font-normal">
                          <FormattedPrice amount={subTotal} />
                        </td>
                      </tr>
                      <tr>
                        <th className="text-left text-md">Shipping</th>
                        <td className="text-right text-md font-normal">
                          $0.00
                        </td>
                      </tr>
                      <tr>
                        <th className="text-left text-md">Tax</th>
                        <td className="text-right text-md font-normal">
                          $0.00
                        </td>
                      </tr>
                      <tr>
                        <th className="text-left text-lg">Total</th>
                        <td className="text-right text-lg font-normal ">
                          <FormattedPrice amount={subTotal} />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <button
                    disabled={subTotal === 0}
                    onClick={handleProceedCheckout}
                    className={`h-12 text-xl font-semibold ${
                      subTotal === 0
                        ? "bg-gray-400"
                        : "bg-primary hover:bg-secondary"
                    }  text-white  w-full mt-8 rounded-md`}
                  >
                    Proceed Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile and Tab View */}
          <div className="mobile:grid lg:hidden grid md:grid-cols-3 md:p-5 md:gap-2">
            {productData?.map((item: Products, index: number) => (
              <div key={index} className="md:p-1 mobile:px-8 mobile:py-3">
                <div className="p-3 border-2 border-gray-200 rounded-sm">
                  <div className="mb-12 relative">
                    <button
                      className="absolute top-2 right-2 text-gray-500 cursor-pointer hover:text-primary"
                      onClick={() =>
                        dispatch(
                          deleteProduct(item?.defaultVariant.grnProductId)
                        )
                      }
                    >
                      <AiOutlineClose size={24} />
                    </button>

                    <input
                      id={`checkbox-${index}`}
                      type="checkbox"
                      value=""
                      className="h-5 w-5  rounded accent-primary absolute top-2 left-2"
                      defaultChecked={true}
                      onChange={() =>
                        handleCheckboxChange(
                          item.defaultVariant.grnProductId + ""
                        )
                      }
                    />
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
                    <h3 className="text-md text-gray-500 flex justify-center">
                      - Material:
                      {item?.defaultVariant.materialName}
                    </h3>
                    <h3 className="text-md text-gray-500 flex justify-center">
                      - Color:
                      {item?.defaultVariant.colorName}
                    </h3>
                    <h3 className="text-md text-gray-500 flex justify-center">
                      - Size:
                      {item?.defaultVariant.sizeName}
                    </h3>
                  </div>
                  {/* Card Price & Quantity */}
                  <div className="mt-3">
                    <div className="flex justify-between border-2 border-gray-100 p-2 ">
                      <h3 className="text-md font-semibold">Price:</h3>
                      <h3 className="text-md font-medium">
                        <FormattedPrice amount={item?.price} />
                      </h3>
                    </div>
                    <div className="flex justify-between border-2 border-gray-100 p-2 gap-5">
                      <h3 className="text-md font-semibold">Quantity:</h3>
                      <div className="grid grid-cols-3">
                        <button
                          onClick={() => dispatch(decreaseQuantity(item))}
                          className="px-0 py-1 bg-gray-300 text-gray-500 rounded-full"
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={item?.quantity}
                          className="mx-2 w-7 text-center  text-secondary"
                          readOnly
                        />
                        <button
                          onClick={() => dispatch(increaseQuantity(item))}
                          className="px-3 py-1 bg-gray-300  text-gray-500 rounded-full"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between border-2 border-gray-100 p-2">
                      <h3 className="text-md font-semibold">Total:</h3>
                      <h3 className="text-md font-medium">
                        <FormattedPrice amount={item?.price * item?.quantity} />
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Cart View */}
            <div className="text-sm mb-5 md:col-span-3">
              <div className="border-2 border-gray-100 mt-8 mobile:p-8 w-full">
                <table className="w-full">
                  <tbody>
                    <tr>
                      <th className="text-left text-lg">Subtotal</th>
                      <td className="text-right text-lg font-normal">
                        <FormattedPrice amount={subTotal} />
                      </td>
                    </tr>
                    <tr>
                      <th className="text-left text-lg">Shipping</th>
                      <td className="text-right text-lg font-normal">$0.00</td>
                    </tr>
                    <tr>
                      <th className="text-left text-lg">Tax</th>
                      <td className="text-right text-lg font-normal">$0.00</td>
                    </tr>
                    <tr>
                      <th className="text-left text-lg">Total</th>
                      <td className="text-right text-lg font-normal ">
                        <FormattedPrice amount={subTotal} />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <button
                  disabled={subTotal === 0}
                  onClick={handleProceedCheckout}
                  className={`h-12 text-xl font-semibold ${
                    subTotal === 0
                      ? "bg-gray-400"
                      : "bg-primary hover:bg-secondary"
                  }  text-white w-full mt-8 rounded-md`}
                >
                  Proceed Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Container>
          {/* Page navigation */}
          <div className="flex flex-wrap mobile:gap-1 md:gap-0 mt-3 px-20">
            <div className=" bg-gray-200 h-5 max-w-12 hover:bg-primary hover:text-white cursor-pointer">
              <div className="-skew-x-12  bg-gray-200 text-gray-400 font-semibold hover:bg-primary hover:text-white text-xs p-1 h-full w-full ml-1 flex items-center">
                <Link href={"/"}>Home</Link>
              </div>
            </div>
            <div className="px-1">
              <div className="-skew-x-12 px-1 bg-gray-200 text-gray-400 font-semibold text-xs hover:bg-primary hover:text-white p-1  w-full ml-1 flex items-center h-5  cursor-pointer">
                <Link href={"/pages/shop"}> Shop</Link>
              </div>
            </div>
            <div className="px-1">
              <div className="-skew-x-12 px-1 bg-gray-200 text-gray-400 font-semibold text-xs hover:bg-primary hover:text-white p-1  w-full  flex items-center h-5  cursor-pointer">
                Cart
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-screen">
            <motion.div
              animate={{
                x: [0, -10, 10, -10, 10, -5, 5, 0],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <EmptyCart height={200} width={200} className="fill-gray-200" />
            </motion.div>

            <div className="text-lg">Your Cart is Empty</div>
          </div>
        </Container>
      )}
    </>
  );
};

export default CartComponent;
