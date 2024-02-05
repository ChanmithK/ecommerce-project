"use client";

import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Container from "../container";
import Slider from "react-slick";
import Card from "../product/cards/card";
import { Products } from "../../../../type";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSimilarProducts,
  selectLoading,
  selectSimilarProducts,
} from "@/redux/slices/temporary-data-slice";
import { AppDispatch } from "@/redux/store";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import CardSkeleton from "../skeletonLoadings/card-skeleton";

interface Props {
  slug: string;
}

const SimilarProducts = ({ slug }: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  const FeaturedProducts = useSelector(selectSimilarProducts);
  const isLoading = useSelector(selectLoading);

  const myRef = useRef<Slider | null>(null);

  useEffect(() => {
    dispatch(fetchSimilarProducts(slug));
  }, [dispatch, slug]);

  const NextArrow = (props: any) => {
    const { className, onClick } = props;
    return (
      <button
        className={`${className} bg-primary text-white hover:bg-secondary text-lg pl-4 pr-4 ml-1 mt-1 -skew-x-12`}
        onClick={onClick}
      >
        <IoIosArrowForward />
      </button>
    );
  };

  const PrevArrow = (props: any) => {
    const { className, onClick } = props;
    return (
      <button
        className={`${className} bg-primary text-white hover:bg-secondary text-lg pl-4 pr-4 ml-1 mt-1 -skew-x-12`}
        onClick={onClick}
      >
        <IoIosArrowBack />
      </button>
    );
  };

  const handleNextSlide = () => {
    myRef.current?.slickNext();
  };

  const handlePrevSlide = () => {
    myRef.current?.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: false,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // Medium screens and above
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Small screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Extra small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      {/* section-header */}
      <div className="flex flex-wrap border-b p-2 border-gray-200">
        <h1 className="text-xl  font-bold">Similar Products</h1>
        <div className="grow"></div>
        <div className="flex">
          <div>
            <PrevArrow onClick={handlePrevSlide} />
            <NextArrow onClick={handleNextSlide} />
          </div>
        </div>
      </div>

      {/* section-products */}

      {isLoading ? (
        <div className="grid md:grid-cols-3 lg:grid-cols-5 ">
          <div>
            <CardSkeleton />
          </div>
          <div className="mobile:hidden md:block">
            <CardSkeleton />
          </div>
          <div className=" mobile:hidden md:block">
            <CardSkeleton />
          </div>
          <div className=" mobile:hidden lg:block">
            <CardSkeleton />
          </div>
          <div className=" mobile:hidden lg:block">
            <CardSkeleton />
          </div>
        </div>
      ) : (
        <div>
          <Slider {...settings} ref={myRef}>
            {FeaturedProducts?.map((item: Products, index: number) => (
              <Card key={index} item={item} />
            ))}
          </Slider>
        </div>
      )}
    </Container>
  );
};

export default SimilarProducts;
