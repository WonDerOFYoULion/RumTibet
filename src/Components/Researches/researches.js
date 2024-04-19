import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import './researches.scss'
import play from '../../Img/icons/Play.svg'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'
import { EffectCreative, Autoplay } from 'swiper/modules';


const Researches = () => {

  const isMobile = useMediaQuery({ maxWidth: 800 });

  return ( 
    <div className="research-holder">

      <div className='research-holder-left'>

        {isMobile ? (
          <div className='swiper'> 
            <div className='research-holder-slide2 slide-hover'>
              <Link target='_blank' to={'https://youtu.be/FiU29CHsQpo?si=kH7wbZfmjmzQH_nj'}>
                <img className='play-icon' src={play} alt="play" />
              </Link>
            </div>
          </div>

        ) : (
          <Swiper className='swiper'
          grabCursor={true}
          loop={true}
          modules={[EffectCreative, Autoplay]}
          autoplay={{
            delay: 5000,
            pauseOnMouseEnter: true
          }}
          effect='creative'
          creativeEffect={{
            next:{
              translate:[-130, -130, 0]
            },
            prev: {
              translate:[-130, -130, 0]
            }
          }}
        >
            <SwiperSlide className='research-holder-slide1 slide-hover'>
              <Link target='_blank' to={'https://youtu.be/FiU29CHsQpo?si=kH7wbZfmjmzQH_nj'}>
                <img className='play-icon' src={play} alt="play" />
              </Link>
            </SwiperSlide>

            <SwiperSlide className='research-holder-slide2 slide-hover'>
              <Link target='_blank' to={'https://youtu.be/FiU29CHsQpo?si=kH7wbZfmjmzQH_nj'}>
                <img className='play-icon' src={play} alt="play" />
              </Link>
            </SwiperSlide>

          </Swiper>
        )}
      </div>

      <div className="research-holder-right">
        <h2 className='research-holder-h2'>о нашем походе</h2>
        <h1 className='research-holder-h1'>Исследуйте все горные массивы мира вместе с нами</h1>
        <p className='research-holder-p'>
          Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur"и занялся его поисками в классической латинской литературе.
        </p>
        <Link to={'/dum'} className='research-holder-button'>Программа тура</Link>
      </div>

    </div>
   );
}
 
export default Researches;