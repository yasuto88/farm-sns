import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation';
import { Link } from "react-router-dom";
import Tag from "../tag/Tag";
import "./FarmCard.css";

export default function FarmCard(props) {
  const {
    farmName,
    farmDescription,
    farmLocation,
    farmMembers,
    farmReader,
    farmGenre,
  } = props;
  return (
    <div className="farm-card">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="farm-card-swiper"
      >
        <SwiperSlide>
          <div className="image-wrapper">
            <img src="./images/farm3.png" alt="" className="farm-image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-wrapper">
            <img
              src="./images/farm4.png"
              alt=""
              className="farm-image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-wrapper">
            <img src="./images/farm5.png" alt="" className="farm-image" />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="farm-card-bottom">
        <div className="farm-card-info-wrapper">
          <h2 className="farm-name">{farmName}</h2>
          <p className="farm-description">{farmDescription}</p>
          <div className="farm-info">
            <span className="info-label">活動場所:</span>
            <span className="info-text">{farmLocation}</span>
          </div>
          <div className="farm-info">
            <span className="info-label">人数:</span>
            <span className="info-text">{farmMembers}</span>
          </div>
          <div className="farm-info">
            <span className="info-label">代表者:</span>
            <span className="info-text">{farmReader}</span>
          </div>
          <div className="farm-contact">
            <span className="genre-label">ジャンル:</span>
            <a href="https://github.com/" className="genre-tag">
              {farmGenre}
            </a>
          </div>
          <Link to="/farmInfo">
            <button className="btn-more">詳しく見る</button>
          </Link>
        </div>
        <div className="tags-wrapper">
          <Tag tagName="米農家" />
          <Tag tagName="無農薬" />
          <Tag tagName="仲間募集" />
          <Tag tagName="新潟" />
          <Tag tagName="設立１年未満" />
        </div>
      </div>
    </div>
  );
}
