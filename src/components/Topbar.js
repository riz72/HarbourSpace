import * as React from "react";
import "./styles/topbar.css";
import topIcon from "../assets/icon.svg";

export default function TopBar() {
  return (
    <div id="topbar__section">
      <div className="topbar__left">
        <p>
          HARBOUR.SPACE <span>/ interaction design</span>
        </p>
      </div>
      <div className="topbar__right">
        <img src={topIcon} alt="topIcon" />
      </div>
    </div>
  );
}
