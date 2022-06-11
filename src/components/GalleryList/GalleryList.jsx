import GalleryItem from '../GalleryItem/GalleryItem'

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