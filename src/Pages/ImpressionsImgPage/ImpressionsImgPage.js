import { useParams } from "react-router-dom";
import './ImpressionsImgPage.scss'

import pic1 from '../../Img/Impressions1Large.jpg'
import pic2 from '../../Img/Impressions2Large.jpg'
import pic3 from '../../Img/Impressions3Large.png'
import pic4 from '../../Img/Impressions4Large.jpg'
import pic5 from '../../Img/Impressions5Large.jpg'
import pic6 from '../../Img/Impressions6Large.jpg'


const ImpressionsImgPage = () => {
  const {photoId} = useParams();

  // так как массив я не фетчу, а отдельный файл для него делать лень, оставлю так

  const impressPhoto = [
    {id: 1, img: pic1},
    {id: 2, img: pic2},
    {id: 3, img: pic3},
    {id: 4, img: pic4},
    {id: 5, img: pic5},
    {id: 6, img: pic6},
  ]

  const imageSelection = impressPhoto.find(photo => photo.id === parseInt(photoId));

  return ( 
    <div className="img-and-description">
      <div className="img">
        {imageSelection && <img src={imageSelection.img} alt="pic" />}
      </div>
      <p className="description">{`Впечатления + картирнка номер ${imageSelection.id}` }</p>
    </div>
   );
}
 
export default ImpressionsImgPage;