import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css'

import './directions.scss'
import star from '../../Img/icons/Star1.png'

const Directions = () => {
  return ( 
    <div className="directions-holder">
      <h2 className="directions-holder-h2">по версии отдыхающих</h2>
      <h1 className="directions-holder-h1">Популярные направления</h1>
      <Swiper className="swiper"
        slidesPerView={'auto'}
        spaceBetween={20}
        centeredSlides={true}
        initialSlide={1}
        loop={true}
        breakpoints={{
          830: {
            slidesPerView: 'auto',
            spaceBetween: 20,
            centeredSlides: true,
            initialSlide: 1
          },
          1180: {
            slidesPerView: 3,
            centeredSlides: false
          }
        }}
      >

        <SwiperSlide className="swiper-slide lake">

            <div className="name-and-price-holder">
              <div className="name-and-price">
                <div className="name">
                  <h3 className="name-h3">Озеро возле гор</h3>
                  <p className="name-p">романтическое приключение</p>
                </div>
                <div className="price">480$</div>
              </div>
            </div>

            <div className="mark">
              <img src={star} alt="star" />
              <p>4.9</p>
            </div>

        </SwiperSlide>
        <SwiperSlide className="swiper-slide night">

            <div className="name-and-price-holder">
              <div className="name-and-price">
                <div className="name">
                  <h3 className="name-h3">Ночь в горахр</h3>
                  <p className="name-p">в компании друзей</p>
                </div>
                <div className="price">500$</div>
              </div>
            </div>

            <div className="mark">
              <img src={star} alt="star" />
              <p>4.5</p>
            </div>

        </SwiperSlide>
        <SwiperSlide className="swiper-slide yoga">

            <div className="name-and-price-holder">
              <div className="name-and-price">
                <div className="name">
                  <h3 className="name-h3">Йога в горах</h3>
                  <p className="name-p">для тех, кто забоится о себе</p>
                </div>
                <div className="price">230$</div>
              </div>
            </div>

            <div className="mark">
              <img src={star} alt="star" />
              <p>5.0</p>
            </div>

        </SwiperSlide>

      </Swiper>
      <Link className="directions-holder-button">Рейтинг направлений</Link>
    </div>
   );
}
 
export default Directions;