import React from "react";
import "./FarmActiveCard.css"

export default function FarmActiveCard(props) {
  const { farmName, farmActiveDate, farmActiveDesc } = props;
  return (
    <div className="farm-active-card">
      <div className="farm-active-heading">
        <img
          src="./images/farm1.png"
          alt=""
          className="farm-active-image"
        />
        <h2 className="farm-active-title">{farmName}</h2>
        <span className="farm-activity-time-date">{farmActiveDate}</span>
      </div>
      <div className="farm-active-status-image">
        <img src="./images/farm2.png" alt="活動画像" />
      </div>
      <p className="farm-active-description">{farmActiveDesc}</p>
      <a href="farm-details.html" className="farm-activity-more-button">
        詳しく見る
      </a>
    </div>
  );
}
