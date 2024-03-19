import { Link } from "react-router-dom";
import logo from '../../../Img/Logo.png'
import './navbar.scss'

const Navbar = () => {
  return ( 
    <div className="navbar-holder">
      <img src={logo} alt="Logo" />
      <nav>
        <ul className="navbar-body">
          <li><Link to={'/'}>Главная</Link></li>
          <li><Link to={'/guide'}>Про гида</Link></li>
          <li><Link>Программа тура</Link></li>
          <li><Link>Стоимость</Link></li>
          <li><Link>Блог</Link></li>
          <li><Link>Контакты</Link></li>
        </ul>
      </nav>
      <Link className="navbar-con-but">Консультация</Link>
    </div>
   );
}
 
export default Navbar
