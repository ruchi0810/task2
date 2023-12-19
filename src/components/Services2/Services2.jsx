import React, { useContext } from "react";
import "./Services2.css";
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
import Cafe from "../../img/cafe.png";

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Services2 = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="services" id="services">
      <div className="container" style={{ margintop: "9rem" }}>
        <div
          className="title"
          style={{ fontSize: "32px", fontWeight: "bold", textAlign: "center" }}
        >
          {" "}
          What type of Restaurant uses RePOS?
        </div>
        <div className="row gy-3 my-3">
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div
              className="card c1"
              style={{
                width: "90%",
                height: "90%",
                borderRadius: "10%",
              }}
            >
              <img src={Pizza} className="card-img-top" />
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{
                    marginTop: "10px",
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Pizza
                </h5>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div
              className="card c1"
              style={{
                width: "90%",
                height: "90%",
                borderRadius: "10%",
              }}
            >
              <img src={Ret} className="card-img-top" />
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{
                    marginTop: "10px",
                    fontSize: "20px",
                    // fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Quick Serve
                </h5>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div
              className="card c1"
              style={{
                width: "90%",
                height: "90%",
                borderRadius: "10%",
              }}
            >
              <img src={Ice} className="card-img-top" />
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{
                    marginTop: "10px",
                    fontSize: "20px",
                    // fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Ice Cream
                </h5>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div
              className="card c1"
              style={{
                width: "90%",
                height: "90%",
                borderRadius: "10%",
              }}
            >
              <img src={B1} className="card-img-top" />
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{
                    marginTop: "10px",
                    fontSize: "20px",
                    // fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Bars and Pubs
                </h5>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div
              className="card c1"
              style={{
                width: "90%",
                height: "90%",
                borderRadius: "10%",
              }}
            >
              <img src={B2} className="card-img-top" />
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{
                    marginTop: "10px",
                    fontSize: "20px",
                    // fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Backery
                </h5>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div
              className="card c1"
              style={{
                width: "90%",
                height: "90%",
                borderRadius: "10%",
              }}
            >
              <img src={FD} className="card-img-top" />
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{
                    marginTop: "10px",
                    fontSize: "20px",
                    // fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Fine Dine
                </h5>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div
              className="card c1"
              style={{
                width: "90%",
                height: "90%",
                borderRadius: "10%",
              }}
            >
              <img src={Ft} className="card-img-top" />
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{
                    marginTop: "10px",
                    fontSize: "20px",
                    // fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Food Truck
                </h5>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div
              className="card c1"
              style={{
                width: "90%",
                height: "90%",
                borderRadius: "10%",
              }}
            >
              <img src={Cafe} className="card-img-top" />
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{
                    marginTop: "10px",
                    fontSize: "20px",
                    // fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Cafe
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services2;
