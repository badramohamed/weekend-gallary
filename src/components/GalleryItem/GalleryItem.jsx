import Axios from "axios";
import {useState} from 'react'

function GalleryItem({photo, newGalleryItem}){
const [imageFlipped, setImageFlipped] = useState(true)
const onHandleClick =() =>{
newGalleryItem(photo.id);
}
const toggleImage = () =>{
    setImageFlipped(!imageFlipped)
}


return(
<>










</>


)


}

export default GalleryItem;