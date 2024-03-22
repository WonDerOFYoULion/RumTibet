import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/swiper-bundle.css'

import './impressions.scss'

//ТК нет сервера с картинками, а относительные пути реакт не понимает, приходится делать костыли
import pic1 from '../../Img/Impressions1.png'
import pic2 from '../../Img/Impressions2.png'
import pic3 from '../../Img/Impressions3.png'
import pic4 from '../../Img/Impressions4.png'
import pic5 from '../../Img/Impressions5.png'
import pic6 from '../../Img/Impressions6.png'


const Impressions = () => {

  const [sizeChange, setSizeChange] = useState(false);

  const impressions = [
    {id: 1, img: pic1, gridType: 'grid-type-one'},
    {id: 2, img: pic2, gridType: 'grid-type-two'},
    {id: 3, img: pic3, gridType: 'grid-type-two'},
    {id: 4, img: pic4, gridType: 'grid-type-two'},
    {id: 5, img: pic5, gridType: 'grid-type-one'},
    {id: 6, img: pic6, gridType: 'grid-type-two'},
  ]

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 910) {
        setSizeChange(true);
      } else {
        setSizeChange(false);
      }
    }

    handleResize();

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  },[]);

  return ( 
    <div className='impressions-holder'>
      <h2 className='impressions-holder-h2'>фото-отчет</h2>
      <h1 className='impressions-holder-h1'>Делимся впечатлениями</h1>

      {sizeChange ? (
        <Swiper className='impressions-swiper'
          slidesPerView={'auto'}
          loop={true}
          spaceBetween={24}
          centeredSlides={true}
        >
          {impressions.map((photo) => (
          <SwiperSlide className={`impressions-swiper-slide`} key={photo.id} style={{
            backgroundImage: `url(${photo.img})`,
          }}>
            <svg className='close-up' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.0002 21.0002L16.6572 16.6572M16.6572 16.6572C17.4001 15.9143 17.9894 15.0324 18.3914 14.0618C18.7935 13.0911 19.0004 12.0508 19.0004 11.0002C19.0004 9.9496 18.7935 8.90929 18.3914 7.93866C17.9894 6.96803 17.4001 6.08609 16.6572 5.34321C15.9143 4.60032 15.0324 4.01103 14.0618 3.60898C13.0911 3.20693 12.0508 3 11.0002 3C9.9496 3 8.90929 3.20693 7.93866 3.60898C6.96803 4.01103 6.08609 4.60032 5.34321 5.34321C3.84288 6.84354 3 8.87842 3 11.0002C3 13.122 3.84288 15.1569 5.34321 16.6572C6.84354 18.1575 8.87842 19.0004 11.0002 19.0004C13.122 19.0004 15.1569 18.1575 16.6572 16.6572ZM11.0002 8.00021V14.0002M8.00021 11.0002H14.0002" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </SwiperSlide>
        ))}
        </Swiper>
      ) : (
        <div className='impressions-grid'>
        {impressions.map((photo) => (
          <Link className={`${photo.gridType} photo-grid-el`} key={photo.id} style={{
            backgroundImage: `url(${photo.img})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}>
            <svg className='close-up' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.0002 21.0002L16.6572 16.6572M16.6572 16.6572C17.4001 15.9143 17.9894 15.0324 18.3914 14.0618C18.7935 13.0911 19.0004 12.0508 19.0004 11.0002C19.0004 9.9496 18.7935 8.90929 18.3914 7.93866C17.9894 6.96803 17.4001 6.08609 16.6572 5.34321C15.9143 4.60032 15.0324 4.01103 14.0618 3.60898C13.0911 3.20693 12.0508 3 11.0002 3C9.9496 3 8.90929 3.20693 7.93866 3.60898C6.96803 4.01103 6.08609 4.60032 5.34321 5.34321C3.84288 6.84354 3 8.87842 3 11.0002C3 13.122 3.84288 15.1569 5.34321 16.6572C6.84354 18.1575 8.87842 19.0004 11.0002 19.0004C13.122 19.0004 15.1569 18.1575 16.6572 16.6572ZM11.0002 8.00021V14.0002M8.00021 11.0002H14.0002" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        ))}

        </div>
      )}

      <Link to={'https://ru.pinterest.com/'} target='_blank' className='impressions-holder-button'>Наш pinterest</Link>
    </div>
  );
}
 
export default Impressions;

