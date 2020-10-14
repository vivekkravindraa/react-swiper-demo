import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Thumbs, Controller } from 'swiper';
import 'swiper/swiper-bundle.css';
import './App.css';

SwiperCore.use([ Navigation, Pagination, Thumbs, Controller ]);

function App() {
  const [ thumbsSwiper, setThumbsSwiper ] = useState(null);
  const [ controlledSwiper, setControlledSwiper ] = useState(null);

  const slides = [];

  for(let i = 0; i < 5; i++) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li" style={{ listStyleType: 'none' }}>
        <img src={`https://picsum.photos/id/${i+1}/500/300`} alt={`Slide ${i}`}
          style={{ width: '-webkit-fill-available' }}
        />
      </SwiperSlide>
    )
  }

  const thumbs = [];

  for(let i = 0; i < 5; i++) {
    thumbs.push(
      <SwiperSlide key={`thumb-${i}`} tag="li" style={{ listStyleType: 'none' }}>
        <img src={`https://picsum.photos/id/${i+1}/163/100`} alt={`Slide ${i}`}
          style={{ width: '-webkit-fill-available' }}
        />
      </SwiperSlide>
    )
  }

  const slides2 = [];

  for(let i = 4; i < 10; i++) {
    slides2.push(
      <SwiperSlide key={`slide-${i}`} tag="li" style={{ listStyleType: 'none' }}>
        <img src={`https://picsum.photos/id/${i+1}/500/300`} alt={`Slide ${i}`}
          style={{ width: '-webkit-fill-available' }}
        />
      </SwiperSlide>
    )
  }

  return <React.Fragment>
    <Swiper
      id="main"
      tag="section"
      wrapperTag="ul"
      navigation
      pagination
      thumbs={{ swiper: thumbsSwiper }}
      controller={{ control: controlledSwiper }}
      spaceBetween={0}
      slidesPerView={1}
      onInit={(swiper) => console.log(swiper, 'Swiper initialized')}
      onSlideChange={(swiper) => console.log(swiper, 'Slide index changed to: ', swiper.activeIndex)}
      onReachEnd={(swiper) => console.log(swiper, 'Swiper end reached')}
    >
      {slides}
    </Swiper>

    <Swiper
      id="thumbs"
      spaceBetween={5}
      slidesPerView={3}
      onSwiper={setThumbsSwiper}
    >
      {thumbs}
    </Swiper>

    <Swiper id="controller" onSwiper={setControlledSwiper}>
      {slides2}
    </Swiper>
  </React.Fragment>
}

export default App;
