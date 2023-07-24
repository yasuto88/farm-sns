import React from 'react'
import "./Topic.css";
import "../farmActive/FarmActive"
import "../news/News"
import FarmActive from '../farmActive/FarmActive';
import News from '../news/News';

export default function Topic() {
  return (
	<div className="topic-wrapper">
      <FarmActive />
      <News />
    </div>
  )
}
