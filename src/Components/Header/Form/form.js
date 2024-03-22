import './form.scss'
import arrow from '../../../Img/icons/Arrow-down.png'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Form = () => {

  const citis = [
    {name: 'qg8iot7ltul', id: 1},
    {name: 'wlukljl0y9;y', id: 2},
    {name: 'e0-jk,g,hjmvh', id: 3},
    {name: 'rchgnbnngujmg', id: 4}
  ]

  const [resize, setResize] = useState(false);

  useEffect(() => {

    const handelResize = () => {
      if (window.innerWidth <= 1150 ) {
        setResize(true);
      } else {
        setResize(false)
      }
    }

    handelResize();

    window.addEventListener('resize', handelResize);
    return () => window.removeEventListener('resize', handelResize)
  },[]);

  return ( 
    <div className='form-holder'>
      <h1 className="header-h1">Насладись прогулкой в горах с командой единомышленников</h1>
      {resize ? 
      (
        <Link className='form-link'>Найти программу</Link>
      ):(
        <form className="form">

            <div className='location form-block'>

            <div className='input'>
              <p className='place-holder'>Локация для тура</p>
              <img src={arrow} alt="arrow" />
            </div>
            <p className='label'>выберите из списка</p>

            </div>

            <div className='date form-block'>
            <div className='input'>
              <p className='place-holder'>Дата похода</p>
              <img src={arrow} alt="arrow" />
            </div> 
            <p className='label'>укажите диапазон</p>
            </div>

            <div className='participants form-block'> 
            <div className='input'>
              <p className='place-holder'>Участники</p>
              <img src={arrow} alt="arrow" />
            </div>
            <p className='label'>минимум 4 человека</p>
            </div>

            <button type='submit' className='form-button'>Найти программу</button>

        </form>
      )}
    </div>
   );
}
 
export default Form;