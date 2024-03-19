import { Link } from "react-router-dom";
import './footerEnd.scss'

const FooterEnd = () => {
  return ( 
    <div className="footer-end-holder">
      <p>ИП Константинопольский К.К., 2023</p>
      <Link className="politics">Политика обработки персональных данных</Link>
    </div>
   );
}
 
export default FooterEnd;