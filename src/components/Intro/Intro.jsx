import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import bg1 from "../../img/bg1.png";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  // const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span>Pos Made Simple</span>
          <span>Software Solution</span>
          <span>
            Simple, Powerful & Affordable POS SOFTWARE SOLUTION For All
            Restaurant Types
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Book A Demo</button>
        </Link>
        {/* social icons */}
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={bg1} alt="" />
      </div>
    </div>
  );
};

export default Intro;
