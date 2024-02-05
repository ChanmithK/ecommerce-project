"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

interface Subcategory {
  label: string;
  link: string;
}

interface Props {
  label: string;
  link: string;
  isGroup?: boolean;
  categories?: Subcategory[];
}

const NavbarMenu = ({ navItems }: any) => {
  const [selectedItem, setSelectedItem] = useState("");
  const [hoveredItem, setHoveredItem] = useState("");
  const subMenuRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      {navItems.map((item: any, index: number) => (
        <div
          key={index}
          className={`relative ${item.isGroup ? "group" : ""}`}
          onMouseEnter={() => {
            setHoveredItem(item.label);
          }}
          onMouseLeave={() => {
            if (selectedItem) {
              setHoveredItem("");
            }
          }}
          onClick={() => {
            setSelectedItem((prevSelectedItem) =>
              prevSelectedItem === item.label ? "" : item.label
            );
            setHoveredItem("");
          }}
        >
          {item.isGroup ? (
            <div
              className="relative group"
              ref={subMenuRef}
              onClick={(e) => e.stopPropagation()} // prevent clicks on the submenu from triggering the document click event
            >
              <Link
                className={`navbar__link relative uppercase flex hover:text-primary`}
                href={"#"}
              >
                {item.label}

                <IoIosArrowUp
                  className={`m-1 ${
                    selectedItem === item.label || hoveredItem === item.label
                      ? "block"
                      : "hidden"
                  }`}
                />
                <IoIosArrowDown
                  className={`m-1 ${
                    selectedItem === item.label || hoveredItem === item.label
                      ? "hidden"
                      : "block"
                  }`}
                />
              </Link>

              {/* Dropdown content for subcategories */}
              <div
                ref={subMenuRef}
                className={`absolute ${
                  selectedItem === item.label || hoveredItem === item.label
                    ? "block"
                    : "hidden"
                } mt-2 space-y-2 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md z-20`}
                onMouseEnter={() => {
                  setHoveredItem(item.label);
                }}
                onMouseLeave={() => {
                  setHoveredItem("");
                }}
              >
                <div className="absolute top-0">
                  <div className="py-3">
                    <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"></div>
                  </div>
                  <div className="bg-white p-5 min-w-max   grid grid-rows-2 grid-flow-col gap-8 py-4">
                    {item.categories?.map((category: any, index: number) => (
                      <div key={index}>
                        {category.link ? ( // Conditionally render Link only when link is defined
                          <Link
                            className="navbar__link relative uppercase"
                            href={category.link}
                          >
                            {category.label}
                          </Link>
                        ) : (
                          // If no link, render plain text
                          <span className="navbar__link relative uppercase">
                            {category.label}
                          </span>
                        )}
                        {category.subcategories?.map(
                          (subcategory: any, subIndex: number) => (
                            <li
                              key={subIndex}
                              className="text-sm text-gray-600 my-2.5 list-none"
                            >
                              <Link
                                className="hover:text-primary"
                                href={subcategory.link || "#"}
                              >
                                {subcategory.label}
                              </Link>
                            </li>
                          )
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Subcategory items End */}
            </div>
          ) : (
            <Link
              className="navbar__link relative uppercase hover:text-primary"
              href={item.link}
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </>
  );
};

export default NavbarMenu;
