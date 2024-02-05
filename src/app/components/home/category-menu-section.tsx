"use client";

import React from "react";
import Container from "../container";
import { motion } from "framer-motion";

import { default as Headlights } from "../../../../public/icons/headlights&lighting.svg";
import { default as FuelSystem } from "../../../../public/icons/fuel-system.svg";
import { default as BodyParts } from "../../../../public/icons/body-parts.svg";
import { default as InteriorParts } from "../../../../public/icons/interior-parts.svg";
import { default as Tiers } from "../../../../public/icons/tiers&wheels.svg";
import { default as Engine } from "../../../../public/icons/engine&drivetrain.svg";

const CategoryMenuSection = () => {
  return (
    <main className="flex justify-center">
      <div className="flex items-center justify-center border-t border-b  bg-gradient-to-b from-white to-transparent -skew-x-12  mt-5 mobile:-mb-5 md:-mb-2 mobile:max-w-[90%] ">
        <div className="grid grid-cols-6 lg:gap-4 mobile:gap-1 divide-x divide-gray-200">
          <div className="col-span-1 flex flex-col justify-center items-center py-2">
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-white rounded-md flex justify-center items-center"
            >
              <div className={"w-16 h-16 flex justify-center items-center"}>
                <Headlights
                  className={
                    "md:w-16 md:h-16 mobile:w-10 mobile:h-10 mb-[-10px]"
                  }
                />
              </div>
            </motion.button>
            <h4 className="text-gray-400 text-xs justify-center hidden sm:flex">
              Head Light
            </h4>
          </div>
          <div className="col-span-1 flex flex-col justify-center items-center py-2">
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-white rounded-md flex justify-center items-center"
            >
              <div className={"w-16 h-16 flex justify-center items-center"}>
                <FuelSystem
                  className={
                    "md:w-16 md:h-16 mobile:w-10 mobile:h-10 mb-[-10px] "
                  }
                />
              </div>
            </motion.button>
            <h4 className="text-gray-400 text-xs  justify-center hidden sm:flex">
              Fuel System
            </h4>
          </div>

          <div className="col-span-1 flex flex-col justify-center items-center py-2">
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-white rounded-md flex justify-center items-center"
            >
              <div className={"w-16 h-16 flex justify-center items-center"}>
                <BodyParts
                  className={
                    "md:w-14 md:h-14 mobile:w-10 mobile:h-10 mb-[-10px]"
                  }
                />
              </div>
            </motion.button>
            <h4 className="text-gray-400 text-xs  justify-center hidden sm:flex">
              Body Parts
            </h4>
          </div>
          <div className="col-span-1 flex flex-col justify-center items-center py-2">
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-white rounded-md flex justify-center items-center"
            >
              <div className={"w-16 h-16 flex justify-center items-center"}>
                <InteriorParts
                  className={
                    "md:w-16 md:h-16 mobile:w-10 mobile:h-10 mb-[-10px] "
                  }
                />
              </div>
            </motion.button>
            <h4 className="text-gray-400 text-xs  justify-center hidden sm:flex">
              Interior Parts
            </h4>
          </div>
          <div className="col-span-1 flex flex-col justify-center items-center py-2">
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-white rounded-md flex justify-center items-center"
            >
              <div className={"w-16 h-16 flex justify-center items-center "}>
                <Tiers
                  className={
                    "md:w-16 md:h-16 mobile:w-10 mobile:h-10 mb-[-10px] "
                  }
                />
              </div>
            </motion.button>
            <h4 className="text-gray-400 text-xs  justify-center hidden sm:flex">
              Tiers
            </h4>
          </div>
          <div className="col-span-1 flex flex-col justify-center items-center py-2">
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-white rounded-md flex justify-center items-center"
            >
              <div className={"w-16 h-16 flex justify-center items-center"}>
                <Engine
                  className={
                    "md:w-16 md:h-16 mobile:w-10 mobile:h-10 mb-[-10px]"
                  }
                />
              </div>
            </motion.button>
            <h4 className="text-gray-400 text-xs  justify-center hidden sm:flex">
              Engine Parts
            </h4>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CategoryMenuSection;
