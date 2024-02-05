"use client";
import React, { useState } from "react";
import { default as Plus } from "../../../../public/icons/plus.svg";
import { AnimatePresence, motion } from "framer-motion";

const AddressDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleClosModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div>
      <div onClick={toggleModal}>
        <Plus
          height={90}
          width={90}
          className="fill-black-900 hover:fill-primary cursor-pointer"
        />
        <button className="h-7 text-sm font-medium bg-primary text-white hover:bg-secondary  mt-4 rounded-md w-full">
          Add New
        </button>
      </div>
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
              className="relative p-4 w-full max-w-xl max-h-[80%] overflow-auto "
            >
              {/* Modal content */}
              <div className="relative bg-white  shadow dark:bg-white ">
                <div>
                  <div className="flex justify-between p-6">
                    <h2 className="text-2xl font-semibold">New Address</h2>
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
                  <div className="border-2 border-gray-100">
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
                      <input
                        id={"check-box"}
                        name={""}
                        type="checkbox"
                        className="h-4 w-4 rounded accent-primary"
                      />

                      <label className="ml-3 text-sm text-gray-600">
                        Set as my default address
                      </label>

                      <button className="h-9 text-sm font-medium bg-primary text-white hover:bg-secondary  mt-4 rounded-md w-full">
                        Save
                      </button>
                    </form>
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

export default AddressDetails;
