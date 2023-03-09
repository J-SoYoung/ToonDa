import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../../styles/homePageStyle.module.scss';

export const CarouselImg = () => {
  const imgArr = [
    {
      id: 1,
      img: '/img/banner1.png',
    },
    {
      id: 2,
      img: '/img/banner2.png',
    },
    {
      id: 3,
      img: '/img/banner3.png',
    },
    {
      id: 4,
      img: '/img/banner4.png',
    },
  ];

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  return (
    <Slider {...settings}>
      {imgArr.map((a) => {
        return <img src={a.img} key={a.id} className={styles.carousel} />;
      })}
    </Slider>
  );
};
