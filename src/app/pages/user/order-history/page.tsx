"use client";
import OrderDetails from "@/app/components/user/order-detail-modal";
import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const OrderHistory = () => {
  const [selectedOrderOpen, setSelectedOrderOpen] = useState(false);

  const handleCloseOrderModal = () => {
    setSelectedOrderOpen(false);
  };
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full  text-sm text-left rtl:text-right text-gray-50 dark:text-gray-400">
          <thead className="text-xs  uppercase  dark:bg-gray-100 dark:text-black">
            <tr>
              <th scope="col" className="px-6 py-3">
                Number
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-white  dark:border-gray-300 text-gray-500">
              <td
                className="px-6 py-4 text-primary hover:underline cursor-pointer"
                onClick={() => setSelectedOrderOpen(true)}
              >
                #9478
              </td>
              <td className="px-6 py-4 whitespace-nowrap">Oct 19, 2020</td>
              <td className="px-6 py-4">Pending</td>
              <td className="px-6 py-4 whitespace-nowrap">
                $1596.00 for 6 items
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Page navigation example */}
      <div className="  mt-5 border-2 border-gray-100  p-3 items-center">
        <div className="  flex justify-center">
          <nav>
            <ul className="inline-flex -space-x-px text-sm gap-2">
              <li>
                <button className="text-lg flex items-center justify-center px-2 h-8  dark:bg-gray-200  dark:text-secondary rounded-md ">
                  <IoIosArrowBack />
                </button>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8  dark:bg-primary  dark:text-white rounded-md"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8  dark:bg-gray-200  dark:text-secondary rounded-md "
                >
                  2
                </a>
              </li>

              <li>
                <button className="text-lg flex items-center justify-center px-2 h-8  dark:bg-gray-200  dark:text-secondary rounded-md">
                  <IoIosArrowForward />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {selectedOrderOpen && (
        <OrderDetails
          isOpen={selectedOrderOpen}
          onClose={handleCloseOrderModal}
        />
      )}
    </div>
  );
};

export default OrderHistory;
