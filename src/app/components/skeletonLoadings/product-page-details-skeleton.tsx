import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const ProductPageDetailsSkeleton = () => {
  return (
    <div className="col-span-3 mobile:p-8 ">
      <SkeletonTheme baseColor="#C5C5C5" highlightColor="#AEAEAE">
        <Skeleton width={"100%"} height={50} className="mt-1 w-full" />
      </SkeletonTheme>
      <SkeletonTheme baseColor="#C5C5C5" highlightColor="#AEAEAE">
        <Skeleton width={"100%"} height={30} className="mt-4 w-full" />
      </SkeletonTheme>

      <SkeletonTheme baseColor="#C5C5C5" highlightColor="#AEAEAE">
        <Skeleton width={"100%"} height={80} className="mt-4 w-full" />
      </SkeletonTheme>

      <SkeletonTheme baseColor="#C5C5C5" highlightColor="#AEAEAE">
        <Skeleton width={"100%"} height={20} className="mt-4 w-full" />
      </SkeletonTheme>
      <SkeletonTheme baseColor="#C5C5C5" highlightColor="#AEAEAE">
        <Skeleton width={"100%"} height={130} className="mt-4 w-full" />
      </SkeletonTheme>
    </div>
  );
};

export default ProductPageDetailsSkeleton;
