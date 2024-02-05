import React from "react";

const RequestProduct = () => {
  return (
    <div>
      <div className="mt-5 p-4 border-b ">
        <h2 className="text-2xl font-semibold">Request Product</h2>
      </div>
      <form className="mx-auto mt-4 p-4">
        <div className="mb-5 lg:w-[50%]">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium  dark:text-secondary"
          >
            Product Name
          </label>
          <input
            type="text"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-secondary"
            required
          />
        </div>

        <div className="mb-5 lg:w-[50%]">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium  dark:text-secondary"
          >
            Product Brand
          </label>
          <input
            type="text"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-secondary"
            required
          />
        </div>

        <div className="mb-5 lg:w-[50%]">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium  dark:text-secondary"
          >
            Quantity
          </label>
          <input
            type="number"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-secondary"
            required
          />
        </div>

        <div className="mb-5 lg:w-[50%]">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium  dark:text-secondary"
          >
            Notes <span className="text-gray-400 font-normal">(Optional)</span>
          </label>
          <textarea
            id="message"
            rows={4}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-secondary mb-4"
            placeholder="Leave a comment..."
          ></textarea>
        </div>

        <button className="h-8 w-20 text-sm font-semibold bg-primary text-white hover:bg-secondary  mt-3 rounded-md ">
          Request
        </button>
      </form>
    </div>
  );
};

export default RequestProduct;
