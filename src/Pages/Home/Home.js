import './Home.scss'

import Header from '../../Components/Header/header';
import Researches from '../../Components/Researches/researches';
import Programs from '../../Components/Programs/programs';
import Directions from '../../Components/Popular directions/directions';
import Blog from '../../Components/Blog/blog';
import Impressions from '../../Components/Impressions/impressions';
import Mailing from '../../Components/Mailing/mailing';
import Footer from '../../Components/Footer/footer';
import FooterEnd from '../../Components/Footer/FooterEnd/footerEnd';

const Home = () => {
  return ( 
    <div className="home">
      <div className="head for-indent">
        <Header></Header>
      </div>
      <div className='research for-indent'>
        <Researches></Researches>
      </div>
      <div className="programs for-indent">
        <Programs></Programs>
      </div>
      <div className="directions for-indent">
        <Directions></Directions>
      </div>
      <div className='blog for-indent'>
        <Blog></Blog>
      </div>
      <div className='ipressions for-indent'>
        <Impressions></Impressions>
      </div>
      <div className='malling for-indent'>
        <Mailing></Mailing>
      </div>
      <div className='footer-start for-indent'>
        <Footer></Footer>
      </div>
      <div className='footer-end for-indent'>
        <FooterEnd></FooterEnd>
      </div>
    </div>
   );
}
 
export default Home;