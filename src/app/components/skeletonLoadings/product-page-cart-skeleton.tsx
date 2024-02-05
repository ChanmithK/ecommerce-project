import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const ProductPageCartSkeleton = () => {
  return (
    <div className="col-span-3 mobile:py-5 ">
      <SkeletonTheme baseColor="#C5C5C5" highlightColor="#AEAEAE">
        <Skeleton width={"100%"} height={60} className=" w-full" />
      </SkeletonTheme>
      <div className="grid grid-cols-2 gap-2 mt-2">
        <div className=" ">
          <SkeletonTheme baseColor="#C5C5C5" highlightColor="#AEAEAE">
            <Skeleton width={"100%"} height={50} className=" w-full" />
          </SkeletonTheme>
        </div>
        <div className=" ">
          <SkeletonTheme baseColor="#C5C5C5" highlightColor="#AEAEAE">
            <Skeleton width={"100%"} height={50} className=" w-full" />
          </SkeletonTheme>
        </div>
        <div className=" ">
          <SkeletonTheme baseColor="#C5C5C5" highlightColor="#AEAEAE">
            <Skeleton width={"100%"} height={50} className=" w-full" />
          </SkeletonTheme>
        </div>
        <div className=" ">
          <SkeletonTheme baseColor="#C5C5C5" highlightColor="#AEAEAE">
            <Skeleton width={"100%"} height={50} className=" w-full" />
          </SkeletonTheme>
        </div>
      </div>
      <SkeletonTheme baseColor="#C5C5C5" highlightColor="#AEAEAE">
        <Skeleton width={"100%"} height={20} className=" w-full mt-2" />
      </SkeletonTheme>

      <div className="grid grid-cols-3 gap-2 mt-2">
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
        <div className=" ">
          <SkeletonTheme baseColor="#C5C5C5" highlightColor="#AEAEAE">
            <Skeleton width={"100%"} height={30} className=" w-full" />
          </SkeletonTheme>
        </div>
      </div>
      <SkeletonTheme baseColor="#C5C5C5" highlightColor="#AEAEAE">
        <Skeleton width={"100%"} height={80} className=" w-full mt-3" />
      </SkeletonTheme>
    </div>
  );
};

export default ProductPageCartSkeleton;
