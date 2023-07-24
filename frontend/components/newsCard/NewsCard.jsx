import React from "react";
import "./NewsCard.css";

export default function NewsCard(props) {
  const { newsDate, isImportant, newsDesc } = props;
  return (
    <div className="news-card">
      <div className="news-info">
        <span className="news-date">{newsDate}</span>
        {isImportant && <span className="news-badge">重要</span>}
      </div>
      <p className="news-message">{newsDesc}</p>
    </div>
  );
}
