import React from "react";

const Password = () => {
  return (
    <div>
      <div className="mt-5 p-4 border-b ">
        <h2 className="text-2xl font-semibold">Change Password</h2>
      </div>
      <form className="mx-auto mt-4 p-4">
        <div className="mb-5 lg:w-[50%]">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium  dark:text-secondary"
          >
            Current Password
          </label>
          <input
            type="password"
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
            New Password
          </label>
          <input
            type="password"
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
            Repeat password
          </label>
          <input
            type="password"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-secondary"
            required
          />
        </div>

        <button className="h-8 w-20 text-sm font-semibold bg-primary text-white hover:bg-secondary  mt-3 rounded-md ">
          Change
        </button>
      </form>
    </div>
  );
};

export default Password;
