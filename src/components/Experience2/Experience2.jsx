import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience2.css";
const Experience2 = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience2" id="experience2">
      <div className="achievement">
        {/* darkMode */}
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          8+
        </div>
        <span>countries </span>
        {/* <span>Experience</span> */}
      </div>
      <div className="achievement">
        <div className="circle">20+</div>
        <span>cities </span>
        {/* <span>Projects</span> */}
      </div>
      <div className="achievement">
        <div className="circle">50+</div>
        <span style={{ color: darkMode ? "white" : "" }}>outlets </span>
        {/* <span>Work</span> */}
      </div>
      <div className="achievement">
        <div className="circle">15+</div>
        <span>Features </span>
        {/* <span>Work</span> */}
      </div>
    </div>
  );
};

export default Experience2;
