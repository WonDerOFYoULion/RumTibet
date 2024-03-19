import Guide from '../../Components/Guide/guide'
import Directions from '../../Components/Popular directions/directions';
import './aboutguide.scss'
const AboutGuide = () => {
  return ( 
    <div className='guide'>
      <Guide></Guide>
      <Directions></Directions>
    </div>
   );
}
 
export default AboutGuide;