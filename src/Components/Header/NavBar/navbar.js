import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import logo from '../../../Img/Logo.png'
import logoSvg from '../../../Img/LogoMini.svg'
import './navbar.scss'


const Navbar = () => {

  const menuList = [
    {id: 1, to: '/dum', titel: 'Про гида'},
    {id: 2, to: '/dum', titel: 'Программа тура'},
    {id: 3, to: '/dum', titel: 'Стоимость'},
    {id: 4, to: '/dum', titel: 'Блог'},
    {id: 5, to: '/dum', titel: 'Контакты'}
  ]

  const [resize, setResize] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);

  const openMenu = (event) => {
    setActiveMenu(true);
    event.stopPropagation();
  }

  const closeMenu = () => {
    setActiveMenu(false);
  }

  const closeMenuWin = (event) => {

    if (event.target.classList.contains('menu-svg-holder') || event.target.classList.contains('drop-down-menu')) {
      setActiveMenu(true);
    } else {
      setActiveMenu(false);
    }
  } 

  useEffect(() => {

    const handleResize = () => {
      if (window.innerWidth <= 1037) {
        setResize(true);
      } else {
        setResize(false);
      }
    }

    handleResize();
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('click', closeMenuWin);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('click', closeMenuWin);
    }
  },[activeMenu]);

  return ( 
    <div className="navbar-holder">
      <img src={resize ? logoSvg : logo} alt="Logo" />
      <div className="navbar-and-link">

        {resize ?
        (
          <div className="navigation-for-phones">

            <div className="menu-svg-holder" onClick={openMenu}>
              <svg className="menu-svg" width="22" height="18" viewBox="0 0 22 18" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0.5 1.5C0.5 1.10218 0.658035 0.720645 0.93934 0.43934C1.22064 0.158036 1.60218 0 2 0H20C20.3978 0 20.7794 0.158036 21.0607 0.43934C21.342 0.720645 21.5 1.10218 21.5 1.5C21.5 1.89782 21.342 2.27936 21.0607 2.56066C20.7794 2.84196 20.3978 3 20 3H2C1.60218 3 1.22064 2.84196 0.93934 2.56066C0.658035 2.27936 0.5 1.89782 0.5 1.5ZM0.5 9C0.5 8.60218 0.658035 8.22064 0.93934 7.93934C1.22064 7.65804 1.60218 7.5 2 7.5H20C20.3978 7.5 20.7794 7.65804 21.0607 7.93934C21.342 8.22064 21.5 8.60218 21.5 9C21.5 9.39782 21.342 9.77936 21.0607 10.0607C20.7794 10.342 20.3978 10.5 20 10.5H2C1.60218 10.5 1.22064 10.342 0.93934 10.0607C0.658035 9.77936 0.5 9.39782 0.5 9ZM9.5 16.5C9.5 16.1022 9.65804 15.7206 9.93934 15.4393C10.2206 15.158 10.6022 15 11 15H20C20.3978 15 20.7794 15.158 21.0607 15.4393C21.342 15.7206 21.5 16.1022 21.5 16.5C21.5 16.8978 21.342 17.2794 21.0607 17.5607C20.7794 17.842 20.3978 18 20 18H11C10.6022 18 10.2206 17.842 9.93934 17.5607C9.65804 17.2794 9.5 16.8978 9.5 16.5Z"/>
              </svg>
            </div>

            <div className={`drop-down-menu ${activeMenu ? 'visible' : 'hidden'}` }>
              <svg className="exit-menu" onClick={closeMenu} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z" fill="white"/>
              </svg>

              <ul className="menu-list">
                {menuList.map((menuElement) => (
                  <li className='specific-menu-elemnt-holder' key={menuElement.id}>
                    <Link to={`${menuElement.to}`} className='specific-menu-elemnt'>
                      <svg className='arrow' width="10" height="18" viewBox="0 0 10 18" fill="white" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.7154 8.6098L3.26527 4.15975C3.16235 4.05675 3.02495 4 2.87845 4C2.73195 4 2.59455 4.05675 2.49162 4.15975L2.1639 4.48739C1.95065 4.70089 1.95065 5.04788 2.1639 5.26105L5.90078 8.99793L2.15975 12.739C2.05683 12.842 2 12.9793 2 13.1257C2 13.2723 2.05683 13.4096 2.15975 13.5127L2.48748 13.8402C2.59048 13.9433 2.7278 14 2.8743 14C3.0208 14 3.1582 13.9433 3.26113 13.8402L7.7154 9.38613C7.81857 9.2828 7.87524 9.14484 7.87491 8.99817C7.87524 8.85094 7.81857 8.71305 7.7154 8.6098Z"/>
                      </svg>
                      <p className='specific-service-p'>{menuElement.titel}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        ) 
        : 
        (
          <>
           <nav className="navigation">
             <ul className="navbar-body">
              <li className="navbar-pc-link"><Link to={'/'}>Главная</Link></li>
              {menuList.map((menuEl) => (
                <li key={menuEl.id} className="navbar-pc-link">
                  <Link to={`${menuEl.to}`}><p>{menuEl.titel}</p></Link>
                </li>
              ))}
             </ul>
           </nav>
           <Link to={'/dum'} className="navbar-con-button">Консультация</Link>
          </>
        )}

      </div>
    </div>
   );
}
 
export default Navbar
