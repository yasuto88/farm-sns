import React from "react";
import "./FarmInfo.css";
import TopBar from "../../components/topbar/TopBar";
import FarmInfoTop from "../../components/farmInfoTop/FarmInfoTop";
import Tag from "../../components/tag/Tag";
import FarmActiveCard from "../../components/farmActiveCard/FarmActiveCard";
import Chart from "../../components/chart/Chart";

export default function FarmInfo() {
  return (
    <>
      <TopBar />
      <div className="farm-info-wrapper">
        <FarmInfoTop />
        <div className="farm-page">
          <Chart />
          <div className="farm-page-content">
            <h2 className="farm-page-section-title">農業概要</h2>
            <p className="farm-page-description">
              農業の概要をここに記載します。
            </p>
          </div>
          <div className="farm-page-content">
            <h2 className="farm-page-section-title">活動内容</h2>
            <p className="farm-page-description">
              活動内容をここに記載します。
            </p>
          </div>
          <div className="farm-page-content">
            <h2 className="farm-page-section-title">農業情報</h2>
            <table class="farm-info-table">
              <tr>
                <th>
                  <strong>項目</strong>
                </th>
                <th>
                  <strong>内容</strong>
                </th>
              </tr>
              <tr>
                <td>
                  <strong>代表者</strong>
                </td>
                <td>山田太郎</td>
              </tr>
              <tr>
                <td>
                  <strong>設立日</strong>
                </td>
                <td>2023年05月16日</td>
              </tr>
              <tr>
                <td>
                  <strong>活動頻度</strong>
                </td>
                <td>不定期</td>
              </tr>
              <tr>
                <td>
                  <strong>会費</strong>
                </td>
                <td>会場費がかかる場合のみ自己負担</td>
              </tr>
              <tr>
                <td>
                  <strong>特色</strong>
                </td>
                <td className="tag-td">
                  <Tag tagName="のんびり" />
                  <Tag tagName="掛け持ちOK" />
                  <Tag tagName="土日活動" />
                  <Tag tagName="平日活動" />
                  <Tag tagName="設立１年未満" />
                  <Tag tagName="飲み会あり" />
                </td>
              </tr>
            </table>
          </div>
          <div className="farm-page-content">
            <h2 className="farm-page-section-title">活動記録</h2>
            <div className="farm-page-farm-active-card-container">
              <div className="farm-page-farm-active-card-wrapper">
                <FarmActiveCard
                  farmName="テニスサークル"
                  farmActiveDate="2023/06/18"
                  farmActiveDesc="テニスしました"
                />
              </div>
              <div className="farm-page-farm-active-card-wrapper">
                <FarmActiveCard
                  farmName="テニスサークル"
                  farmActiveDate="2023/06/18"
                  farmActiveDesc="テニスしました"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
