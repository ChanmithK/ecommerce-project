"use client";

import React from "react";
import Slider from "react-slick";

import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";
import Image from "next/image";
import Slide from "./slider/slide";

const IntroSection = () => {
  const banner = [
    "/images/slides/slide-1.jpg",
    "/images/slides/slide-2.jpg",
    "/images/slides/slide-3.jpg",
  ];

  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className="p-3 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute left-2 top-1/2"
        onClick={onClick}
      >
        <PiCaretLeftLight />
      </div>
    );
  };
  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className="p-3 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute right-2 top-1/2"
        onClick={onClick}
      >
        <PiCaretRightLight />
      </div>
    );
  };
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="relative">
      <Slider {...settings}>
        {banner.map((item: any, index: number) => (
          <Slide key={index} img={item} />
        ))}
      </Slider>
      <div className="absolute w-full h-30  bg-gradient-to-t from-gray-100 to-transparent bottom-0 left-0 z-10" />
    </div>
  );
};

export default IntroSection;
