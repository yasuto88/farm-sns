import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
import "./FarmInfoTop.css"
import { Autoplay, Pagination } from 'swiper/modules';

SwiperCore.use([Autoplay, Pagination]);

export default function FarmInfoTop() {
  return (
    <div className="farm-info-top">
      <div className="farm-info-swiper-wrapper">
        <Swiper
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={true}
          modules={[Pagination]}
          className="farm-info-swiper"
        >
          <SwiperSlide>
            <div className="farm-info-image-wrapper">
              <img
                src="./images/farm6.png"
                alt=""
                className="farm-info-image"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="farm-info-image-wrapper">
              <img
                src="./images/farm7.png"
                alt=""
                className="farm-info-image"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="farm-info-image-wrapper">
              <img
                src="./images/farm10.png"
                alt=""
                className="farm-info-image"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="farm-info-container">
        <div className="farm-info-content">
          <h2>米農家の林さん</h2>
          <p>活動場所: 新潟</p>
          <p>人数：3人</p>
          <p>ジャンル: 米農家</p>
          <div className="farm-info-content-btn">
            <button className="farm-info-content-join-btn">
              求人に応募する
            </button>
            <div className="farm-info-content-sns-wrapper">
              <a
                href="https://example.com"
                className="farm-info-content-sns-link"
              >
                <FaTwitterSquare />
              </a>
              <a
                href="https://example.com"
                className="farm-info-content-sns-link"
              >
                <FaInstagramSquare />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
