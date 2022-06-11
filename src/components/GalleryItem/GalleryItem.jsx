import {useState} from 'react'

function GalleryItem({photo, newGalleryItem}){
const [isImageFlipped, setImageFlipped] = useState(true)

const onHandleClick =() =>{
newGalleryItem(photo.id);
}

const toggleImage = () =>{
    setImageFlipped(!isImageFlipped);
};


return (
    <>
<div className="photo" key={photo.id}>
 {isImageFlipped ?
    <>
    <img src={photo.path} onClick={()=> toggleImage(photo.id)}></img>
    <p className="likes"><button onClick={()=>newGalleryItem(photo.id)}>♡</button>likes:{photo.likes}</p>
    </>
    :
    <>
    <p className= "description" onClick={()=>toggleImage(photo.id)}>{photo.description}</p>
    <p className="likes"><button onClick={()=>newGalleryItem(photo.id)}><span>love</span></button>likes:{photo.likes}</p>
    
  </> }
 </div>
 </>

)
}

export default GalleryItem;