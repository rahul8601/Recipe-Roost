import React, { useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import CategoryCarousel from "./CategoryCarousel";
import LocationBasedRecipes from "./LocationBasedRecipes";
import TestimonialSection from "./TestimonialSection";
import ChefsTips from "./ChefsTips";

const Home = () => {
  return (
    <>
      <HeroSection />
      <CategoryCarousel />
      <LocationBasedRecipes />
      <TestimonialSection />
      <ChefsTips />
    </>
  );
};

export default Home;
