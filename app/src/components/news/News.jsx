import React from 'react'
import "./News.css"
import NewsCard from "../newsCard/NewsCard"

export default function News() {
  return (
	<div className="news-section">
      <h2 className="news-heading">お知らせ</h2>
      <div className="news-card-wrapper">
        <NewsCard
          newsDate="2023年6月15日"
          isImportant={true}
          newsDesc="田中さんの商品が入荷しました。詳細はこちらをご確認ください。"
        />
        <NewsCard
          newsDate="2023年6月10日"
          isImportant={false}
          newsDesc="新しく佐藤さんが農業を始めました"
        />
        <NewsCard
          newsDate="2023年6月8日"
          isImportant={false}
          newsDesc="サイトが公開されました"
        />
        <NewsCard
          newsDate="2023年6月10日"
          isImportant={false}
          newsDesc="サイトが完成しました"
        />
      </div>
    </div>
  )
}
