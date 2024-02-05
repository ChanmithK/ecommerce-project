"use client";

import React, { useEffect } from "react";
import { exampleProduct } from "../data";
import FormattedPrice from "../common/formatted-price";
import RatingStars from "./rating-stars";
import p from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/redux/store";
import {
  fetchProduct,
  selectLoading,
  selectProduct,
} from "@/redux/slices/temporary-data-slice";
import { Products } from "../../../../type";
import ProductPageDetailsSkeleton from "../skeletonLoadings/product-page-details-skeleton";

interface Props {
  slug: string;
}

const ProductDetailsSection = ({ slug }: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProduct(slug));
  }, [dispatch, slug]);

  const item: Products | undefined = useSelector(selectProduct)?.[0];
  const isLoading = useSelector(selectLoading);

  console.log(" ***** selectProduct KEY FEAT ****", item?.keyFeatures?.[0]);

  return isLoading ? (
    <ProductPageDetailsSkeleton />
  ) : (
    <div className="col-span-3 mobile:p-8 ">
      <h1 className="mobile:text-xl md:text-2xl font-bold">{item?.name}</h1>
      <div className="mt-2 flex items-center">
        <RatingStars rating={item?.rating!} />
        <h4 className="text-xs text-gray-600 ml-2">{item?.reviews} reviews</h4>
      </div>

      <p className="mt-3 mobile:text-sm md:text-md">{item?.description}</p>

      <div className="mt-4">
        <h2 className="text-md font-medium ">
          <p>Key Features</p>
        </h2>
        <ul className="p-4">
          {item?.keyFeatures?.map((feature: string, index) => (
            <li key={index} className="list-disc mobile:text-sm md:text-md text-base text-gray-400">
              <p>{feature}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetailsSection;
