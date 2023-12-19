import React, { useContext } from "react";
import "./Grid3.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import Img1 from "../../img/img4.png";
import Pizza from "../../img/pizza.png";
import Ret from "../../img/ret.png";
import Ice from "../../img/icecream.png";
import B1 from "../../img/bars.png";
import B2 from "../../img/backery.png";
import FD from "../../img/finedine.png";
import Ft from "../../img/food_truck.png";
import Cafe from "../../img/cafe2.png";

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Grid3 = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="services" id="services">
      <div className="container" style={{ margintop: "9rem" }}>
        <div
          className="title"
          style={{ fontSize: "32px", fontWeight: "bold", textAlign: "center" }}
        >
          What type of Restaurant uses RePOS?
        </div>
        <div className="row gy-3 my-3">
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div
              className="card"
              style={{ width: "90%", height: "100%", borderRadius: "5%" }}
            >
              <img src={Img1} className="card-img-top" />
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{
                    marginTop: "-15px",
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Customer Relationship
                </h5>
                <p
                  className="card-text"
                  style={{
                    fontSize: "12px",
                    textAlign: "center",
                  }}
                >
                  Some quick example
                </p>
                <a
                  href="#"
                  className="btn btn-success"
                  style={{
                    background: "#21e287",
                    color: "#002365",
                  }}
                >
                  know more
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div
              className="card"
              style={{ width: "90%", height: "100%", borderRadius: "5%" }}
            >
              <img src={Img1} className="card-img-top" />
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{
                    marginTop: "-15px",
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Customer Relationship
                </h5>
                <p
                  className="card-text"
                  style={{
                    fontSize: "12px",
                    textAlign: "center",
                  }}
                >
                  Some quick example
                </p>
                <a
                  href="#"
                  className="btn btn-success"
                  style={{
                    background: "#21e287",
                    color: "#002365",
                  }}
                >
                  know more
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div
              className="card"
              style={{ width: "90%", height: "100%", borderRadius: "5%" }}
            >
              <img src={Img1} className="card-img-top" />
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{
                    marginTop: "-15px",
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Customer Relationship
                </h5>
                <p
                  className="card-text"
                  style={{
                    fontSize: "12px",
                    textAlign: "center",
                  }}
                >
                  Some quick example
                </p>
                <a
                  href="#"
                  className="btn btn-success"
                  style={{
                    background: "#21e287",
                    color: "#002365",
                  }}
                >
                  know more
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div
              className="card"
              style={{ width: "90%", height: "100%", borderRadius: "5%" }}
            >
              <img src={Img1} className="card-img-top" />
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{
                    marginTop: "-15px",
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Customer Relationship
                </h5>
                <p
                  className="card-text"
                  style={{
                    fontSize: "12px",
                    textAlign: "center",
                  }}
                >
                  Some quick example
                </p>
                <a
                  href="#"
                  className="btn btn-success"
                  style={{
                    background: "#21e287",
                    color: "#002365",
                  }}
                >
                  know more
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div
              className="card"
              style={{ width: "90%", height: "100%", borderRadius: "5%" }}
            >
              <img src={Img1} className="card-img-top" />
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{
                    marginTop: "-15px",
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Customer Relationship
                </h5>
                <p
                  className="card-text"
                  style={{
                    fontSize: "12px",
                    textAlign: "center",
                  }}
                >
                  Some quick example
                </p>
                <a
                  href="#"
                  className="btn btn-success"
                  style={{
                    background: "#21e287",
                    color: "#002365",
                  }}
                >
                  know more
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div
              className="card"
              style={{ width: "90%", height: "100%", borderRadius: "5%" }}
            >
              <img src={Img1} className="card-img-top" />
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{
                    marginTop: "-15px",
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Customer Relationship
                </h5>
                <p
                  className="card-text"
                  style={{
                    fontSize: "12px",
                    textAlign: "center",
                  }}
                >
                  Some quick example
                </p>
                <a
                  href="#"
                  className="btn btn-success"
                  style={{
                    background: "#21e287",
                    color: "#002365",
                  }}
                >
                  know more
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div
              className="card"
              style={{ width: "90%", height: "100%", borderRadius: "5%" }}
            >
              <img src={Img1} className="card-img-top" />
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{
                    marginTop: "-15px",
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Customer Relationship
                </h5>
                <p
                  className="card-text"
                  style={{
                    fontSize: "12px",
                    textAlign: "center",
                  }}
                >
                  Some quick example
                </p>
                <a
                  href="#"
                  className="btn btn-success"
                  style={{
                    background: "#21e287",
                    color: "#002365",
                  }}
                >
                  know more
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div
              className="card"
              style={{ width: "90%", height: "100%", borderRadius: "5%" }}
            >
              <img src={Img1} className="card-img-top" />
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{
                    marginTop: "-15px",
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Customer Relationship
                </h5>
                <p
                  className="card-text"
                  style={{
                    fontSize: "12px",
                    textAlign: "center",
                  }}
                >
                  Some quick example
                </p>
                <a
                  href="#"
                  className="btn btn-primary"
                  style={{
                    background: "#21e287",
                    color: "#002365",
                  }}
                >
                  know more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid3;
