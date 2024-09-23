import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const LazyImg = ({ src, css, alt }) => {
  return (
    <LazyLoadImage  alt={alt}  src={src} className={css} effect="blur"/>
  );
};

export default LazyImg;
