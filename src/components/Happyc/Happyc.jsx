import React, { useContext } from "react";
import "./Happyc.css";
import Profile1 from "../../img/profile1.jpg";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import P1 from "../../img/p1.png";
import P2 from "../../img/p2.png";
import P3 from "../../img/p3.png";
import P5 from "../../img/p5.png";
import P6 from "../../img/p6.png";
import P7 from "../../img/p7.png";
import P8 from "../../img/p8.png";
import P9 from "../../img/p9.png";
import { themeContext } from "../../Context";

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Happyc = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="happyc" id="happyc">
      <div
        className="title"
        style={{ fontSize: "36px", fontWeight: "bold", textAlign: "center" }}
      >
        Happy Clients
      </div>
      <section className="gallery " id="gallery">
        <div className="container-lg">
          <div className="row gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3">
            <div className="col">
              <img className="gallery-item" src={P1} alt="" />
            </div>
            <div className="col">
              <img className="gallery-item" src={P2} alt="" />
            </div>
            <div className="col">
              <img className="gallery-item" src={P3} alt="" />
            </div>
            <div className="col">
              <img className="gallery-item" src={P5} alt="" />
            </div>
            <div className="col">
              <img className="gallery-item" src={P6} alt="" />
            </div>
            <div className="col">
              <img className="gallery-item" src={P7} alt="" />
            </div>
            <div className="col">
              <img className="gallery-item" src={P8} alt="" />
            </div>
            <div className="col">
              <img className="gallery-item" src={P9} alt="" />
            </div>
            <div className="col">
              <img className="gallery-item" src={P9} alt="" />
            </div>
            <div className="col">
              <img className="gallery-item" src={P9} alt="" />
            </div>
            <div className="col">
              <img className="gallery-item" src={P9} alt="" />
            </div>
            <div className="col">
              <img className="gallery-item" src={P9} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Happyc;
