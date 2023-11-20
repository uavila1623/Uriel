import React from "react";
import "../style/Model.css";
import ModelViewer from "../modelComps/ModelViewer";
export default function Model() {
  return (
    <div className="mod-cont">
      <div id="mod-title">➤Room Model</div>
      <div id="mod-desc">
        The model is a representation of my personal workspace and personal
        preferences, showcasing elements that reflect my interests.
      </div>
      <div id="mod-area">
        <ModelViewer />
        {/* Model Area */}
      </div>
    </div>
  );
}
