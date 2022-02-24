import "./ThemeSelector.css";
import { useTheme } from "../hooks/useTheme.js";
import React from "react";

export default function ThemeSelector() {
  const { changeColor } = useTheme();
  return (
    <div className="theme-selector">
      <ul className="color-picker-list">
        <li
          className="color-picker-blue"
          onClick={() => {
            changeColor("blue");
          }}
        ></li>
        <li
          className="color-picker-yellow"
          onClick={() => {
            changeColor("yellow");
          }}
        ></li>
        <li
          className="color-picker-green"
          onClick={() => {
            changeColor("green");
          }}
        ></li>
      </ul>
    </div>
  );
}
