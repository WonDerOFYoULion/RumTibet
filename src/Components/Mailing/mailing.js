import { useState } from 'react';
import './mailing.scss'

const Mailing = () => {

  const [value, setValue] = useState('');

  const change = (event) => {
    setValue(event.target.value);
  }

  const prevent = (event) => {
    event.preventDefault()
    setValue('');
  }

  return ( 
    <div className="mailing-holder">
      <div className="mailing-content">
        <div className="malling-holder-left">
          <h2 className="malling-holder-h2">актуально</h2>
          <h1 className="malling-holder-h1">Получайте полезные рассылки о путешествиях</h1>
        </div>
        <form onSubmit={prevent} className="malling-holder-right">
            <label className='malling-r-label' htmlFor="emale">Введите e-mail адрес</label>
            <div className='input-container'>
              <input className='malling-r-input' onChange={change} value={value} type="email" name='emale' placeholder='name@domain.com'/>
              <button className='malling-r-button' type='submit'>Подписаться на новости</button>
            </div>
            <p className='malling-r-p'>подписываясь на новости, вы автоматически соглашаетесь с условиями обработки персональных данных и правилами рекламных рассылок</p>
        </form>
      </div>
    </div>
  );
}
 
export default Mailing;