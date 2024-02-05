import React from "react";
import { IoLocation, IoMail, IoPhonePortraitSharp } from "react-icons/io5";

const InformationContactUs = () => {
  return (
    <div className="p-8 border-2 border-gray-100">
      <div>
        <h3 className="text-sm text-gray-400">INFORMATION ABOUT US</h3>
        <h2 className="text-2xl text-secondary mt-2">
          CONTACT US FOR ANY QUESTIONS
        </h2>
      </div>
      <div>
        <form className="mx-auto mt-4 md:p-4">
          <div className="flex gap-2  mobile:flex-col lg:flex-row">
            <div className="mb-5 w-full ">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium  dark:text-secondary"
              >
                Your Name
              </label>
              <input
                type="text"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-secondary"
                placeholder="Mark"
                required
              />
            </div>
            <div className="mb-5 w-full ">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium  dark:text-secondary"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-secondary"
                placeholder="user@example.com"
                required
              />
            </div>
          </div>

          <div className="flex gap-2 mobile:flex-col lg:flex-row">
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
            <div className="mb-5 w-full ">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium  dark:text-secondary"
              >
                Company{" "}
                <span className="text-gray-400 font-normal">(Optional)</span>
              </label>
              <input
                type="text"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-secondary"
                required
              />
            </div>
          </div>

          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium  dark:text-secondary"
          >
            Order notes
          </label>
          <textarea
            id="message"
            rows={4}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-secondary mb-4"
            placeholder="Leave a comment..."
          ></textarea>

          <button className="h-8 px-3 text-sm font-semibold bg-primary text-white hover:bg-secondary  mt-3 rounded-md ">
            Ask Question
          </button>
        </form>
      </div>

      <div className="grid mobile:grid-cols-1 lg:grid-cols-2 md:p-4 mobile:py-4 gap-4">
        <div className="flex flex-col gap-8 border-2 border-gray-100 p-6">
          <div className="flex gap-3 items-center">
            <div className="flex items-center text-3xl">
              <IoLocation />
            </div>
            <div>
              <p className=" text-md text-gray-700">
                <span className=" text-md text-secondary font-semibold">
                  Address:
                </span>{" "}
                3-875, Dominion Road Balmoral Auckland 1041, New Zealand.
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="flex items-center text-3xl">
              <IoPhonePortraitSharp />
            </div>
            <div>
              <p className=" text-md text-gray-700">
                <span className=" text-md text-secondary font-semibold">
                  Phone:
                </span>{" "}
                (09) 620 1000 0277261010
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="flex items-center text-3xl">
              <IoMail />
            </div>
            <div>
              <p className=" text-md text-gray-700">
                <span className=" text-md text-secondary font-semibold">
                  Email:
                </span>{" "}
                info@serandib.co.nz
              </p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default InformationContactUs;
