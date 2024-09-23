// import Swiper core and required modules
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import useFetch from "../../components/hooks/useFetch";
import CategoryCard from "../../components/cards/CategoryCard";

import CategorySceleton from "../../components/cards/CategorySceleton";

const CategoryCarousel = () => {
  // Fetch data using the custom useFetch hook
  const { data, loading } = useFetch(`/categories.php`);

  return (
    <div className="bg-[#E4D2BC]">
      <div className=" max-w-[1130px] mx-auto ">
        <div className=" relative w-[60%] sm:w-[80%]  px-[16px]  h-[50%] mx-auto ">
          {/* Left Navigation Button */}
          <button className="absolute top-[50%] left-[-50px] z-10 transform -translate-y-1/2 ">
            <RiArrowLeftSLine className="swiper-button-prev text-white w-[40px] h-[40px] rounded-full bg-gradient-to-r from-[#FFB53A] to-[#FF9C39] shadow-lg  transition-transform duration-300" />
          </button>

          {/* Swiper Slider */}
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={3}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              300: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="h-[400px] "
          >
            {/* Mapping over fetched categories and rendering each as a SwiperSlide */}
            {data?.categories?.map((item, i) => (
              <SwiperSlide key={i}>
                <>
                  {loading ? (
                    <>
                      <CategorySceleton />
                    </>
                  ) : (
                    <CategoryCard resItem={item} loading={loading} />
                  )}
                </>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Right Navigation Button */}
          <button className=" absolute  top-[50%] right-[-50px] z-10 transform -translate-y-1/2 ">
            <RiArrowRightSLine className="swiper-button-next text-white w-[40px] h-[40px] rounded-full bg-gradient-to-r from-[#FFB53A] to-[#FF9C39] shadow-lg  transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCarousel;
