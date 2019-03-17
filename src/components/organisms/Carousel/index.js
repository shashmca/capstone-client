import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.scss'

export default class Carousel extends Component {
  render() {
    let defaultSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: false,
      variableWidth: false
    };
    let { settingParam, heading, carouselSlides, classes } = this.props;
    let settings = settingParam ? settingParam : defaultSettings;

    return (
      <div className={"mt-2 " + classes}>
        {heading ? <h2>{heading}</h2> : ''}
        <Slider {...settings}  >
          {carouselSlides}
        </Slider>
      </div>
    );
  }
}
