import React, {Component} from "react";
import Slider from "react-slick";
import "../Styles/slider.css"
import sliderImage from "../Assets/logo.jpeg"
import sliderImage2 from "../Assets/second.jpeg"
import Book1 from "../Assets/book5.jpeg"
import Book2 from "../Assets/Book4.jpeg"
import Book3 from "../Assets/Book 3.jpeg"


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";





function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "green" }}
        onClick={onClick}
      />
    );
  }
  

export default class EbookSlider extends Component {
      render() {
    const settings = {
        dots: true,
        infinite: true,
        // speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        waitForAnimate: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
              slidesToShow: 3,
              slidesToScroll: 1,
              fade: false,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
            //   fade: true,
            //   autoplay: true,
            //   speed: 2000,
            //   autoplaySpeed: 2000,
            //   cssEase: "linear",
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            //   fade: true,
            //   autoplay: true,
            //   speed: 2000,
            //   autoplaySpeed: 2000,
            //   cssEase: "linear",
            }
          }
        ]
      };
      return (
        <div className="slider-container">
            <h2 className="slider-header text-align-center">
                Get My E-Book Now
            </h2>
          <Slider {...settings}>
            <div className="slider-container-box">
                <img className="slider-img" src={Book1} alt="" />


              <button className="slider-buttn">
                Add to cart
              </button>
            </div>


            <div className="slider-container-box">
                <img className="slider-img" src={Book2} alt="" />
                <button className="slider-buttn">
                Add to cart
              </button>
            </div>




            <div className="slider-container-box">
    
                <img className="slider-img" src={Book3} alt="" />
                <button className="slider-buttn">
                Add to cart
              </button>
            </div>
           
          </Slider>
        </div>
      );
  }
  };


