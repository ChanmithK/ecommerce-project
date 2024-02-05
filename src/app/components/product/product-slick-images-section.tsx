"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { exampleProduct } from "../data";
import { Products } from "../../../../type";
import { useSelector } from "react-redux";
import {
  selectLoading,
  selectProduct,
} from "@/redux/slices/temporary-data-slice";
import ProductSlickImagesSkeleton from "../skeletonLoadings/product-slick-images-skeleton";

const ProductSlickImagesSection = () => {
  const sliderRef = useRef<Slider>(null);
  const [selectedImage, setSelectedImage] = useState(0);

  const item: Products | undefined = useSelector(selectProduct)?.[0];

  const isLoading = useSelector(selectLoading);

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  return isLoading ? (
    <ProductSlickImagesSkeleton />
  ) : (
    <div className="">
      <div>
        <Slider {...settings} ref={sliderRef} initialSlide={selectedImage}>
          {item?.images.map((image, index) => (
            <div key={index}>
              <Image
                src={image}
                alt={`Product ${index + 1}`}
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          ))}
        </Slider>
        <div className="flex p-4">
          {item?.images.map((image, index) => (
            <div
              key={index}
              className={`w-16 h-16 cursor-pointer ${
                selectedImage === index ? "border-2 border-blue-500" : ""
              }`}
              onClick={() => handleImageClick(index)}
            >
              <Image
                src={image}
                alt={`Product ${index + 1}`}
                width={64}
                height={64}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSlickImagesSection;
