import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css'
import { Grid } from "swiper/modules";

import './blog.scss'
import blog1 from '../../Img/Blog1.png'
import blog2 from '../../Img/Blog2.png'
import blog3 from '../../Img/Blog3.png'
import blog4 from '../../Img/Blog4.png'

const Blog = () => {

  const blogs = [
    {
      id: 1, 
      titel: 'Красивая Италя, какая она в реальности?', 
      body: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.', 
      date: '01/04/2023',
      img: blog1
    },
    {
      id: 2, 
      titel: 'Долой сомнения! Весь мир открыт для вас!', 
      body: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации независимые способы реализации соответствующих условий активизации Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации независимые способы реализации соответствующих условий активизации', 
      date: '01/04/2023',
      img: blog2
    },
    {
      id: 3, 
      titel: 'Как подготовиться к путешествию в одиночку? ', 
      body: 'Для современного мира базовый вектор развития предполагает.', 
      date: '01/04/2023',
      img: blog3
    },
    {
      id: 4, 
      titel: 'Индия ... летим?', 
      body: 'Для современного мира базовый.', 
      date: '01/04/2023',
      img: blog4
    }
  ]

  return ( 
    <div className="blog-holder">
      <h2 className="blog-holder-h2">делимся впечатлениями</h2>
      <h1 className="blog-holder-h1">Блог о путешествиях</h1>

      <Swiper className="blog-swiper"
        modules={[Grid]}
        slidesPerView={'auto'}
        spaceBetween={20}
        centeredSlides={true}
        breakpoints={{
          1180: {
            slidesPerView: 'auto',
            spaceBetween: 24,
            centeredSlides: false,
            grid: {
              fill: 2 | 2,
              rows: 2
            }
          }
        }}
      >
        {blogs.map((blog) => (          
          <SwiperSlide className="blog-slide" key={blog.id}>
            <div className="blog-img-holder">
              <img src={blog.img} alt={blog.titel} />
            </div>
            <div className="blog-slide-inf">
              <h1 className="blog-slide-inf-h1">{blog.titel}</h1>
              <div className="cont-container">
                <p className="blog-slide-inf-p">{blog.body}</p>
              </div>
              <div className="date-and-link">
                <p className="date">{blog.date}</p>
                <Link className="blog-link">Читать статью</Link>
              </div>
            </div>
          </SwiperSlide>
        ))}

      </Swiper>
      <Link className="blog-holder-button">Другие материалы</Link>
    </div>
   );
}
 
export default Blog;
