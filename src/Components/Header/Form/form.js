import './form.scss'
import arrow from '../../../Img/icons/Arrow-down.png'
import { useState } from 'react';



const Form = () => {

  const [active, setActive] = useState(false);
  const [gorod, setGorod] = useState('');
  const [help, setHelp] = useState(false);
  let [meh, setMeh] = useState([]);


  const citis = [
    {name: 'qg8iot7ltul', id: 1},
    {name: 'wlukljl0y9;y', id: 2},
    {name: 'e0-jk,g,hjmvh', id: 3},
    {name: 'rchgnbnngujmg', id: 4}
  ]

  const changeGorod = (event) => {
    setGorod(event.target.value);
    setMeh(citis.filter(city => city.name.toLowerCase().startsWith(gorod.toLowerCase())));
    setHelp(true)
  }

  const setcity = (name) => {
    setGorod(name);
    setActive(false);
  }

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
            <input className='participants' type="text" placeholder='Участники'/>
            <img src={arrow} alt="arrow" />
          </div>
          <label htmlFor="">минимум 4 человека</label>
        </div>
        <button className='form-button'>Найти программу</button>
      </form>

      {/* <div className="test">

        <div onClick={() => setActive(!active)} className="test-input">
          <input 
            type="text"
            value={gorod}
            onChange={changeGorod}
           />
          <img src={arrow} alt="arrow" />
        </div>

        <div className="list" style={{ opacity: active ? '1' : '0'}}>
          <ul>
            {help ? meh.map(city => ( // отображаем meh, если help равно true
              <li key={city.id} onClick={() => setcity(city.name)}>{city.name}</li>
            )) : citis.map(city => ( // отображаем обычный список городов, если help равно false
              <li key={city.id} onClick={() => setcity(city.name)}>{city.name}</li>
            ))}
          </ul>
        </div>

      </div> */}
    </>
   );
}
 
export default Form;