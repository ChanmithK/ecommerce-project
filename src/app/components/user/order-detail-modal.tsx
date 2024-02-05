"use client";
import React, { useEffect, useState } from "react";
import { default as Plus } from "../../../../public/icons/plus.svg";
import { AnimatePresence, motion } from "framer-motion";
import FormattedPrice from "../common/formatted-price";

interface OrderDetailsProps {
  isOpen: boolean;
  onClose?: () => void;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ isOpen, onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  const toggleClosModal = () => {
    setIsModalOpen(!isModalOpen);
    if (onClose) {
      onClose();
    }
  };
  return (
    <div>
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            id="authentication-modal"
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            tabIndex={-1}
            aria-hidden="true"
            className="fixed top-0 right-0 bottom-0 left-0 z-50 flex items-center justify-center bg-black bg-opacity-50 "
          >
            <motion.div
              key="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative p-4 w-full max-w-3xl max-h-[80%] overflow-auto "
            >
              {/* Modal content */}
              <div className="relative bg-white  shadow dark:bg-white ">
                <div>
                  <div className="flex justify-between p-6 border-b">
                    <div className="flex flex-col">
                      <h2 className="text-2xl font-semibold">
                        Order <span className="text-primary">9478</span>
                      </h2>
                      <h4 className="text-gray-600 mobile:text-xs lg:text-sm">
                        Was placed on{" "}
                        <span className="font-semibold text-secondary">
                          October 19, 2020
                        </span>{" "}
                        and is currently{" "}
                        <span className="font-semibold text-secondary">
                          Pending
                        </span>
                        .
                      </h4>
                    </div>
                    <button
                      type="button"
                      className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-300 dark:hover:text-white"
                      data-modal-hide="authentication-modal"
                      onClick={toggleClosModal}
                    >
                      <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>
                  <div className="px-6 py-2">
                    <div className="flex justify-between border-b border-gray-200 p-4 ">
                      <h3 className="text-sm font-medium">PRODUCT</h3>
                      <h3 className="text-sm font-medium">TOTAL</h3>
                    </div>

                    {/* This should be an array */}

                    <div className="flex justify-between border-b border-gray-200 px-4 py-2 mb-2">
                      <h3 className="text-sm font-normal">
                        Brandix Spark Plug Kit ASR-400 × 2
                      </h3>
                      <h3 className="text-sm font-normal">
                        <FormattedPrice amount={38} />
                      </h3>
                    </div>

                    <div className="flex flex-col border-b border-gray-100 p-4">
                      <div className="flex justify-between w-full">
                        <h3 className="text-sm font-semibold">Subtotal</h3>
                        <h3 className="text-sm font-normal">$19.00</h3>
                      </div>
                      <div className="flex justify-between w-full mt-2">
                        <h3 className="text-sm font-semibold">Shipping</h3>
                        <h3 className="text-sm font-normal">$19.00</h3>
                      </div>
                      <div className="flex justify-between w-full mt-2">
                        <h3 className="text-sm font-semibold">Tax</h3>
                        <h3 className="text-sm font-normal">$19.00</h3>
                      </div>
                    </div>

                    <div className="flex justify-between border-b border-gray-200 p-4">
                      <h3 className="text-lg font-bold">Total</h3>
                      <h3 className="text-lg font-semibold">$57.00</h3>
                    </div>

                    <div className="grid grid-cols-2 grid-rows-1 gap-4 mt-3">
                      <div className="mobile:col-span-2 lg:col-span-1 flex flex-col items-start border-2 border-gray-100 p-10 w-full">
                        <div className="flex w-full justify-between">
                          <h2 className="text-secondary text-md font-semibold ">
                            Ryan Ford
                          </h2>

                          <div className="bg-red-500 -skew-x-12 pl-2 pr-2 m-1 text-xs text-white">
                            BILLING ADDRESS
                          </div>
                        </div>
                        {/* Address */}
                        <div className="mt-3">
                          <h3 className="text-xs font-semibold text-gray-400">
                            Address
                          </h3>
                          {/* Street Address */}
                          <h3 className="text-sm mt-1">No.19/8 3rd lane</h3>
                          {/* Street Address */}
                          <h3 className="text-sm">
                            Nagoda Rd, Central Junction
                          </h3>
                          {/* City */}
                          <h3 className="text-sm">Kalutara</h3>
                          {/* Postcode */}
                          <h3 className="text-sm">12000</h3>
                          {/* Country */}
                          <h3 className="text-sm">Sri Lanka</h3>
                        </div>

                        {/* Phone number */}
                        <div className="mt-3">
                          <h3 className="text-xs font-semibold text-gray-400">
                            Phone Number
                          </h3>
                          {/* Street Address */}
                          <h3 className="text-sm mt-1">077456735</h3>
                        </div>

                        {/* Email */}
                        <div className="mt-3">
                          <h3 className="text-xs font-semibold text-gray-400">
                            Email
                          </h3>
                          {/* Street Address */}
                          <h3 className="text-sm mt-1">
                            red-parts@example.com
                          </h3>
                        </div>
                      </div>

                      <div className="mobile:col-span-2 lg:col-span-1 flex flex-col items-start border-2 border-gray-100 p-10 w-full">
                        <div className="flex w-full justify-between">
                          <h2 className="text-secondary text-md font-semibold ">
                            Ryan Ford
                          </h2>
                        </div>
                        {/* Address */}
                        <div className="mt-3">
                          <h3 className="text-xs font-semibold text-gray-400">
                            Address
                          </h3>
                          {/* Street Address */}
                          <h3 className="text-sm mt-1">No.19/8 3rd lane</h3>
                          {/* Street Address */}
                          <h3 className="text-sm">
                            Nagoda Rd, Central Junction
                          </h3>
                          {/* City */}
                          <h3 className="text-sm">Kalutara</h3>
                          {/* Postcode */}
                          <h3 className="text-sm">12000</h3>
                          {/* Country */}
                          <h3 className="text-sm">Sri Lanka</h3>
                        </div>

                        {/* Phone number */}
                        <div className="mt-3">
                          <h3 className="text-xs font-semibold text-gray-400">
                            Phone Number
                          </h3>
                          {/* Street Address */}
                          <h3 className="text-sm mt-1">077456735</h3>
                        </div>

                        {/* Email */}
                        <div className="mt-3">
                          <h3 className="text-xs font-semibold text-gray-400">
                            Email
                          </h3>
                          {/* Street Address */}
                          <h3 className="text-sm mt-1">
                            red-parts@example.com
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OrderDetails;
