import './form.scss'
import arrow from '../../../Img/icons/Arrow-down.png'
import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { OverlayScrollbars } from 'overlayscrollbars';
import 'overlayscrollbars/overlayscrollbars.css'



const Form = () => {

  const citis = [
    {name: 'cityOne', id: 1},
    {name: 'cityTwo', id: 2},
    {name: 'cityThree', id: 3},
    {name: 'cityFour', id: 4},
    {name: 'cityOne', id: 5},
    {name: 'cityTwo', id: 6},
    {name: 'cityThree', id: 7},
    {name: 'cityFour', id: 8},
    {name: 'cityOne', id: 9},
    {name: 'cityOne', id: 10},
    {name: 'cityTwo', id: 11},
    {name: 'cityThree', id: 12},
    {name: 'cityFour', id: 13},
    {name: 'cityOne', id: 14},
    {name: 'cityThree', id: 15},
    {name: 'cityFour', id: 16},
    {name: 'cityOne', id: 17},
    
  ]

  const groups  = [
    {id: 1, title: '4'},
    {id: 2, title: '5-6'},
    {id: 3, title: '7-8'},
    {id: 4, title: '9-10'},
  ] 

  const [resize, setResize] = useState(false);

  const [inputCityState, setInputCityState] = useState(false);
  const [inputGroupState, setInputGroupState] = useState(false);
  const [inputDateState, setInputDateState] = useState(false);
  const [chosenCity, setChosenSity] = useState('')
  const [chosenGroup, setChosenGroup] = useState('')

  let locationRef = useRef(null);
  let locationListRef = useRef(null);
  let dateRef = useRef(null);
  let dateListRef = useRef(null);
  let participantRef = useRef(null);
  let participantsListRef = useRef(null);

  const inputClick = useCallback((event) => {

    if (locationRef.current.contains(event.target)) {
      setInputCityState(!inputCityState);
    } 
    if (locationListRef.current.contains(event.target)) {
      setInputCityState(true);
    } 
    if (!locationListRef.current.contains(event.target) && !locationRef.current.contains(event.target)) {
      setInputCityState(false);
    } 

    if (dateRef.current.contains(event.target)) {
      setInputDateState(!inputDateState);
    } 
    if (dateListRef.current.contains(event.target)) {
      setInputDateState(true);
    } 
    if (!dateListRef.current.contains(event.target) && !dateRef.current.contains(event.target)) {
      setInputDateState(false);
    } 

    if (participantRef.current.contains(event.target)) {
      setInputGroupState(!inputGroupState);
    } 
    if (participantsListRef.current.contains(event.target)) {
      setInputGroupState(true);
    } 
    if (!participantsListRef.current.contains(event.target) && !participantRef.current.contains(event.target)) {
      setInputGroupState(false);
    } 
  }, [inputCityState, inputGroupState, inputDateState])
  

  const pickUpCity = (city) => {
    setChosenSity(city);
  }

  const pickUpGroup = (group) => {
    setChosenGroup(group);
  }

  useEffect(() => {

    const cityScrollBar = OverlayScrollbars(locationListRef.current, {
      overflow: {
        x: 'hidden',
        y: 'scroll'
      }
    });

    const groupsScrollBar = OverlayScrollbars(participantsListRef.current, {
      overflow: {
        x: 'hidden',
        y: 'scroll'
      }
    });

    const handelResize = () => {
      if (window.innerWidth <= 1150 ) {
        setResize(true);
        document.removeEventListener('click', inputClick);
        cityScrollBar.destroy();
        groupsScrollBar.destroy();
      } else {
        setResize(false)
      }
    }

    window.addEventListener('resize', handelResize);
    document.addEventListener('click', inputClick)

    handelResize();

    return () => {
      window.removeEventListener('resize', handelResize);
      document.removeEventListener('click', inputClick);
      cityScrollBar.destroy();
      groupsScrollBar.destroy();
    }
  },[inputCityState, inputGroupState, inputDateState, inputClick]);

  return ( 
    <div className='form-holder'>
      <h1 className="header-h1">Насладись прогулкой в горах с командой единомышленников</h1>
      {resize ? 
      (
        <Link to={'/dum'} className='form-link'>Найти программу</Link>
      ):(
        <form onSubmit={(event) => event.preventDefault()} className="form">

            <div className='location form-block'>

              <div  ref={locationRef} className='input'>
                <input className='place-holder' readOnly type="text" value={chosenCity} placeholder='Выберете место'/>
                <img className='arrow' src={arrow} alt="arrow" style={{transform: inputCityState ? 'rotateZ(180deg)' : 'rotateZ(0deg)'}}/>
              </div>
              <p className='label'>выберите из списка</p>


              <ul ref={locationListRef} className={`input-list ${inputCityState ? 'input-list-visible' : 'input-list-hidden'}`}>
                <div className='flex-for-scroll'>
                  {citis.map((city) => (
                    <li onClick={() => pickUpCity(city.name)} className='list-elememt' key={city.id}>{city.name}</li>
                  ))}
                </div>
              </ul>

            </div>

            <div className='date form-block'>

              <div ref={dateRef} className='input'>
                <p className='place-holder'>Дата похода</p>
                <img src={arrow} alt="arrow" className='arrow' style={{transform: inputDateState ? 'rotateZ(180deg)' : 'rotateZ(0deg)'}} />
              </div> 
              <p className='label'>укажите диапазон</p>

              <ul ref={dateListRef} className={`input-list ${inputDateState ? 'input-list-visible' : 'input-list-hidden'}`}>
                <div className='flex-for-scroll'>
                  <p>IN PROGRESS</p>
                </div>
              </ul>

            </div>

            <div className='participants form-block'>

              <div ref={participantRef} className='input'>
                <input className='place-holder' readOnly type="text" value={chosenGroup} placeholder='Участники'/>
                <img src={arrow} alt="arrow" className='arrow' style={{transform: inputGroupState ? 'rotateZ(180deg)' : 'rotateZ(0deg)'}}/>
              </div>
              <p className='label'>минимум 4 человека</p>

              <ul ref={participantsListRef} className={`input-list ${inputGroupState ? 'input-list-visible' : 'input-list-hidden'}`}>
                <div className='flex-for-scroll'>
                  {groups.map((group) => (
                    <li onClick={() => pickUpGroup(group.title)} className='list-elememt' key={group.id}>{group.title}</li>
                  ))}
                </div>
              </ul>

            </div>

            <button type='submit' className='form-button'>Найти программу</button>

        </form>
      )}
    </div>
   );
}
 
export default Form;