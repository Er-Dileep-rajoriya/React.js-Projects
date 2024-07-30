import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonLoader = ({ count }) => {
  return (
    <SkeletonTheme color="#202020" highlightColor="#444">
      <Skeleton count={count} />
    </SkeletonTheme>
  );
};

export default SkeletonLoader;
