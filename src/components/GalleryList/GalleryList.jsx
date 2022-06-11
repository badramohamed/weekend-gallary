import GalleryItem from '../GalleryItem/GalleryItem'


// calling our iinformation by key, photo and newgalleryitem which is my 'PUT' function
function GalleryList({galleryList, newGalleryItem}) {

    return (
        <ul>
        {galleryList.map(photo =>{
            return < GalleryItem
            key={photo.id}
            photo={photo}
            newGalleryItem={newGalleryItem}
            />
        })}
        </ul>
    ) 

}
export default GalleryList;