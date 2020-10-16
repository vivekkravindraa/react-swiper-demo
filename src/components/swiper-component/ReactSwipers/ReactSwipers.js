import React, {
    useState,
    // useEffect
} from 'react';
// import { useWindowSize } from '../../../utils/useWindowSize';
// import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Thumbs, Controller } from 'swiper';
import 'swiper/swiper-bundle.css';
import './ReactSwipers.scss';

SwiperCore.use([ Navigation, Pagination, Thumbs, Controller ]);

export default function ReactSwipers() {
  // const size = useWindowSize();
  const [ thumbsSwiper, setThumbsSwiper ] = useState(null);
  const [ controlledSwiper, setControlledSwiper ] = useState(null);
  // const [ data, setData ] = useState([]);

  // useEffect(() => {
  //   axios.get(`http://beezeebees.com:7003/stores/5f67bd164ca0e319e9e61668/area/5f87b7168630ec5ce7e1c4c2/sections`)
  //   .then((res) => {
  //     console.log(res.data.data);
  //     setData(res.data.data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })
  // }, []);

  // const banners = [];

  // for(let i = 0; i < data.length; i++) {
  //   console.log('data', data[i], data.length);
  //   banners.push(
  //     <SwiperSlide key={`slide-${i}`} tag="li" style={{ listStyleType: 'none' }}>
  //       <img src={`http://beezeebees.com:7000/api/containers/${data[i].media.media}`} alt={`Slide ${i}`}
  //         style={{ width: '-webkit-fill-available', height: '578px' }}
  //       />
  //     </SwiperSlide>
  //   )
  // }

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
    {/* {data.map((item, index) => {
      return (
        <div key={index}>
          <img src={`http://beezeebees.com:7000/api/containers/${item.media.media}`} alt="noImage" />
        </div>
      )
    })} */}

    {/* <Swiper
      id="top"
      tag="section"
      wrapperTag="ul"
      navigation
      pagination
      spaceBetween={0}
      slidesPerView={1}
      onInit={(swiper) => console.log(swiper, 'Swiper initialized')}
      onSlideChange={(swiper) => console.log(swiper, 'Slide index changed to: ', swiper.activeIndex)}
      onReachEnd={(swiper) => console.log(swiper, 'Swiper end reached')}
      onSwiper={(swiper) => console.log(swiper, 'On Swiper')}
    >
      {banners}
    </Swiper> */}

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
    