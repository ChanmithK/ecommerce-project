"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { TiDeleteOutline } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { Products, StateProps } from "../../../../type";
import FormattedPrice from "./formatted-price";
import { deleteProduct, saveOrder } from "@/redux/slices/user-slice";
import { default as EmptyCart } from "../../../../public/icons/empty-cart.svg";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface Props {
  setIsDropCart: (isDropCart: boolean) => void;
}

const DropCart = ({ setIsDropCart }: Props) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { productData } = useSelector((state: StateProps) => state?.user);
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    const subTotal =
      productData?.reduce((totalAmount: number, item: Products) => {
        return totalAmount + item.price * item.quantity;
      }, 0) || 0;
    setSubTotal(subTotal);
  }, [productData]);

  return (
    <div className="absolute right-0 top-13 z-40 drop-shadow-lg">
      <div className="py-3">
        <div className="w-4 h-4 md:right-3 lg:right-1/2 absolute mt-1 bg-gray-50 border-solid  rotate-45"></div>
      </div>
      <div
        className={`bg-gray-50 p-5 min-h-[50px] max-h-[450px] flex  flex-wrap `}
      >
        <div className="w-80  p-6  ">
          {/* dropcart__list */}
          {productData.length > 0 ? (
            <div>
              <ul className="list-none border-b max-h-52 overflow-y-auto">
                {/* dropcart__item */}
                {productData?.map((item: Products, index: number) => (
                  <li key={index} className="flex">
                    {/* dropcart__item-image image image--type--product */}
                    <div className="shrink-0 w-[70px]">
                      <Link href={"#"}>
                        <Image
                          src={item?.images?.[0]}
                          alt="product"
                          layout="responsive"
                          width={400} // Adjust the width based on your design
                          height={400} // Adjust the height based on your design
                        />
                      </Link>
                    </div>
                    {/* dropcart__item-info */}
                    <div className="pt-2 pb-2 ml-2 mr-2 grow">
                      {/* dropcart__item-name */}
                      <div className="text-sm">
                        <Link href={"#"} className="text-black">
                          {item.name}
                        </Link>
                      </div>
                      {/* dropcart__item-meta */}
                      <div className="flex items-center">
                        {/* dropcart__item-quantity */}
                        <div className="relative -skew-x-12 bg-primary text-white text-xs p-1 rounded-l-lg h-5">
                          {item.quantity}
                        </div>
                        {/* dropcart__item-price */}
                        <div className="relative text-xs p-1 bg-gray-200 -skew-x-12 h-5">
                          {item.price}
                        </div>
                      </div>
                    </div>
                    {/* dropcart__item-remove */}
                    <button
                      onClick={() =>
                        dispatch(
                          deleteProduct(item?.defaultVariant.grnProductId)
                        )
                      }
                      className="hover:text-primary"
                    >
                      <TiDeleteOutline size={20} />
                    </button>
                  </li>
                ))}
              </ul>

              {/* dropcart__totals */}
              <div className="text-sm  mt-4 mb-5">
                <table className="w-full">
                  <tbody>
                    <tr>
                      <th className="text-left">Subtotal</th>
                      <td className="text-right">
                        <FormattedPrice amount={subTotal} />
                      </td>
                    </tr>
                    <tr>
                      <th className="text-left">Shipping</th>
                      <td className="text-right">$0.00</td>
                    </tr>
                    <tr>
                      <th className="text-left">Tax</th>
                      <td className="text-right">$0.00</td>
                    </tr>
                    <tr>
                      <th className="text-left">Total</th>
                      <td className="text-right">
                        <FormattedPrice amount={subTotal} />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* dropcart__actions */}
              <div className="flex">
                <button
                  onClick={() => {
                    router.push("/pages/cart");
                    setIsDropCart(false);
                  }}
                  className="grow h-10 text-sm bg-gray-300 text-black hover:bg-gray-400 m-1"
                >
                  View Cart
                </button>
                <button
                  onClick={() => {
                    setIsDropCart(false);
                    dispatch(saveOrder([]));
                    router.push("/pages/checkout");
                  }}
                  className="grow h-10 text-sm bg-primary text-white hover:bg-secondary m-1"
                >
                  Checkout
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center w-full">
              <motion.div
                animate={{
                  x: [0, -10, 10, -10, 10, -5, 5, 0],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <EmptyCart height={100} width={100} className="fill-gray-200" />
              </motion.div>

              <div className="text-sm">Your Cart is Empty</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DropCart;
