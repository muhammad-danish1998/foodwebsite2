import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-scroll";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { setCatValue } from "../redux/store/actions/menuAction";

export default function HeaderTextSlider({ catArray, res, value, setValue }) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (catArray?.length > 0 && value == "") {
      setValue && setValue(catArray[0]?.title);
    }
    if(value == 'All'){
      dispatch(setCatValue(catArray[0].id));
    }
  }, [catArray,value=='All']);

  return (
    <>
      <Swiper
        slidesPerView={7}
        spaceBetween={5}
        slidesPerGroup={1}
        loop={false}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiperresturant bg-gray-200 hidden lg:block  text-center    "
      >
        {res
          ? catArray?.map((arr) => (
              <SwiperSlide
                onClick={() => {
                  dispatch(setCatValue(arr.id));
                  setValue(arr?.title);
                }}
                className={`p-3 text-sm lg:text-lg ${
                  catArray?.find((obj) => obj.title == arr?.title)?.title ==
                  value
                    ? "bg-red-600  text-white  font-bold"
                    : ""
                }   text-gray-700 cursor-pointer`}
              >
                <button>{arr.title}</button>
              </SwiperSlide>
            ))
          : catArray?.map((arr) => (
            <SwiperSlide className={`text-sm lg:text-md ${catArray?.find(obj=>obj.title == arr?.title)?.title == value ? 'bg-red-600 text-white font-bold' : ''} text-gray-700 `} style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
            <div className="">
              <Link className="block  h-[4rem]  cursor-pointer" style={{lineHeight:'4rem'}} onClick={()=>{ dispatch(setCatValue(arr.id)); setValue(arr?.title) }} to={arr.title} spy={true} smooth={true}>
                {arr.title} 
              </Link>
            </div>
          </SwiperSlide>
            ))}
      </Swiper>

      {/* ----------- text slider for mobile ---------------------  */}

      <Swiper
        slidesPerView={2}
        spaceBetween={5}
        slidesPerGroup={1}
        loop={false}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiperresturant bg-gray-200 lg:hidden  text-center  "
      >
        {res
          ? catArray?.map((arr) => (
              <SwiperSlide className="p-3 lg:text-lg text-lg lg:font-semibold text-gray-700 cursor-pointer">
                <button onClick={() => dispatch(setCatValue(arr.id))}>
                  {arr.title}
                </button>
              </SwiperSlide>
            ))
          : catArray?.map((arr) => (
              <SwiperSlide className="p-2 text-sm   text-gray-700 cursor-pointer">
                <Link to={arr.title} spy={true} smooth={true}>
                  {arr.title}
                </Link>
              </SwiperSlide>
            ))}
      </Swiper>
    </>
  );
}
