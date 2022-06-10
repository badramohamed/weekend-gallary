import Axios from "axios"
import {useState} from 'react'

function GalleryItem({gallery,fetchGallery}) {
    // const [imageFlip, setImageFlip]= useState(false);
    const addLikes = ()=>{
    console.log(gallery)
        Axios.put(`/gallery/likes/${id}`)
        .then(response=>{
            console.log('put working');
            fetchGallery();
        })
        .catch(err=>{
            console.log('error in put');
        })
    }
return(
    
<>

helloo
</>

)






}



export default GalleryItem 