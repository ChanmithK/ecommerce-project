"use client";

import { ChangeEvent, Fragment, useEffect, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import MultiRangeSlider from "../common/multiRangeSlider/multiRangeSlider";
import Card from "../product/cards/card";
import { Products } from "../../../../type";
import FormattedPrice from "../common/formatted-price";
import RatingStars from "../product/rating-stars";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BsFilterLeft } from "react-icons/bs";

import {
  TfiLayoutColumn2Alt,
  TfiLayoutGrid2Alt,
  TfiLayoutColumn3Alt,
} from "react-icons/tfi";
import Card2 from "../product/cards/card-2";
import Card3 from "../product/cards/card-3";
import Card4 from "../product/cards/card-4";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/redux/store";
import {
  fetchFilterOption,
  fetchShopProduct,
  selectFilterOption,
  selectShopData,
} from "@/redux/slices/temporary-data-slice";
import Pagination from "../common/pagination";

const Categories = [
  {
    name: "Headlights & Lighting",
    id: "#",
    subcategories: [
      { name: "Headlights", id: "#" },
      { name: "Tail Lights", id: "#" },
      { name: "Fog Lights", id: "#" },
      { name: "Turn Signals", id: "#" },
      { name: "Switches & Relays", id: "#" },
      { name: "Corner Lights", id: "#" },
    ],
  },
  {
    name: "Brakes & Suspension",
    id: "#",
    subcategories: [
      { name: "Brake Discs", id: "#" },
      { name: "Wheel Hubs", id: "#" },
      { name: "Air Suspension", id: "#" },
      { name: "Ball Joints", id: "#" },
    ],
  },
  {
    name: "Interior Parts",
    id: "#",
    subcategories: [
      { name: "Floor Mats", id: "#" },
      { name: "Gauges", id: "#" },
      { name: "Consoles & Organizers", id: "#" },
      { name: "Mobile Electronics", id: "#" },
    ],
  },
  // Add more subcategories as needed
];

export default function ShopLayout({
  params,
}: {
  params?: { slug: string[] };
}) {
  const dispatch = useDispatch<AppDispatch>();

  const { productsBrands, productsColors, productsSizes, productsMaterials } =
    useSelector(selectFilterOption);
  const { totalRecords, data } = useSelector(selectShopData);

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [activeCard, setActiveCard] = useState(0);

  const [min, setMin] = useState<number>(0);
  const [max, setMax] = useState<number>(10000);
  const [range, setRange] = useState({ max: max, min: min });
  const [rangeLabel, setRangeLabel] = useState({ max: max, min: min });

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSubcategory] = useState(null);
  const [selectedColor, setSelectedColor] = useState<number | null>(null);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedMaterial, setSelectedMaterial] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedValue, setSelectedValue] = useState(8);
  const [selectedBrands, setSelectedBrands] = useState<number[]>([]);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
  const [selectedDiscount, setSelectedDiscount] = useState<string | null>(null);

  const handleDiscountChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedDiscount(event.target.id);
  };

  const handleBrandChange = (brandId: number) => {
    const isBrandSelected = selectedBrands.includes(brandId);

    setSelectedBrands((prevSelectedBrands) =>
      isBrandSelected
        ? prevSelectedBrands.filter((id) => id !== brandId)
        : [...prevSelectedBrands, brandId]
    );
  };

  const handleRatingChange = (rating: number) => {
    setSelectedRatings((prevSelectedRatings) =>
      prevSelectedRatings.includes(rating)
        ? prevSelectedRatings.filter(
            (selectedRating) => selectedRating !== rating
          )
        : [...prevSelectedRatings, rating]
    );
  };

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(Number(event.target.value));
    setCurrentPage(1);
  };

  const handleCardClick = (cart: number) => {
    setActiveCard(cart);
  };

  // Filter

  const handleSubcategoryClick = (link: any) => {
    setSubcategory(link === selectedSubcategory ? null : link);
  };

  const handleCategoryClick = (index: any) => {
    setSelectedCategory(index === selectedCategory ? null : index);
  };

  const handleColorClick = (color: number) => {
    setSelectedColor((prevColor) => (prevColor === color ? null : color));
  };

  const handleSizeClick = (size: number) => {
    setSelectedSize((prev) => (prev === size ? null : size));
  };

  const handleMaterial = (material: number) => {
    setSelectedMaterial((prev) => (prev === material ? null : material));
  };

  const mainCategory = decodeURIComponent(params?.slug?.[0] ?? "");
  const subCategory = decodeURIComponent(params?.slug?.[1] ?? "");

  console.log("Main Category", mainCategory);
  console.log("Sub Category", subCategory);
  console.log("Brands", selectedBrands);
  console.log("Color", selectedColor);
  console.log("Material", selectedMaterial);
  console.log("Ratings", selectedRatings);
  console.log("With Discount", selectedDiscount);
  console.log("Size", selectedSize);
  console.log("price", { min: min, max: max });

  useEffect(() => {
    dispatch(fetchFilterOption());
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      fetchShopProduct({
        currentPageNo: currentPage,
        rowsPerPage: Number(selectedValue),
        mainCategory,
        subCategory,
        selectedBrands,
        selectedColor,
        selectedMaterial,
        selectedSize,
        selectedRatings,
        price: { min: range.min, max: range.max },
      })
    );
  }, [
    dispatch,
    currentPage,
    selectedValue,
    mainCategory,
    subCategory,
    selectedBrands,
    selectedColor,
    selectedMaterial,
    selectedSize,
    selectedRatings,
    min,
    max,
    range.min,
    range.max,
  ]);

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="p-6">
                    <div className="flex items-center justify-between ">
                      <h2 className="text-lg font-medium text-gray-900">
                        Filters
                      </h2>
                      <button
                        type="button"
                        className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                        onClick={() => setMobileFiltersOpen(false)}
                      >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>

                    {/* Filters */}
                    <form className="mt-4 border-t border-gray-200">
                      {/* Categories */}
                      <Disclosure
                        as="div"
                        defaultOpen={true}
                        className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">
                                  Categories
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <PlusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-4">
                                <div className="flex items-center">
                                  <ul className="space-y-2">
                                    {Categories.map((item, index) => (
                                      <li
                                        key={index}
                                        onClick={() =>
                                          handleCategoryClick(index)
                                        }
                                        className={`cursor-pointer ${
                                          selectedCategory === index ? "" : ""
                                        } `}
                                      >
                                        {selectedCategory === index ? (
                                          <>
                                            <div className=" mb-3 border-b py-2 w-full">
                                              <p className="font-semibold">
                                                <a
                                                  href="#"
                                                  className="flex items-center"
                                                >
                                                  {" "}
                                                  <IoIosArrowBack className="mr-1" />{" "}
                                                  Other Categories
                                                </a>
                                              </p>
                                            </div>
                                            <div className="ml-4">
                                              {item.name}
                                              <ul className="pl-4 space-y-2 mt-2">
                                                {item.subcategories.map(
                                                  (subitem, subindex) => (
                                                    <li
                                                      key={subindex}
                                                      className="hover:text-primary"
                                                      onClick={(e) =>
                                                        e.stopPropagation()
                                                      }
                                                    >
                                                      - {subitem.name}
                                                    </li>
                                                  )
                                                )}
                                              </ul>
                                            </div>
                                          </>
                                        ) : (
                                          selectedCategory === null && (
                                            <p>
                                              <a
                                                href="#"
                                                className="hover:text-primary"
                                              >
                                                {item.name}
                                              </a>
                                            </p>
                                          )
                                        )}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                      {/* price */}
                      <Disclosure
                        as="div"
                        defaultOpen={true}
                        className="border-b border-gray-200 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">
                                  Price
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <PlusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-4">
                                <div className="flex flex-col">
                                  <MultiRangeSlider
                                    min={min}
                                    max={max}
                                    setRange={setRange}
                                    setRangeLabel={setRangeLabel}
                                  />
                                  <div className="mt-6 text-xs">
                                    <FormattedPrice amount={rangeLabel.min} /> -
                                    <FormattedPrice amount={rangeLabel.max} />
                                  </div>
                                </div>
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>

                      {/* Brand List */}
                      <Disclosure
                        as="div"
                        defaultOpen={true}
                        className="border-b border-gray-200 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">
                                  Brand
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <PlusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-4">
                                {productsBrands?.map((item) => (
                                  <div
                                    key={item.id}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-${item.id}`}
                                      name={`${item.id}[]`}
                                      type="checkbox"
                                      checked={selectedBrands.includes(item.id)}
                                      onChange={() =>
                                        handleBrandChange(item.id)
                                      }
                                      className="h-4 w-4 rounded accent-primary"
                                    />
                                    <label
                                      htmlFor={`filter-${item.id}`}
                                      className="ml-3 text-sm text-gray-600"
                                    >
                                      {item.name}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>

                      {/* Color List */}
                      <Disclosure defaultOpen={true}>
                        {({ open }) => (
                          <>
                            <h3 className="-my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">
                                  Color
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <PlusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-3">
                              <div className="grid grid-cols-5 gap-1">
                                {productsColors?.map((colo, index) => (
                                  <div
                                    key={index}
                                    className={`w-8 h-8 mx-1  cursor-pointer border rounded-full ${
                                      selectedColor === colo.id
                                        ? "border-black border-2"
                                        : "border-gray-300"
                                    }`}
                                    title={colo.color_name}
                                    style={{ backgroundColor: colo.color_code }}
                                    onClick={() => handleColorClick(colo.id)}
                                  ></div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>

                      {/* Materials List */}
                      <Disclosure defaultOpen={true}>
                        {({ open }) => (
                          <>
                            <h3 className="-my-3 mt-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">
                                  Materials
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <PlusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="flex gap-2">
                                {productsMaterials?.map((material, index) => (
                                  <div
                                    key={index}
                                    className={`p-1 cursor-pointer border rounded-md text-xs pt-1 ${
                                      selectedMaterial === material.id
                                        ? "border-black border-2"
                                        : "border-gray-300"
                                    }`}
                                    title={material.material_name}
                                    onClick={() => handleMaterial(material.id)}
                                  >
                                    <span className="flex items-center justify-center text-gray-900">
                                      {material.material_name}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>

                      {/* Size List */}
                      <Disclosure defaultOpen={true}>
                        {({ open }) => (
                          <>
                            <h3 className="-my-3 mt-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">
                                  Size
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <PlusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="flex gap-2">
                                {productsSizes?.map((size, index) => (
                                  <div
                                    key={index}
                                    className={`p-1 cursor-pointer rounded-md  border text-xs ${
                                      selectedSize === size.id
                                        ? "border-black border-2"
                                        : "border-gray-300"
                                    }`}
                                    title={size.size_name}
                                    onClick={() => handleSizeClick(size.id)}
                                  >
                                    <span className="flex items-center justify-center text-gray-900 ">
                                      {size.size_name}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>

                      {/* With Discount */}
                      <Disclosure
                        as="div"
                        defaultOpen={true}
                        className="border-b border-gray-200 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">
                                  With Discount
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <PlusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-4">
                                <div className="flex items-center">
                                  <input
                                    type="radio"
                                    id="yes"
                                    name="radioGroup"
                                    className="h-4 w-4 rounded accent-primary"
                                    onChange={handleDiscountChange}
                                    checked={selectedDiscount === "yes"}
                                  />
                                  <label
                                    htmlFor="yes"
                                    className="ml-3 text-sm text-gray-600"
                                  >
                                    Yes
                                  </label>
                                </div>
                                <div className="flex items-center">
                                  <input
                                    type="radio"
                                    id="no"
                                    name="radioGroup"
                                    className="h-4 w-4 rounded accent-primary"
                                    onChange={handleDiscountChange}
                                    checked={selectedDiscount === "no"}
                                  />
                                  <label
                                    htmlFor="no"
                                    className="ml-3 text-sm text-gray-600"
                                  >
                                    No
                                  </label>
                                </div>
                                <div className="flex items-center">
                                  <input
                                    type="radio"
                                    id="any"
                                    name="radioGroup"
                                    className="h-4 w-4 rounded accent-primary"
                                    onChange={handleDiscountChange}
                                    checked={selectedDiscount === "any"}
                                  />
                                  <label
                                    htmlFor="any"
                                    className="ml-3 text-sm text-gray-600"
                                  >
                                    Any
                                  </label>
                                </div>
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>

                      {/* Rating Section */}
                      <Disclosure
                        as="div"
                        defaultOpen={true}
                        className="border-b border-gray-200 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">
                                  Rating
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <PlusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-4">
                                {Array.from({ length: 5 }, (_, index) => (
                                  <div
                                    className="flex items-center"
                                    key={index}
                                  >
                                    <input
                                      id={`checkbox-${index}`}
                                      name={`checkbox-${index}[]`}
                                      type="checkbox"
                                      checked={selectedRatings.includes(
                                        5 - index
                                      )}
                                      onChange={() =>
                                        handleRatingChange(5 - index)
                                      }
                                      className="h-4 w-4 rounded accent-primary"
                                    />
                                    <RatingStars rating={5 - index} />
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-4 sm:px-7 lg:px-8 ">
          {/* Page navigation */}
          <div className="flex flex-wrap mobile:gap-1 md:gap-0 mt-3">
            <div className=" bg-gray-200 h-5 max-w-12 hover:bg-primary hover:text-white cursor-pointer">
              <div className="-skew-x-12  bg-gray-200 text-gray-400 font-semibold hover:bg-primary hover:text-white text-xs p-1 h-full w-full ml-1 flex items-center">
                <Link href={"/"}>Home</Link>
              </div>
            </div>
            <div className="px-1">
              <div className="-skew-x-12 px-1 bg-gray-200 text-gray-400 font-semibold text-xs hover:bg-primary hover:text-white p-1  w-full ml-1 flex items-center h-5  cursor-pointer">
                Shop
              </div>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-2">
            <div className="grid lg:grid-cols-4 gap-4">
              {/* Filters */}
              <form className="hidden lg:block lg:col-span-1 border-2 border-gray-100  p-8">
                {/* Categories */}
                <Disclosure
                  as="div"
                  defaultOpen={true}
                  className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                >
                  {({ open }) => (
                    <>
                      <h3 className="-my-3 flow-root">
                        <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                          <span className="font-medium text-gray-900">
                            Categories
                          </span>
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <MinusIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel className="pt-6">
                        <div className="space-y-4">
                          <div className="flex items-center">
                            <ul className="space-y-2">
                              {Categories.map((item, index) => (
                                <li
                                  key={index}
                                  onClick={() => handleCategoryClick(index)}
                                  className={`cursor-pointer font-medium`}
                                >
                                  {selectedCategory === index ? (
                                    <>
                                      <div className="flex items-center hover:text-primary mb-2 font-semibold">
                                        <IoIosArrowBack /> All Products
                                      </div>

                                      {item.name}
                                      <ul className="pl-4 space-y-2 p-2">
                                        {item.subcategories.map(
                                          (subitem, subindex) => (
                                            <li
                                              key={subindex}
                                              className={`hover:text-primary  ${
                                                selectedSubcategory === subindex
                                                  ? "text-red-500"
                                                  : ""
                                              }`}
                                              onClick={(e) => {
                                                e.stopPropagation();
                                                handleSubcategoryClick(
                                                  subindex
                                                );
                                              }}
                                            >
                                              {subitem.name}
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    </>
                                  ) : (
                                    selectedCategory === null && (
                                      <p>
                                        <a
                                          href="#"
                                          className="hover:text-primary"
                                        >
                                          {item.name}
                                        </a>
                                      </p>
                                    )
                                  )}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                {/* price */}
                <Disclosure
                  as="div"
                  defaultOpen={true}
                  className="border-b border-gray-200 py-6"
                >
                  {({ open }) => (
                    <>
                      <h3 className="-my-3 flow-root">
                        <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                          <span className="font-medium text-gray-900">
                            Price
                          </span>
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <MinusIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel className="pt-6">
                        <div className="space-y-4">
                          <div className="flex flex-col">
                            <MultiRangeSlider
                              min={min}
                              max={max}
                              setRange={setRange}
                              setRangeLabel={setRangeLabel}
                            />
                            <div className="mt-6 text-xs">
                              <FormattedPrice amount={rangeLabel.min} /> -
                              <FormattedPrice amount={rangeLabel.max} />
                            </div>
                          </div>
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                {/* Brand List */}

                <Disclosure
                  as="div"
                  defaultOpen={true}
                  className="border-b border-gray-200 py-6"
                >
                  {({ open }) => (
                    <>
                      <h3 className="-my-3 flow-root">
                        <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                          <span className="font-medium text-gray-900">
                            Brand
                          </span>
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <MinusIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel className="pt-6">
                        <div className="space-y-4">
                          {productsBrands?.map((item) => (
                            <div key={item.id} className="flex items-center">
                              <input
                                id={`filter-${item.id}`}
                                name={`${item.id}[]`}
                                type="checkbox"
                                checked={selectedBrands.includes(item.id)}
                                onChange={() => handleBrandChange(item.id)}
                                className="h-4 w-4 rounded accent-primary"
                              />
                              <label
                                htmlFor={`filter-${item.id}`}
                                className="ml-3 text-sm text-gray-600"
                              >
                                {item.name}
                              </label>
                            </div>
                          ))}
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                {/* Color List */}
                <Disclosure defaultOpen={true}>
                  {({ open }) => (
                    <>
                      <h3 className="-my-3 flow-root">
                        <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                          <span className="font-medium text-gray-900">
                            Color
                          </span>
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <MinusIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel className="pt-3">
                        <div className="grid grid-cols-5 gap-2">
                          {productsColors?.map((colo, index) => (
                            <div
                              key={index}
                              className={`w-6 h-6 mx-1  cursor-pointer border rounded-full ${
                                selectedColor === colo.id
                                  ? "border-black border-2"
                                  : "border-gray-300"
                              }`}
                              title={colo.color_name}
                              style={{ backgroundColor: colo.color_code }}
                              onClick={() => handleColorClick(colo.id)}
                            ></div>
                          ))}
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                {/* Materials List */}
                <Disclosure defaultOpen={true}>
                  {({ open }) => (
                    <>
                      <h3 className="-my-3 mt-3 flow-root">
                        <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                          <span className="font-medium text-gray-900">
                            Materials
                          </span>
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <MinusIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel className="pt-6">
                        <div className="flex gap-2">
                          {productsMaterials?.map((material, index) => (
                            <div
                              key={index}
                              className={`p-1 cursor-pointer border rounded-md text-xs pt-1 ${
                                selectedMaterial === material.id
                                  ? "border-black border-2"
                                  : "border-gray-300"
                              }`}
                              title={material.material_name}
                              onClick={() => handleMaterial(material.id)}
                            >
                              <span className="flex items-center justify-center text-gray-900">
                                {material.material_name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                {/* Size List */}
                <Disclosure defaultOpen={true}>
                  {({ open }) => (
                    <>
                      <h3 className="-my-3 mt-3 flow-root">
                        <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                          <span className="font-medium text-gray-900">
                            Size
                          </span>
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <MinusIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel className="pt-6">
                        <div className="flex gap-2">
                          {productsSizes?.map((size, index) => (
                            <div
                              key={index}
                              className={`p-1 cursor-pointer rounded-md  border text-xs ${
                                selectedSize === size.id
                                  ? "border-black border-2"
                                  : "border-gray-300"
                              }`}
                              title={size.size_name}
                              onClick={() => handleSizeClick(size.id)}
                            >
                              <span className="flex items-center justify-center text-gray-900 ">
                                {size.size_name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                {/* With Discount */}
                <Disclosure
                  as="div"
                  defaultOpen={true}
                  className="border-b border-gray-200 py-6"
                >
                  {({ open }) => (
                    <>
                      <h3 className="-my-3 flow-root">
                        <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                          <span className="font-medium text-gray-900">
                            With Discount
                          </span>
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <MinusIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel className="pt-6">
                        <div className="space-y-4">
                          <div className="flex items-center">
                            <input
                              type="radio"
                              id="yes"
                              name="radioGroup"
                              className="h-4 w-4 rounded accent-primary"
                              onChange={handleDiscountChange}
                              checked={selectedDiscount === "yes"}
                            />
                            <label
                              htmlFor="yes"
                              className="ml-3 text-sm text-gray-600"
                            >
                              Yes
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="radio"
                              id="no"
                              name="radioGroup"
                              className="h-4 w-4 rounded accent-primary"
                              onChange={handleDiscountChange}
                              checked={selectedDiscount === "no"}
                            />
                            <label
                              htmlFor="no"
                              className="ml-3 text-sm text-gray-600"
                            >
                              No
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="radio"
                              id="any"
                              name="radioGroup"
                              className="h-4 w-4 rounded accent-primary"
                              onChange={handleDiscountChange}
                              checked={selectedDiscount === "any"}
                            />
                            <label
                              htmlFor="any"
                              className="ml-3 text-sm text-gray-600"
                            >
                              Any
                            </label>
                          </div>
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                {/* Rating Section */}
                <Disclosure
                  as="div"
                  defaultOpen={true}
                  className="border-b border-gray-200 py-6"
                >
                  {({ open }) => (
                    <>
                      <h3 className="-my-3 flow-root">
                        <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                          <span className="font-medium text-gray-900">
                            Rating
                          </span>
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <MinusIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel className="pt-6">
                        <div className="space-y-4">
                          {Array.from({ length: 5 }, (_, index) => (
                            <div className="flex items-center" key={index}>
                              <input
                                id={`checkbox-${index}`}
                                name={`checkbox-${index}[]`}
                                type="checkbox"
                                checked={selectedRatings.includes(5 - index)}
                                onChange={() => handleRatingChange(5 - index)}
                                className="h-4 w-4 rounded accent-primary"
                              />
                              <RatingStars rating={5 - index} />
                            </div>
                          ))}
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3 grid grid-flow-row auto-rows-max ">
                {/* FILTER BAR */}
                <div className="grid lg:grid-cols-6 mobile:grid-cols-1 mobile:p-2 gap-2 border-2 border-gray-100 items-center">
                  <div className="lg:col-span-1 flex justify-between">
                    {/* Mobile view button */}
                    <div>
                      <button
                        type="button"
                        className=" text-gray-400 hover:text-gray-500 lg:hidden"
                        onClick={() => setMobileFiltersOpen(true)}
                      >
                        <span className="sr-only">Filters</span>
                        <BsFilterLeft size={25} />
                      </button>
                    </div>
                    {/* layout-switcher */}
                    <div>
                      {/* switcher__lists */}
                      <div className="flex ">
                        <button
                          onClick={() => handleCardClick(0)}
                          className="m-2"
                        >
                          <TfiLayoutGrid2Alt
                            className={`${
                              activeCard === 0
                                ? "fill-primary"
                                : "fill-gray-400"
                            }`}
                          />
                        </button>

                        <button
                          onClick={() => handleCardClick(1)}
                          className="m-2"
                        >
                          <TfiLayoutColumn2Alt
                            className={`${
                              activeCard === 1
                                ? "fill-primary"
                                : "fill-gray-400"
                            }`}
                          />
                        </button>
                        <button
                          onClick={() => handleCardClick(2)}
                          className="m-2"
                        >
                          <div className="transform rotate-90">
                            <TfiLayoutColumn2Alt
                              className={`${
                                activeCard === 2
                                  ? "fill-primary"
                                  : "fill-gray-400"
                              }`}
                            />
                          </div>
                        </button>
                        <button
                          onClick={() => handleCardClick(3)}
                          className="m-2"
                        >
                          <div className="transform rotate-90">
                            <TfiLayoutColumn3Alt
                              className={`${
                                activeCard === 3
                                  ? "fill-primary"
                                  : "fill-gray-400"
                              }`}
                            />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* legend */}
                  <div className="lg:col-span-2 text-sm ">
                    Showing {(currentPage - 1) * selectedValue + 1}–
                    {Math.min(currentPage * selectedValue, totalRecords)} of{" "}
                    {totalRecords} products
                  </div>

                  {/* options__select */}
                  <div className="lg:col-span-3 flex lg:justify-end mobile:justify-between ">
                    <div className="mr-5">
                      <label className="text-sm">Sort :</label>
                      <select defaultValue={"default"} className="text-sm">
                        <option value="default">Default</option>
                        <option value="name_desc" className="text-sm">
                          Name (A-Z)
                        </option>
                        <option>Name (Z-A)</option>
                      </select>
                    </div>
                    {/* options__select */}
                    <div className="mr-5">
                      <label className="text-sm">Show :</label>
                      <select
                        className="text-sm"
                        onChange={handleSelectChange}
                        value={selectedValue}
                      >
                        <option value={8}>8</option>
                        <option value={16}>16</option>
                        <option value={24}>24</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div
                  className={`grid ${
                    activeCard === 2 || activeCard === 3
                      ? "grid-cols-1 gap-0"
                      : "md:grid-cols-3 lg:grid-cols-4 mobile:grid-cols-1 gap-4"
                  } p-3 mt-2`}
                >
                  {/* products-list__head */}
                  <div
                    className={`${
                      activeCard === 3 ? "md:flex mobile:hidden" : "hidden"
                    }  border-b pt-2 uppercase items-center`}
                  >
                    <div className="w-[90px] text-center pr-4 box-content">
                      Image
                    </div>
                    <div className="w-[140px] md:hidden xl:block   text-center pr-4">
                      SKU
                    </div>
                    <div className="grow  pr-4">Product</div>
                    <div className="w-[140px] md:hidden xl:block  text-center ml-1 pr-4">
                      Rating
                    </div>
                    <div className="w-[136px]  pr-4 mr-1 text-right">Price</div>
                    <div className="block content-none w-[40px] mr-4"></div>
                  </div>
                  {data?.map((item: Products, index: number) => {
                    switch (activeCard) {
                      case 0:
                        return <Card key={index} item={item} />;
                      case 1:
                        return <Card2 key={index} item={item} />;
                      case 2:
                        return <Card3 key={index} item={item} />;
                      case 3:
                        return <Card4 key={index} item={item} />;
                      default:
                        // Fallback, render a default component or handle as needed
                        return <></>;
                    }
                  })}
                </div>

                {/* view pagination */}
                <div className="grid lg:grid-cols-2 mobile:grid-cols-1 mt-5 border-2 border-gray-100  p-3 items-center">
                  {/* Page navigation example */}

                  <nav aria-label="Page navigation example">
                    <Pagination
                      currentPage={currentPage}
                      totalPages={Math.ceil(totalRecords / selectedValue)}
                      onPageChange={(page: number) => setCurrentPage(page)}
                    />
                  </nav>

                  {/* pagination legend */}
                  <div className="lg:col-span-1 lg:mr-5 text-sm mobile:col-span-2  flex justify-center mobile:mt-3">
                    Showing {(currentPage - 1) * selectedValue + 1}–
                    {Math.min(currentPage * selectedValue, totalRecords)} of{" "}
                    {totalRecords} products
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
