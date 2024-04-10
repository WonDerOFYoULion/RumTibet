import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css'

import './directions.scss'
import star from '../../Img/icons/Star1.png'
import { useState } from "react";

const Directions = () => {

  const [lakeSwiperClick, setLakeSwiperClick] = useState(false);
  const [nightSwiperClick, setNightSwiperClick] = useState(false);
  const [yogaSwiperClick, setYogaSwiperClick] = useState(false);


  return ( 
    <div className="directions-holder">
      <h2 className="directions-holder-h2">по версии отдыхающих</h2>
      <h1 className="directions-holder-h1">Популярные направления</h1>
      <Swiper className="swiper"
        slidesPerView={'auto'}
        spaceBetween={20}
        loop={false}
        centeredSlides={false}
        breakpoints={{
          500: {
            slidesPerView: 'auto',
            spaceBetween: 20,
            centeredSlides: true,
            initialSlide: 1,
            loop: false
          },
          1180: {
            slidesPerView: 3,
            centeredSlides: false,
            loop: false
          }
        }}
      >

        <SwiperSlide className="swiper-slide">
          <div onClick={() => setLakeSwiperClick(!lakeSwiperClick)} className={`lake swiper-slide-content ${lakeSwiperClick ? 'swiper-slide-content-click' : ''}`}>
          <div className="description-holder">
              
              <div className="name-and-price">
                <div className="name">
                  <h3 className="name-h3">Озеро возле гор</h3>
                  <p className="name-p">романтическое приключение</p>
                </div>
                <div className="price">480$</div>
              </div>

              <div className="description-content">
                <p className="description-p">
                  Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur"и занялся его поисками в классической латинской литературе.
                </p>

                <Link to={'/dum'} className="description-button">Программа тура</Link>
              </div>

            </div>

            <div className="mark">
              <img src={star} alt="star" />
              <p>4.9</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div onClick={() => setNightSwiperClick(!nightSwiperClick)} className={`night swiper-slide-content ${nightSwiperClick ? 'swiper-slide-content-click' : ''}`}>
          <div className="description-holder">
            <div className="name-and-price">
              <div className="name">
                <h3 className="name-h3">Ночь в горахр</h3>
                <p className="name-p">в компании друзей</p>
              </div>
              <div className="price">500$</div>
            </div>

            <div className="description-content">
            <p className="description-p">
              Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur"и занялся его поисками в классической латинской литературе.
            </p>

            <Link to={'/dum'} className="description-button">Программа тура</Link>
            </div>

            </div>

            <div className="mark">
            <img src={star} alt="star" />
            <p>4.5</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
            <div onClick={() => setYogaSwiperClick(!yogaSwiperClick)} className={`yoga swiper-slide-content ${yogaSwiperClick ? 'swiper-slide-content-click' : ''}`}>
              <div className="description-holder">

                <div className="name-and-price">
                  <div className="name">
                    <h3 className="name-h3">Йога в горах</h3>
                    <p className="name-p">для тех, кто забоится о себе</p>
                  </div>
                  <div className="price">230$</div>
                </div>

                <div className="description-content">
                <p className="description-p">
                  Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur"и занялся его поисками в классической латинской литературе.
                </p>

                <Link to={'/dum'} className="description-button">Программа тура</Link>
                </div>

              </div>

              <div className="mark">
                <img src={star} alt="star" />
                <p>5.0</p>
              </div>
            </div>
        </SwiperSlide>

      </Swiper>
      <Link to={'/dum'} className="directions-holder-button">Рейтинг направлений</Link>

    </div>
    
   );
}
 
export default Directions;