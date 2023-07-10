import React from "react";
import "./Contents.css";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import FlagIcon from "@mui/icons-material/Flag";
import CelebrationIcon from "@mui/icons-material/Celebration";

export default function Contents() {
  return (
    <div className="contents-wrapper">
      <div className="login-form-wrapper"></div>
      <h2 className="farm-operation-button-heading">農業の管理</h2>
      <div className="farm-operation-button-wrapper">
        <button className="farm-operation-button">
          <span className="farm-operation-button-icon">
            <AddCircleIcon />
          </span>
          農業を始める
        </button>
        <button className="farm-operation-button">
          <span className="farm-operation-button-icon">
            <EditIcon />
          </span>
          農家情報の編集
        </button>
        <button className="farm-operation-button">
          <span className="farm-operation-button-icon">
            <FlagIcon />
          </span>
          農業活動の報告
        </button>
        <button className="farm-operation-button">
          <span className="farm-operation-button-icon">
            <CelebrationIcon />
          </span>
          お知らせの報告
        </button>
      </div>
    </div>
  );
}
