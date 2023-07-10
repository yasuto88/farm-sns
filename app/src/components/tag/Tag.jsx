import React from 'react'
import "./Tag.css"

export default function Tag(props) {
	const {tagName} = props;
  return (
	<div className="tag">{tagName}</div>
  )
}
