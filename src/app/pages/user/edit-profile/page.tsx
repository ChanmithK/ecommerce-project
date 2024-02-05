import React from "react";

const EditProfile = () => {
  return (
    <div>
      <div className="mt-5 p-4 border-b ">
        <h2 className="text-2xl font-semibold">Edit Profile</h2>
      </div>
      <form className="mx-auto mt-4 p-4">
        <div className="flex gap-2  mobile:flex-col lg:flex-row">
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

        <div className="flex gap-2 mobile:flex-col lg:flex-row">
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

        <button className="h-8 w-20 text-sm font-semibold bg-primary text-white hover:bg-secondary  mt-3 rounded-md ">
          Save
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
