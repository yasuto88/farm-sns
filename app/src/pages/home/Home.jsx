import React from 'react'
import "./Home.css"
import TopBar from "../../components/topbar/TopBar";
import Contents from '../../components/contents/Contents';
import Main from "../../components/main/Main"
import Topic from "../../components/topic/Topic"

export default function Home() {
  return (
	<>
      <TopBar />
      <div className="home-wrapper">
        <Contents />
        <Main />
        <Topic />
      </div>
    </>
  )
}
