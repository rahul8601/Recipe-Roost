import React from "react";
import humburgerImg from "../../assets/humburgerImg.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import LazyImg from "../../components/lazyLoadImg/LazyImg";
import TestimonialCard from "../../components/cards/TestimonialCard";

const testimonials = [
  {
    id: 1,
    name: "DeepakDishes",
    imageUrl: "https://i.pravatar.cc/48?u=11886",
    rating: 5,
    message:
      "I love how Recipe Roost makes cooking fun and easy. The step-by-step guides are a lifesaver.",
  },
  {
    id: 2,
    name: "Jane Smith",
    imageUrl: "https://i.pravatar.cc/48?u=33272",
    rating: 4,
    message:
      "Great app with a wide variety of recipes. I love the step-by-step guides.",
  },
  {
    id: 3,
    name: "Sam Wilson",
    imageUrl: "https://i.pravatar.cc/48?u=499476",
    rating: 5,
    message:
      "Recipe Roost offers endless recipe options. Every dish I’ve tried has been a hit!",
  },
  {
    id: 4,
    name: "RiderRavi",
    imageUrl: "https://i.pravatar.cc/48?u=4",
    rating: 4,
    message:
      "Cooking is so much fun with Recipe Roost. The recipes are simple and flavorful.",
  },
  {
    id: 5,
    name: "CarJunkieJoe",
    imageUrl: "https://i.pravatar.cc/48?u=7",
    rating: 5,
    message:
      "I’ve discovered so many great recipes on Recipe Roost. It’s my favorite cooking app!",
  },
  // Add more testimonials as needed
];

const TestimonialCarousel = () => {
  return (
    <div className="bg-[#E4D2BC]">
      <div className="max-w-5xl  mx-auto p-6  ">
        <div className="flex items-center justify-between flex-col sm:flex-row ">
          {/* Display hamburger image */}
          <div className=" size-[38%] relative top-5 ">
            <LazyImg src={humburgerImg} alt="hamburger" />
          </div>

          <div className="  sm:w-[50%] w-[80%] ">
            <h2 className="text-3xl font-bold text-start py-4 ">
              What Our Users Say
            </h2>
            <div className=" relative mx-auto mt-14  rounded-lg">
              {/* Left Navigation Button */}
              <button className="absolute top-[-15%] right-[100px] z-10 transform -translate-y-1/2 ">
                <RiArrowLeftSLine className="swiper-button-prev text-[#FF9B39] w-[40px] h-[40px] rounded-full border-[2px] border-[#FF9B39] shadow-lg  transition-transform duration-300" />
              </button>

              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                keyboard={{
                  enabled: true,
                }}
                modules={[Keyboard, Pagination, Navigation]}
                className="mySwiper rounded-lg shadow-lg "
              >
                {testimonials.map((testimonial) => (
                  <SwiperSlide key={testimonial.id}>
                    <TestimonialCard testimonial={testimonial} />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Right Navigation Button */}
              <button className=" absolute  top-[-15%] right-[-10px] z-10 transform -translate-y-1/2 ">
                <RiArrowRightSLine className="swiper-button-next text-[#FF9B39] w-[40px] h-[40px] rounded-full border-[2px] border-[#FF9B39] shadow-lg  transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
