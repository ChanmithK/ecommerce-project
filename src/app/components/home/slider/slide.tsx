import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  img: string;
}

const Slide = ({ img }: Props) => {
  const router = useRouter();

  return (
    <div className="outline-none border-none relative">
      <div className="absolute left-[50px]  md:left-[70px] max-w-[250px] sm:max-w-[350px] top-[50%] -translate-y-[50%] space-y-2 lg:space-y-4 bg-[#ffffffa2] sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none">
        <motion.h3
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.25 }}
          className="text-accent text-[24px] lg:text-[28px]"
        >
          <span className="bg-yellow-400 pl-4 pr-4 rounded-tr-lg rounded-bl-lg">
            50%
          </span>
        </motion.h3>
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-blackish  text-[20px] md:text-[30px] lg:text-[44px] font-bold leading-[1.2]"
        >
          When Buying Parts With Installation
        </motion.h2>

        <motion.h3
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-[15px] md:text-[24px] text-gray-500"
        >
          Installation of parts in the services of our partners.
        </motion.h3>
        <motion.button
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="bg-primary hover:bg-secondary text-white text-[14px] md:text-[16px] p-2 px-4  inline-block cursor-pointer"
          onClick={() => router.push("/pages/shop")}
        >
          Shop Now
        </motion.button>
      </div>

      <Image
        className="w-[100%] h-[300px] md:h-auto rounded-xl object-cover object-right md:object-left-bottom"
        src={img}
        alt="banner"
        width={1350}
        height={500}
      />
    </div>
  );
};

export default Slide;
