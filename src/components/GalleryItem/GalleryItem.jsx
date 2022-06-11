import {useState} from 'react'

function GalleryItem({photo, newGalleryItem}){
const [isImageFlipped, setImageFlipped] = useState(true)


// toggleimage will be in charge of flipping our image so we can see the description
const toggleImage = () =>{
    setImageFlipped(!isImageFlipped);
};

//  the return statement which is using ternaries (if else statements)
return (
    <>
<div className="photo" key={photo.id}>
 {isImageFlipped ?
    <>
    <img src={photo.path} width={300} height={300}onClick={()=> toggleImage(photo.id)}></img>
    <p className="likes"><button onClick={()=>newGalleryItem(photo.id)}>♡</button>:{photo.likes}</p>
    </>
    :
    <>
    <p className= "description" onClick={()=>toggleImage(photo.id)}>{photo.description}</p>
    <p className="likes"><button onClick={()=>newGalleryItem(photo.id)}><span>loved</span></button>:{photo.likes}</p>
    
  </> }
 </div>
 </>

)
}

export default GalleryItem;