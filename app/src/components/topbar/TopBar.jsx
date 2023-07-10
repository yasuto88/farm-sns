import React from "react";
import "./TopBar.css"
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";

export default function TopBar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">farm-sns</span>
      </div>
      <div className="topbarCenter">
        <form className="search-bar-container">
          <div className="search-input-container">
            <SearchIcon />
            <input
              type="text"
              placeholder="農家を探す"
              className="search-input"
            />
          </div>
          <a href="create_farm.html" className="search-button">
            検索
          </a>
          <a href="create_farm.html" className="tune-button">
            <TuneIcon />
          </a>
        </form>
      </div>
      <div className="topbarRight">
        <a href="create_farm.html" className="btn-create-farm">
          ログイン
        </a>
      </div>
    </div>
  );
}
