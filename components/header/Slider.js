import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import styles from "../../styles/Home.module.scss";
import "slick-carousel/slick/slick-theme.css";
import { SliderData } from "../Data";
import { MdArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";

export default function Sliders({ show }) {
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className={styles.sliderIconNext} onClick={onClick}>
        <MdArrowForwardIos
          className="md:mt-[240px] mt-[140px] md:ml-40 ml-10"
          size={30}
        />
      </div>
    );
  }
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className={styles.sliderIconPrev} onClick={onClick}>
        <MdOutlineArrowBackIos
          className="md:mt-[240px] mt-[140px] md:ml-40"
          stroke="white"
          size={30}
        />
      </div>
    );
  }
  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: show,
    slidesToScroll: 1,
    initialSlide: 0,
    appendDots: (dots) => (
      <div
        style={{
          paddingBottom: "50px",
        }}
      >
        <ul key={dots} style={{ margin: "0px" }}>
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="flex items-center text-white justify-center w-4 h-4 border-white border-[1px] rounded-full"></div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {SliderData.map((card, index) => (
        <div key={index} className={styles.slider}>
          <div className={styles.sliderText}>
            <img
              src={card.imgUrl}
              alt={card.title}
              className={styles.sliderImg}
            />
            <div>
              <h3>{card.title}</h3>
            </div>
          </div>
          <p>{card.description}</p>
        </div>
      ))}
    </Slider>
  );
}
