import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const CardSkeleton = () => {
  return (
    <div className=" m-2 min-h-[409px]  p-2 border-2 ">
      <SkeletonTheme baseColor="#C5C5C5" highlightColor="#AEAEAE">
        <Skeleton width={"100%"} height={230} className="mt-1" />
        <Skeleton width={"100%"} height={50} className="mt-3" />
        <Skeleton width={"100%"} height={20} className="mt-2" />
        <Skeleton width={"100%"} height={50} className="mt-2" />
      </SkeletonTheme>
    </div>
  );
};

export default CardSkeleton;
