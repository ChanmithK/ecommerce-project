"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Products, StateProps } from "../../../../type";
import { useSelector } from "react-redux";
import FormattedPrice from "../common/formatted-price";
import Link from "next/link";

const Checkout = () => {
  const { orderData } = useSelector((state: StateProps) => state?.user);

  const [isCreateAccount, setIsCreateAccount] = useState(false);
  const [isShipToDifAddress, setIsShipToDifAddress] = useState(false);

  const [isBankTransfer, setIsBankTransfer] = useState(false);
  const [isCashOnDelivery, setIsCashOnDelivery] = useState(false);

  const [selectedOption, setSelectedOption] = useState("Choose a country"); // Set the default value

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    const subTotal =
      orderData?.order?.reduce((totalAmount: number, item: Products) => {
        return totalAmount + item.price * item.quantity;
      }, 0) || 0;
    setSubTotal(subTotal);
  }, [orderData]);

  return (
    <div className="flex flex-col px-8">
      {/* Page navigation */}
      <div className="flex flex-wrap mobile:gap-1 md:gap-0 mt-3">
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
            <Link href={"/pages/cart"}>Cart</Link>
          </div>
        </div>
        <div className="px-0">
          <div className="-skew-x-12 px-1 bg-gray-200 text-gray-400 font-semibold text-xs hover:bg-primary hover:text-white p-1  w-full  flex items-center h-5  cursor-pointer">
            Checkout
          </div>
        </div>
      </div>
      <h1 className="text-4xl font-bold flex mobile:ml-2  md:justify-center mt-3">
        Checkout
      </h1>
      {/* Notify Login */}
      <div className="bg-gray-100 p-4 mt-8">
        <h3 className="text-md text-gray-500">
          Returning customer?{" "}
          <span
            className="text-md text-secondary font-medium cursor-pointer"
            onClick={() => alert("Login")}
          >
            Click here to login
          </span>
        </h3>
      </div>

      {/* Checkout Details */}
      <div className="grid lg:grid-cols-2 gap-5">
        {/* Billing Details */}
        <div className="border-2 border-gray-100">
          <div className="mt-5 p-4 border-b ">
            <h2 className="text-2xl font-medium">Billing Details</h2>
          </div>
          <form className="mx-auto mt-4 p-4">
            <div className="flex gap-2 ">
              <div className="mb-5 w-full ">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium  dark:text-secondary"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-secondary"
                  placeholder="Mark"
                  required
                />
              </div>
              <div className="mb-5 w-full">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium  dark:text-secondary"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-secondary"
                  placeholder="Twain"
                  required
                />
              </div>
            </div>
            <div className="mb-5 w-full">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium  dark:text-secondary"
              >
                Company Name{" "}
                <span className="text-gray-400 font-normal">(Optional)</span>
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-secondary"
                placeholder="Mac Holdings"
              />
            </div>
            <div className="mb-5 w-full">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium  dark:text-secondary"
              >
                Country
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-secondary"
                required
              >
                <option disabled>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
            <div>
              <div className="mb-5 w-full">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium  dark:text-secondary"
                >
                  Street Addrees
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-secondary"
                  placeholder="House number and street name"
                />
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-secondary mt-3"
                  placeholder="Apartment, suite, unit etc."
                />
              </div>
            </div>
            <div className="mb-5 w-full ">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium  dark:text-secondary"
              >
                City
              </label>
              <input
                type="text"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-secondary"
                placeholder="Texas"
                required
              />
            </div>
            <div className="mb-5 w-full ">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium  dark:text-secondary"
              >
                Postalcode
              </label>
              <input
                type="text"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-secondary"
                placeholder="12000"
                required
              />
            </div>
            <div className="flex gap-2 ">
              <div className="mb-5 w-full ">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium  dark:text-secondary"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-secondary"
                  placeholder="user@example.com"
                  required
                />
              </div>
              <div className="mb-5 w-full">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium  dark:text-secondary"
                >
                  Phone Number
                </label>
                <input
                  type="number"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-secondary"
                  placeholder="+94 775645679"
                  required
                />
              </div>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="checkbox-2"
                type="checkbox"
                defaultChecked={isCreateAccount}
                defaultValue={isCreateAccount.toString()}
                onChange={() => setIsCreateAccount(!isCreateAccount)}
                className="h-4 w-4 rounded accent-primary"
              />
              <label
                htmlFor="checkbox-2"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-secondary"
              >
                Create an account?
              </label>
            </div>

            <AnimatePresence mode="wait">
              {isCreateAccount && (
                <motion.div
                  key="details"
                  animate={{ y: 0, opacity: 1 }}
                  initial={{ y: 20, opacity: 0 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-5 w-full ">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium  dark:text-secondary"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-secondary"
                      placeholder="user@example.com"
                      required
                    />
                  </div>
                  <div className="mb-5 w-full ">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium  dark:text-secondary"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-secondary"
                      placeholder="Secret word"
                      required
                    />
                  </div>
                  <div className="mb-5 w-full ">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium  dark:text-secondary"
                    >
                      Repeat password
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-secondary"
                      required
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex items-center mb-4">
              <input
                id="checkbox-3"
                type="checkbox"
                defaultChecked={isShipToDifAddress}
                defaultValue={isShipToDifAddress.toString()}
                onChange={() => setIsShipToDifAddress(!isShipToDifAddress)}
                className="h-4 w-4 rounded accent-primary"
              />
              <label
                htmlFor="checkbox-3"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-secondary"
              >
                Ship to a different address?
              </label>
            </div>

            <AnimatePresence mode="wait">
              {isShipToDifAddress && (
                <motion.div
                  key="details"
                  animate={{ y: 0, opacity: 1 }}
                  initial={{ y: 20, opacity: 0 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <form className="mx-auto mt-4 p-4">
                    <div className="flex gap-2 ">
                      <div className="mb-5 w-full ">
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium  dark:text-secondary"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          id="email"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-secondary"
                          placeholder="Mark"
                          required
                        />
                      </div>
                      <div className="mb-5 w-full">
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium  dark:text-secondary"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="email"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-secondary"
                          placeholder="Twain"
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-5 w-full">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium  dark:text-secondary"
                      >
                        Company Name{" "}
                        <span className="text-gray-400 font-normal">
                          (Optional)
                        </span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-secondary"
                        placeholder="Mac Holdings"
                      />
                    </div>
                    <div className="mb-5 w-full">
                      <label
                        htmlFor="countries"
                        className="block mb-2 text-sm font-medium  dark:text-secondary"
                      >
                        Country
                      </label>
                      <select
                        id="countries"
                        defaultValue={selectedOption}
                        onChange={handleSelectChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-secondary"
                        required
                      >
                        <option selected>Choose a country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                      </select>
                    </div>
                    <div>
                      <div className="mb-5 w-full">
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium  dark:text-secondary"
                        >
                          Street Addrees
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-secondary"
                          placeholder="House number and street name"
                        />
                        <input
                          type="email"
                          id="email"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-secondary mt-3"
                          placeholder="Apartment, suite, unit etc."
                        />
                      </div>
                    </div>
                    <div className="mb-5 w-full ">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium  dark:text-secondary"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-secondary"
                        placeholder="Texas"
                        required
                      />
                    </div>
                    <div className="mb-5 w-full ">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium  dark:text-secondary"
                      >
                        Postalcode
                      </label>
                      <input
                        type="text"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-secondary"
                        placeholder="12000"
                        required
                      />
                    </div>
                    <div className="flex gap-2 ">
                      <div className="mb-5 w-full ">
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium  dark:text-secondary"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-secondary"
                          placeholder="user@example.com"
                          required
                        />
                      </div>
                      <div className="mb-5 w-full">
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium  dark:text-secondary"
                        >
                          Phone Number
                        </label>
                        <input
                          type="number"
                          id="email"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-secondary"
                          placeholder="+94 775645679"
                          required
                        />
                      </div>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>

            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium  dark:text-secondary"
              >
                Order notes{" "}
                <span className="text-gray-400 font-normal">(Optional)</span>
              </label>
              <textarea
                id="message"
                rows={4}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-secondary mb-4"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
          </form>
        </div>
        {/* Order Details */}
        <div className="div">
          <div className="border-2 border-gray-100">
            <div className="mt-5 p-4 border-b ">
              <h2 className="text-2xl font-medium">Billing Details</h2>
            </div>
            <div className="mx-auto mt-4 p-0">
              <div className="flex justify-between border-b border-gray-100 p-4">
                <h3 className="text-sm font-medium">PRODUCT</h3>
                <h3 className="text-sm font-medium">TOTAL</h3>
              </div>

              {/* This should be an array */}
              {orderData?.order?.map((item: Products, index: number) => (
                <div
                  key={index}
                  className="flex justify-between border-b border-gray-100 px-4 mb-2"
                >
                  <h3 className="text-sm font-normal">{item?.name}</h3>
                  <h3 className="text-sm font-normal">
                    <FormattedPrice amount={item?.price} />
                  </h3>
                </div>
              ))}
              <div className="flex flex-col border-b border-gray-100 p-4">
                <div className="flex justify-between w-full">
                  <h3 className="text-sm font-semibold">Subtotal</h3>
                  <FormattedPrice amount={subTotal} />
                </div>
                <div className="flex justify-between w-full mt-2">
                  <h3 className="text-sm font-semibold">Shipping</h3>
                  <FormattedPrice amount={0} />
                </div>
                <div className="flex justify-between w-full mt-2">
                  <h3 className="text-sm font-semibold">Tax</h3>
                  <FormattedPrice amount={0} />
                </div>
              </div>

              <div className="flex justify-between border-b border-gray-100 p-4">
                <h3 className="text-lg font-bold">Total</h3>
                <FormattedPrice amount={subTotal} />
              </div>

              <div className="p-4">
                <div className="flex flex-col items-start mb-4 border-2 border-gray-100 rounded-md p-2">
                  <div className="flex items-center">
                    <input
                      id="default-radio-1"
                      type="radio"
                      value=""
                      name="default-radio"
                      className="h-4 w-4 rounded accent-primary"
                      checked={isBankTransfer}
                      onChange={() => {
                        setIsBankTransfer(true);
                        setIsCashOnDelivery(false);
                      }}
                    />

                    <label
                      htmlFor="default-radio-1"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-secondary"
                    >
                      Direct bank transfer
                    </label>
                  </div>

                  <div>
                    {isBankTransfer && (
                      <motion.div
                        key="details"
                        animate={{ y: 0, opacity: 1 }}
                        initial={{ y: 20, opacity: 0 }}
                        exit={{ y: 20, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full"
                      >
                        <p className="text-sm text-gray-400 p-2">
                          Make your payment directly into our bank account.
                          Please use your Order ID as the payment reference.
                          Your order will not be shipped until the funds have
                          cleared in our account.
                        </p>
                      </motion.div>
                    )}
                  </div>
                </div>

                <div className="flex flex-col items-start mb-4 border-2 border-gray-100 rounded-md p-2">
                  <div className="flex items-center">
                    <input
                      id="default-radio-1"
                      type="radio"
                      value=""
                      name="default-radio"
                      className="h-4 w-4 rounded accent-primary"
                      checked={isCashOnDelivery}
                      onChange={() => {
                        setIsBankTransfer(false);
                        setIsCashOnDelivery(true);
                      }}
                    />

                    <label
                      htmlFor="default-radio-1"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-secondary"
                    >
                      Cash on delivery
                    </label>
                  </div>

                  <div>
                    {isCashOnDelivery && (
                      <motion.div
                        key="details"
                        animate={{ y: 0, opacity: 1 }}
                        initial={{ y: 20, opacity: 0 }}
                        exit={{ y: 20, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full"
                      >
                        <p className="text-sm text-gray-400 p-2">
                          Pay with cash upon delivery.
                        </p>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center mb-4 p-4">
                <input
                  // checked
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="h-4 w-4 rounded accent-primary"
                />
                <label
                  htmlFor="checkbox-1"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-secondary"
                >
                  I have read and agree to the website{" "}
                  <a
                    href="#"
                    className="text-blue-600 hover:underline dark:text-blue-500"
                  >
                    terms and conditions
                  </a>
                  .
                </label>
              </div>

              <div className="flex justify-center mb-8">
                <button className="h-12 text-xl font-semibold bg-primary text-white hover:bg-secondary w-[90%] mt-3 rounded-md ">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
