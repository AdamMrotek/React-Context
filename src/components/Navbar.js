import { useTheme } from "../hooks/useTheme.js";
import "./Navbar.css";
import ThemeSelector from "./ThemeSelector.js";

export default function Navbar() {
  const { changeColor, color } = useTheme();
  return (
    <div className="navbar-box" style={{ backgroundColor: color }}>
      <div onClick={() => changeColor("#2472FA")} className="logoBox">
        Navbar
      </div>
      <ul className="navbar-box__list">
        <li className="navbar-box__item">Home Page</li>
        <li className="navbar-box__item">Dashboard</li>
        <li className="navbar-box__item">Contact Us</li>
      </ul>
      <ThemeSelector />
    </div>
  );
}
