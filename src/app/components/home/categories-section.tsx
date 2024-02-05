import React from "react";
import Container from "../container";
import Image from "next/image";
import Link from "next/link";

const CategoriesSection = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        <div className="shadow-2xl p-4">
          <div className="grid grid-cols-2 items-center">
            <div>
              <Image
                src="/images/catagories/category-1.jpg"
                width={100}
                height={100}
                alt="category-1"
              />
            </div>
            <div>
              <h2 className="text-lg font-medium">
                <Link
                  href={"/pages/shop/Headlights & Lighting"}
                  className="hover:text-primary"
                >
                  Headlights & Lighting
                </Link>
              </h2>
              <ul>
                <li className="list-disc text-base text-gray-400">
                  <Link href="#" className="hover:text-primary">
                    Turn Signals
                  </Link>
                </li>
                <li className="list-disc text-base text-gray-400">
                  <Link href="#" className="hover:text-primary">
                    Fog Lights
                  </Link>
                </li>
                <li className="list-disc text-base text-gray-400">
                  <Link href="#" className="hover:text-primary">
                    Headlights
                  </Link>
                </li>
                <li className="list-disc text-base text-gray-400">
                  <Link href="#" className="hover:text-primary">
                    Switches & Relays
                  </Link>
                </li>
                <li className="list-disc text-base text-gray-400">
                  <Link href="#" className="hover:text-primary">
                    Tail Lights
                  </Link>
                </li>
              </ul>
              <div className="flex justify-end pt-4 text-primary border-b">
                <Link href={"/pages/shop"}>Shop All</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="shadow-2xl p-4">
          <div className="grid grid-cols-2 items-center">
            <div>
              <Image
                src="/images/catagories/category-2.jpg"
                width={100}
                height={100}
                alt="category-1"
              />
            </div>
            <div>
              <h2 className="text-lg font-medium">
                <Link
                  href={"/pages/shop/Fuel System"}
                  className="hover:text-primary"
                >
                  Fuel System
                </Link>
              </h2>
              <ul>
                <li className="list-disc text-base text-gray-400">
                  <Link href="#" className="hover:text-primary">
                    Fuel Pumps
                  </Link>
                </li>
                <li className="list-disc text-base text-gray-400">
                  <Link href="#" className="hover:text-primary">
                    Motor Oil
                  </Link>
                </li>
                <li className="list-disc text-base text-gray-400">
                  <Link href="#" className="hover:text-primary">
                    Gas Caps
                  </Link>
                </li>
                <li className="list-disc text-base text-gray-400">
                  <Link href="#" className="hover:text-primary">
                    Fuel Injector
                  </Link>
                </li>
                <li className="list-disc text-base text-gray-400">
                  <Link href="#" className="hover:text-primary">
                    Control Motor
                  </Link>
                </li>
              </ul>
              <div className="flex justify-end pt-4 text-primary border-b">
                <Link href={"/pages/shop"}>Shop All</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="shadow-2xl p-4">
          <div className="grid grid-cols-2 items-center">
            <div>
              <Image
                src="/images/catagories/category-3.jpg"
                width={100}
                height={100}
                alt="category-1"
              />
            </div>
            <div>
              <h2 className="text-lg font-medium">
                <Link
                  href={"/pages/shop/Body Parts"}
                  className="hover:text-primary"
                >
                  Body Parts
                </Link>
              </h2>
              <ul>
                <li className="list-disc text-base text-gray-400">
                  <Link href="#" className="hover:text-primary">
                    Bumpers
                  </Link>
                </li>
                <li className="list-disc text-base text-gray-400">
                  <Link href="#" className="hover:text-primary">
                    Hoods
                  </Link>
                </li>
                <li className="list-disc text-base text-gray-400">
                  <Link href="#" className="hover:text-primary">
                    Grilles
                  </Link>
                </li>
                <li className="list-disc text-base text-gray-400">
                  <Link href="#" className="hover:text-primary">
                    Fog Lights
                  </Link>
                </li>
                <li className="list-disc text-base text-gray-400">
                  <Link href="#" className="hover:text-primary">
                    Door Handles
                  </Link>
                </li>
              </ul>
              <div className="flex justify-end pt-4 text-primary border-b">
                <Link href={"/pages/shop"}>Shop All</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="shadow-2xl p-4">
          <div className="grid grid-cols-2 items-center">
            <div>
              <Image
                src="/images/catagories/category-4.jpg"
                width={100}
                height={100}
                alt="category-1"
              />
            </div>
            <div>
              <h2 className="text-lg font-medium">
                <Link
                  href={"/pages/shop/Interior Parts"}
                  className="hover:text-primary"
                >
                  Interior Parts
                </Link>
              </h2>
              <ul>
                <li className="list-disc text-base text-gray-400">
                  <Link href="#" className="hover:text-primary">
                    Dashboards
                  </Link>
                </li>
                <li className="list-disc text-base text-gray-400">
                  <Link href="#" className="hover:text-primary">
                    Seat Covers
                  </Link>
                </li>
                <li className="list-disc text-base text-gray-400">
                  <Link href="#" className="hover:text-primary">
                    Floor Mats
                  </Link>
                </li>
                <li className="list-disc text-base text-gray-400">
                  <Link href="#" className="hover:text-primary">
                    Sun Shades
                  </Link>
                </li>
                <li className="list-disc text-base text-gray-400">
                  <Link href="#" className="hover:text-primary">
                    Visors
                  </Link>
                </li>
              </ul>
              <div className="flex justify-end pt-4 text-primary border-b">
                <Link href={"/pages/shop"}>Shop All</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="shadow-2xl p-4">
          <div className="grid grid-cols-2 items-center">
            <div>
              <Image
                src="/images/catagories/category-5.jpg"
                width={100}
                height={100}
                alt="category-1"
              />
            </div>
            <div>
              <h2 className="text-lg font-medium">
                <Link
                  href={"/pages/shop/Tires & Wheels"}
                  className="hover:text-primary"
                >
                  Tires & Wheels
                </Link>
              </h2>
              <ul>
                <li className="list-disc text-base text-gray-400">
                  <Link href="#" className="hover:text-primary">
                    Wheel Covers
                  </Link>
                </li>
                <li className="list-disc text-base text-gray-400">
                  <Link href="#" className="hover:text-primary">
                    Brake Kits
                  </Link>
                </li>
                <li className="list-disc text-base text-gray-400">
                  <Link href="#" className="hover:text-primary">
                    Tire Chains
                  </Link>
                </li>
                <li className="list-disc text-base text-gray-400">
                  <Link href="#" className="hover:text-primary">
                    Wheel disks
                  </Link>
                </li>
                <li className="list-disc text-base text-gray-400">
                  <Link href="#" className="hover:text-primary">
                    Tires
                  </Link>
                </li>
              </ul>
              <div className="flex justify-end pt-4 text-primary border-b">
                <Link href={"/pages/shop"}>Shop All</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="shadow-2xl p-4">
          <div className="grid grid-cols-2 items-center">
            <div>
              <Image
                src="/images/catagories/category-6.jpg"
                width={100}
                height={100}
                alt="category-1"
              />
            </div>
            <div>
              <h2 className="text-lg font-medium">
                <Link
                  href={"/pages/shop/ Engine & Drivetrain"}
                  className="hover:text-primary"
                >
                  Engine & Drivetrain
                </Link>
              </h2>
              <ul>
                <li className="list-disc text-base text-gray-400">
                  <Link href="#" className="hover:text-primary">
                    Timing Belts
                  </Link>
                </li>
                <li className="list-disc text-base text-gray-400">
                  <Link href="#" className="hover:text-primary">
                    Spark Plugs
                  </Link>
                </li>
                <li className="list-disc text-base text-gray-400">
                  <Link href="#" className="hover:text-primary">
                    Oil Pans
                  </Link>
                </li>
                <li className="list-disc text-base text-gray-400">
                  <Link href="#" className="hover:text-primary">
                    Engine Gaskets
                  </Link>
                </li>
                <li className="list-disc text-base text-gray-400">
                  <Link href="#" className="hover:text-primary">
                    Oil Filters
                  </Link>
                </li>
              </ul>
              <div className="flex justify-end pt-4 text-primary border-b">
                <Link href={"/pages/shop"}>Shop All</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CategoriesSection;
