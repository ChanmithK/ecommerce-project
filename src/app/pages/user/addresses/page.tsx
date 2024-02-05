import React from "react";
import { default as Plus } from "../../../../../public/icons/plus.svg";
import AddressDetails from "@/app/components/user/address-details-modal";

const Addresses = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-1 gap-4">
      {/* Add Address Column */}
      <div className="mobile:col-span-3 lg:col-span-1 flex flex-col items-center justify-center border-2 border-gray-100 p-10 w-full">
        {/* <Plus
          height={90}
          width={90}
          className="fill-black-900 hover:fill-primary cursor-pointer"
        /> */}

        <AddressDetails />
      </div>

      <div className="mobile:col-span-3 lg:col-span-1 flex flex-col items-start border-2 border-gray-100 p-10 w-full">
        <div className="flex w-full justify-between">
          <h2 className="text-secondary text-md font-semibold ">Ryan Ford</h2>

          <div className="bg-red-500 -skew-x-12 pl-2 pr-2 m-1 text-sm text-white">
            DEFAULT
          </div>
        </div>
        {/* Address */}
        <div className="mt-3">
          <h3 className="text-xs font-semibold text-gray-400">Address</h3>
          {/* Street Address */}
          <h3 className="text-sm mt-1">No.19/8 3rd lane</h3>
          {/* Street Address */}
          <h3 className="text-sm">Nagoda Rd, Central Junction</h3>
          {/* City */}
          <h3 className="text-sm">Kalutara</h3>
          {/* Postcode */}
          <h3 className="text-sm">12000</h3>
          {/* Country */}
          <h3 className="text-sm">Sri Lanka</h3>
        </div>

        {/* Phone number */}
        <div className="mt-3">
          <h3 className="text-xs font-semibold text-gray-400">Phone Number</h3>
          {/* Street Address */}
          <h3 className="text-sm mt-1">077456735</h3>
        </div>

        {/* Email */}
        <div className="mt-3">
          <h3 className="text-xs font-semibold text-gray-400">Email</h3>
          {/* Street Address */}
          <h3 className="text-sm mt-1">red-parts@example.com</h3>
        </div>

        <div className="flex mobile:flex-col lg:flex-row lg:justify-between w-full lg:gap-3">
          <button className="h-7 text-sm font-medium bg-primary text-white hover:bg-secondary  mt-4 rounded-md w-full">
            Edit Address
          </button>
          <button className="h-7 text-sm font-medium text-primary border-primary border hover:bg-primary hover:text-white mt-4 rounded-md w-full">
            Delete Address
          </button>
        </div>
      </div>

      <div className="mobile:col-span-3 lg:col-span-1 flex flex-col items-start border-2 border-gray-100 p-10 w-full">
        <div className="flex w-full justify-between">
          <h2 className="text-secondary text-md font-semibold ">Ryan Ford</h2>
        </div>
        {/* Address */}
        <div className="mt-3">
          <h3 className="text-xs font-semibold text-gray-400">Address</h3>
          {/* Street Address */}
          <h3 className="text-sm mt-1">No.19/8 3rd lane</h3>
          {/* Street Address */}
          <h3 className="text-sm">Nagoda Rd, Central Junction</h3>
          {/* City */}
          <h3 className="text-sm">Kalutara</h3>
          {/* Postcode */}
          <h3 className="text-sm">12000</h3>
          {/* Country */}
          <h3 className="text-sm">Sri Lanka</h3>
        </div>

        {/* Phone number */}
        <div className="mt-3">
          <h3 className="text-xs font-semibold text-gray-400">Phone Number</h3>
          {/* Street Address */}
          <h3 className="text-sm mt-1">077456735</h3>
        </div>

        {/* Email */}
        <div className="mt-3">
          <h3 className="text-xs font-semibold text-gray-400">Email</h3>
          {/* Street Address */}
          <h3 className="text-sm mt-1">red-parts@example.com</h3>
        </div>

        <div className="flex mobile:flex-col lg:flex-row lg:justify-between w-full lg:gap-3">
          <button className="h-7 text-sm font-medium bg-primary text-white hover:bg-secondary  mt-4 rounded-md w-full">
            Edit Address
          </button>
          <button className="h-7 text-sm font-medium text-primary border-primary border hover:bg-primary hover:text-white mt-4 rounded-md w-full">
            Delete Address
          </button>
        </div>
      </div>
    </div>
  );
};

export default Addresses;
