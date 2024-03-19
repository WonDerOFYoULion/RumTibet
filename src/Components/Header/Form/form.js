import './form.scss'
import arrow from '../../../Img/icons/Arrow-down.png'
import { useState } from 'react';



const Form = () => {

  const citis = [
    {name: 'qg8iot7ltul', id: 1},
    {name: 'wlukljl0y9;y', id: 2},
    {name: 'e0-jk,g,hjmvh', id: 3},
    {name: 'rchgnbnngujmg', id: 4}
  ]

  return ( 
    <>
      <form className="form">

        <div className='form-block'>

          <div className='input'>
            <select className='location' name="" id="">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <label htmlFor="">выберите из списка</label>

        </div>
        
        <div className='form-block'>
          <div className='input'>
            <input className='date' type="date" placeholder='Дата похода'/>
          </div> 
          <label htmlFor="">укажите диапазон</label>
        </div>

        <div className='form-block'> 
          <div className='input'>
            <select className='participants' placeholder='Участники'>
              <option value="1">4</option>
              <option value="2">5-7</option>
              <option value="3">7-9</option>
              <option value="4">10</option>
            </select>
            {/* <img src={arrow} alt="arrow" /> */}
          </div>
          <label htmlFor="">минимум 4 человека</label>
        </div>

        <button className='form-button'>Найти программу</button>
      </form>
    </>
   );
}
 
export default Form;