import React from 'react'
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import SwiperCore from "swiper";
import "./FarmActive.css"
import FarmActiveCard from '../farmActiveCard/FarmActiveCard';
import { Autoplay, Pagination } from 'swiper/modules';

SwiperCore.use([Autoplay, Pagination]);

export default function FarmActive() {
  return (
	<div className="farm-active-wrapper">
      <h2 className="farm-heading">活動記録</h2>
      <Swiper
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={true}
        modules={[Pagination]}
        className="farm-active-card-swiper"
      >
        <SwiperSlide>
          <div className="farm-active-card-wrapper">
            <FarmActiveCard
              farmName="米農家の林さん"
              farmActiveDate="2023/06/18"
              farmActiveDesc="米がとれました"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="farm-active-card-wrapper">
            <FarmActiveCard
              farmName="ミカン農家の田中さん"
              farmActiveDate="2023/06/18"
              farmActiveDesc="ミカンがとれました"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="farm-active-card-wrapper">
            <FarmActiveCard
              farmName="トマト農家の山田さん"
              farmActiveDate="2023/06/18"
              farmActiveDesc="トマトがとれました"
            />
          </div>
        </SwiperSlide>
      </Swiper>
      <button type="submit" className="btn-all-farm-active-card">
        全ての活動を見る
      </button>
    </div>
  )
}
