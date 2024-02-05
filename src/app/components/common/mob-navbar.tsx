"use client";

import React, { Fragment, useEffect, useState } from "react";

import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { IoMenuOutline } from "react-icons/io5";
import { AiOutlineHome, AiOutlineAppstore } from "react-icons/ai";
import Link from "next/link";
import { useSelector } from "react-redux";
import { StateProps, Products } from "../../../../type";
import { useRouter } from "next/navigation";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { IoIosArrowDown, IoIosArrowForward, IoMdClose } from "react-icons/io";

const MobNavbar = () => {
  const router = useRouter();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const { productData } = useSelector((state: StateProps) => state?.user);
  const { wishlistData } = useSelector((state: StateProps) => state?.user);

  const [totalItem, setTotalItem] = useState(0);

  const [selectedCategory, setSelectedCategory] = useState<undefined | string>(
    undefined
  );

  const handleCategoryClick = (categoryLabel: string) => {
    setSelectedCategory((prevCategory) =>
      prevCategory === categoryLabel ? undefined : categoryLabel
    );
  };

  useEffect(() => {
    const totalItem =
      productData?.reduce((quantity: number, item: Products) => {
        return quantity + item.quantity;
      }, 0) || 0;

    setTotalItem(totalItem);
  }, [productData]);

  const menuItems = [
    { label: "Home", link: "/" },
    {
      label: "CATEGORIES",
      link: "pages/shop",
      isGroup: true,
      categories: [
        {
          label: " Headlights & Lighting",
          link: "#",
          subcategories: [
            { label: "Headlights", link: "#" },
            { label: "Tail Lights", link: "#" },
            { label: "Fog Lights", link: "#" },
            { label: "Turn Signals", link: "#" },
            { label: "Switches & Relays", link: "#" },
            { label: "Corner Lights", link: "#" },
          ],
        },
        {
          label: "Brakes & Suspension",
          link: "#",
          subcategories: [
            { label: "Brake Discs", link: "#" },
            { label: "Wheel Hubs", link: "#" },
            { label: "Air Suspension", link: "#" },
            { label: "Ball Joints", link: "#" },
          ],
        },
        {
          label: "Interior Parts",
          link: "#",
          subcategories: [
            { label: "Floor Mats", link: "#" },
            { label: "Gauges", link: "#" },
            { label: "Consoles & Organizers", link: "#" },
            { label: "Mobile Electronics", link: "#" },
          ],
        },
        // Add more subcategories as needed
      ],
    },
    { label: "Headlights & Lighting", link: "#" },
    { label: "Brakes & Suspension", link: "#" },
    { label: "Engine & Drivetrain", link: "#" },
    { label: "Interior Parts", link: "#" },
    { label: "BLOG", link: "pages/shop" },
    { label: "HOT OFFERS", link: "#" },
  ];

  const generateSubMenu = (subcategories: any[]) => {
    return (
      <ul className="ml-4">
        {subcategories.map((subcategory, index) => (
          <li key={index}>
            <Link
              href={subcategory.link}
              className="text-gray-800 hover:text-primary"
            >
              <div className="mt-1">- {subcategory.label}</div>
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  const generateMenuItems = (
    items: any[],
    selectedCategory: string | undefined,
    handleCategoryClick: { (categoryLabel: string): void; (arg0: any): void }
  ) => {
    return items.map(
      (
        item: {
          label:
            | string
            | number
            | boolean
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | Iterable<React.ReactNode>
            | React.ReactPortal
            | React.PromiseLikeOfReactNode
            | null
            | undefined;
          isGroup: any;
          categories: any[];
        },
        index: React.Key | null | undefined
      ) => (
        <div key={index} className="mb-4">
          <a
            onClick={() => handleCategoryClick(item.label)}
            className={`text-sm font-bold text-gray-800 hover:text-primary cursor-pointer ${
              selectedCategory === item.label ? "text-primary" : ""
            }`}
          >
            <div className="border-b border-gray-100 p-2">
              <div className="flex items-center justify-between">
                {" "}
                {item.label}
                {item.isGroup && selectedCategory !== item.label ? (
                  <IoIosArrowForward />
                ) : item.isGroup && selectedCategory === item.label ? (
                  <IoIosArrowDown />
                ) : (
                  ""
                )}
              </div>
              <div className="mt-2">
                {item.isGroup &&
                  item.categories &&
                  selectedCategory === item.label &&
                  generateSubMenu(item.categories)}
              </div>
            </div>
          </a>
        </div>
      )
    );
  };

  return (
    <div>
      <Transition.Root show={mobileFiltersOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 lg:hidden rald-500 max-h-48"
          onClose={setMobileFiltersOpen}
        >
          <div className="fixed inset-0 z-50 flex">
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
                <div className="p-4">
                  <div className="flex justify-end">
                    <IoMdClose
                      onClick={() => {
                        console.log("mobileFiltersOpen", mobileFiltersOpen);

                        setMobileFiltersOpen(false);
                      }}
                      className=" text-xl"
                    />
                  </div>

                  {/* Menu Items */}
                  {generateMenuItems(
                    menuItems,
                    selectedCategory,
                    handleCategoryClick
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <div className="lg:hidden h-15 fixed bottom-0 w-full bg-gray-100 left-[50%] -translate-x-[50%] max-w-[500px] mob_navbar px-8 z-40 ">
        <div className="flex justify-between text-[28px] py-2">
          <IoMenuOutline
            onClick={() => {
              console.log("mobileFiltersOpen", mobileFiltersOpen);

              setMobileFiltersOpen(true);
            }}
          />

          <div className="relative">
            <CiShoppingCart
              onClick={() => {
                router.push("/pages/cart");
              }}
              className="hover:text-primary"
            />
            <div className="bg-secondary rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
              {totalItem}
            </div>
          </div>

          <Link className="hover:text-primary" href={"/"}>
            <AiOutlineHome />
          </Link>

          <div className="relative">
            <CiHeart
              onClick={() => {
                router.push("/pages/wishlist");
              }}
              className="hover:text-primary"
            />
            <div className="bg-secondary rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
              {wishlistData.length}
            </div>
          </div>

          <AiOutlineAppstore />
        </div>
      </div>
    </div>
  );
};

export default MobNavbar;
