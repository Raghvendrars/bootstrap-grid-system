import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ImgOne from "./images/img-1.jpg";
import ImgTwo from "./images/img-2.jpg";
import ImgThree from "./images/img-3.jpg";
import ImgFour from "./images/img-4.jpg";
import ImgFive from "./images/img-5.jpg";
import ImgSix from "./images/img-6.jpg";
import ImgSeven from "./images/img-7.jpg";
import ImgEight from "./images/img-8.jpg";
import ImgNine from "./images/img-9.jpg";
import ImgTen from "./images/img-10.jpg";
import ImgEleven from "./images/img-11.jpg";
import ImgTwelve from "./images/img-12.jpg";
const Home = () => {
  return (
    <div className="container-fluid">
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Bootstrap Grid System</h1>
          <p class="lead">
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent and Created by Raghav.
          </p>
        </div>
      </div>
      <div className="wrapper">
        <div className="row p-1 mt-3">
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            <img src={ImgOne} width="250" height="auto" className="card-img" />
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            <img src={ImgTwo} width="250" height="auto" className="card-img" />
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            <img
              src={ImgThree}
              width="250"
              height="auto"
              className="card-img"
            />
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            <img src={ImgFour} width="250" height="auto" className="card-img" />
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            <img src={ImgFive} width="250" height="auto" className="card-img" />
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            <img src={ImgSix} width="250" height="auto" className="card-img" />
          </div>
        </div>
        <div className="row p-1 mt-3">
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            <img
              src={ImgSeven}
              width="250"
              height="auto"
              className="card-img"
            />
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            <img
              src={ImgEight}
              width="250"
              height="auto"
              className="card-img"
            />
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            <img src={ImgNine} width="250" height="auto" className="card-img" />
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            <img src={ImgTen} width="250" height="auto" className="card-img" />
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            <img
              src={ImgEleven}
              width="250"
              height="auto"
              className="card-img"
            />
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            <img
              src={ImgTwelve}
              width="250"
              height="auto"
              className="card-img"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 mt-5 text-sm-center">
            Created by @RaghavSingh
        </div>
      </div>
    </div>
  );
};

export default Home;
