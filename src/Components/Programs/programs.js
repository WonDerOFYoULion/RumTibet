import './programs.scss';
import { Link } from 'react-router-dom';

import price from '../../Img/icons/Price.png'
import guide from '../../Img/icons/Guide.png'
import security from '../../Img/icons/Security.png'
import programs from '../../Img/Programs.png'

const Programs = () => {
  return ( 
    <div className='programs-holder'>
      <div className='programs-holder-left'>

        <h2 className='programs-holder-h2'>наше предложение</h2>
        <h1 className='programs-holder-h1'>Лучшие программы для тебя</h1>
        <p className='programs-holder-p'>
          Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа.
        </p>

        <div className='merit'>
          <img src={guide} alt="guide" />
          <div>
            <h2>Опытный гид</h2>
            <p>Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.</p>
          </div>        
        </div>

        <div className='merit'>
          <img src={security} alt="security" />
          <div>
            <h2>Безопасный поход</h2>
            <p>Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.</p>
          </div>
        </div>

        <div className='merit'>
          <img src={price} alt="pride" />
          <div>
            <h2>Лояльные цены</h2>
            <p>Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.</p>
          </div>
        </div>

        <Link className='programs-holder-button'>Стоимость программ</Link>

      </div>
      <div className='programs-holder-right'>
        <img  src={programs} alt="programs" />
      </div>
    </div>
  );
}
 
export default Programs;