import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const ProductSlickImagesSkeleton = () => {
  return (
    <div className="col-span-3 mobile:p-8 ">
      <SkeletonTheme baseColor="#C5C5C5" highlightColor="#AEAEAE">
        <Skeleton width={"100%"} height={300} className="mt-1 w-full" />
      </SkeletonTheme>
      <div className="grid grid-cols-7 gap-2 mt-2">
        <div className=" ">
          <SkeletonTheme baseColor="#C5C5C5" highlightColor="#AEAEAE">
            <Skeleton width={"100%"} height={30} className=" w-full" />
          </SkeletonTheme>
        </div>
        <div className=" ">
          <SkeletonTheme baseColor="#C5C5C5" highlightColor="#AEAEAE">
            <Skeleton width={"100%"} height={30} className=" w-full" />
          </SkeletonTheme>
        </div>
      </div>
    </div>
  );
};

export default ProductSlickImagesSkeleton;
