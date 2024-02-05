import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const ProductTabSkeleton = () => {
  return (
    <div className="col-span-3 mobile:p-5 ">
      <SkeletonTheme baseColor="#C5C5C5" highlightColor="#AEAEAE">
        <Skeleton width={"100%"} height={30} className=" w-full mt-1" />
        <Skeleton width={"100%"} height={30} className=" w-full mt-2" />
        <Skeleton width={"100%"} height={30} className=" w-full mt-2" />
        <Skeleton width={"100%"} height={30} className=" w-full mt-2" />
        <Skeleton width={"100%"} height={30} className=" w-full mt-2" />
        <Skeleton width={"100%"} height={30} className=" w-full mt-2" />
      </SkeletonTheme>
    </div>
  );
};

export default ProductTabSkeleton;
