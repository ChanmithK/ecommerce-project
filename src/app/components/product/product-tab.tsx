"use client";
import React, { useState } from "react";
import RatingStars from "./rating-stars";
import Image from "next/image";
import Pagination from "../common/pagination";
import { Products } from "../../../../type";
import { useSelector } from "react-redux";
import {
  selectLoading,
  selectProduct,
} from "@/redux/slices/temporary-data-slice";
import ProductTabSkeleton from "../skeletonLoadings/product-tab-skeleton";

const ProductTab = () => {
  const [selectedTab, setSelectedTab] = useState("specification");
  const [currentPage, setCurrentPage] = useState(1);

  const item: Products | undefined = useSelector(selectProduct)?.[0];
  const isLoading = useSelector(selectLoading);

  const handleTabClick = (
    tab: string,
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();
    setSelectedTab(tab);
    setCurrentPage(1);
  };

  const reviewsPerPage = 4;
  const startIndex = (currentPage - 1) * reviewsPerPage;
  const endIndex = startIndex + reviewsPerPage;
  const paginatedReviews = item?.productReviews.slice(startIndex, endIndex);

  const renderTabContent = () => {
    switch (selectedTab) {
      case "description":
        return (
          <div className="lg:p-8 mobile:p-3 border-4 border-gray-100 rounded-2xl mt-3">
            <p className="mobile:text-sm md:text-md">{item?.longDescription}</p>
          </div>
        );
      case "specification":
        return (
          <div className="lg:p-8 mobile:p-3 border-4 border-gray-100 rounded-2xl mt-3">
            <div className="">
              <h3 className="text-md font-semibold">General</h3>
              {item?.keyGenerals?.map((productSpec: any, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 p-1 mt-3 grid lg:grid-cols-6 mobile:grid-cols-2"
                >
                  <div className=" col-span-1 text-sm font-medium text-gray-500">
                    {productSpec.keySpec}
                  </div>
                  <div className=" col-span-1 text-sm">
                    {productSpec.valueSpec}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 ">
              <h3 className="text-md font-semibold">Dimensions</h3>
              {item?.keyDimensions?.map((productDimSpec: any, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 p-1 mt-3 grid lg:grid-cols-6 mobile:grid-cols-2"
                >
                  <div className=" col-span-1 text-sm font-medium text-gray-500">
                    {productDimSpec.keySpec}
                  </div>
                  <div className=" col-span-1 text-sm">
                    {productDimSpec.valueSpec}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "reviews":
        return (
          <div>
            <div className="">
              {paginatedReviews?.map((review, index) => (
                <div key={index}>
                  <div className="border-gray-100 p-4 grid lg:grid-cols-12 mobile:grid-cols-2 border-b-2 rounded-2xl mt-3 mobile:hidden md:grid">
                    <div className="col-span-1 flex justify-center items-center">
                      <Image
                        src={"/images/products/man.jpg"}
                        alt="Description of your image"
                        width={60}
                        height={60}
                        className="rounded-full "
                        style={{
                          borderRadius: "50%",
                          objectFit: "cover",
                          aspectRatio: "1 / 1",
                        }}
                      />
                    </div>
                    <div className="col-span-11 mt-2 lg:mt-0">
                      <div className="flex items-center">
                        <div className="text-md font-semibold">
                          {review.name}
                        </div>
                        <div className="text-xs text-gray-400 ml-2">
                          {review.date}
                        </div>
                      </div>
                      <div className="flex items-center mt-1">
                        <RatingStars rating={review.rating} />
                      </div>
                      <p className="text-sm mt-2">{review.description}</p>
                    </div>
                  </div>

                  <div className=" p-4 grid lg:grid-cols-3  border-b-2 rounded-xl border-gray-100 mt-3 md:hidden mobile:grid">
                    <div className="col-span-1 flex justify-center items-center">
                      <Image
                        src={"/images/products/man.jpg"}
                        alt="Description of your image"
                        width={45}
                        height={45}
                        className="rounded-full"
                        style={{
                          borderRadius: "50%",
                          objectFit: "cover",
                          aspectRatio: "1 / 1",
                        }}
                      />
                    </div>
                    <div className="col-span-2  lg:mt-0">
                      <div className="flex items-center">
                        <div className="text-sm font-semibold">
                          {review.name}
                        </div>
                        <div className="text-xs text-gray-400 ml-2">
                          {review.date}
                        </div>
                      </div>
                      <div className="flex items-center mt-1">
                        <RatingStars rating={review.rating} />
                      </div>
                    </div>
                    <p className="text-xs mt-2 col-span-3">
                      {review.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <nav aria-label="Page navigation example">
              <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(
                  item?.productReviews.length / reviewsPerPage
                )}
                onPageChange={(page: number) => setCurrentPage(page)}
              />
            </nav>

            <div className="grid lg:grid-cols-2 gap-5 mt-4">
              {/* Write A Review */}
              <div className="border-2 border-gray-100">
                <div className=" p-4 border-b ">
                  <h2 className="text-2xl font-medium">Write A Review</h2>
                </div>
                <form className="mx-auto mt-4 p-4">
                  <div className="flex mobile:flex-col md:flex-row gap-2">
                    <div className="mb-5 w-full">
                      <label
                        htmlFor="countries"
                        className="block mb-2 text-sm font-medium  dark:text-secondary"
                      >
                        Rating
                      </label>
                      <select
                        id="countries"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-secondary"
                        required
                      >
                        <option disabled>Choose a rating</option>
                        <option value="US">5 stars rating</option>
                        <option value="CA">4 stars rating</option>
                        <option value="FR">3 stars rating</option>
                        <option value="DE">2 stars rating</option>
                        <option value="DE">1 stars rating</option>
                      </select>
                    </div>
                    <div className="mb-5 w-full">
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
                        placeholder="Twain Mark"
                        required
                      />
                    </div>
                    <div className="mb-5 w-full">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium  dark:text-secondary"
                      >
                        Email address
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
                  <div>
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-medium  dark:text-secondary"
                    >
                      Your Review
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-secondary mb-4"
                    ></textarea>
                  </div>
                  <button className="h-12 md:text-md mobile:text-sm font-semibold bg-primary text-white hover:bg-secondary w-[35%] mt-2 rounded-md ">
                    Post Your Review
                  </button>
                </form>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  return isLoading ? (
    <ProductTabSkeleton />
  ) : (
    <div>
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-200 mt-4">
        <ul className="flex flex-wrap -mb-px justify-center">
          {["description", "specification", "reviews"].map((tab) => (
            <li key={tab} className="me-2">
              <a
                href="#"
                className={`inline-block lg:p-4 mobile:p-2 border-b-2 border-transparent rounded-t-lg  ${
                  selectedTab === tab
                    ? " text-black font-semibold  border-black-600 active dark:text-black-500 dark:border-primary"
                    : "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-500"
                }`}
                onClick={(event) => handleTabClick(tab, event)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="">{renderTabContent()}</div>
    </div>
  );
};

export default ProductTab;
