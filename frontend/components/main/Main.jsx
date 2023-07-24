import React from "react";
import "./Main.css"
import FarmCard from "../farmCard/FarmCard"

export default function Main() {
  return (
    <div className="main-wrapper">
      <h2 className="main-heading">農家一覧</h2>
      <FarmCard
        farmName="米農家の林さん"
        farmDescription="米農家をやっています"
        farmLocation="新潟"
        farmMembers="2人"
        farmReader="林さん"
        farmGenre="米農家"
      />
      <FarmCard
        farmName="ミカン農家の田中さん"
        farmDescription="ミカンの栽培をしています"
        farmLocation="和歌山"
        farmMembers="6人"
        farmReader="田中さん"
        farmGenre="ミカン農家"
      />
      <FarmCard
        farmName="トマト農家の山田さん"
        farmDescription="おいしいトマトを作ってます"
        farmLocation="熊本"
        farmMembers="3人"
        farmReader="山田さん"
        farmGenre="トマト農家"
      />
    </div>
  );
}
