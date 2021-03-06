import React from 'react';
import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import GalleryList from '../GalleryList/GalleryList'; '../GalleryList/GalleryList';
// import GalleryItem from '../GalleryItem/GalleryItem';
// import ImageList from '@mui/material/ImageList';

function App() {
let [galleryList, setGallery] =useState([]);

useEffect(()=>{
fetchGallery();
}, []);

// get that will get our information from our 'DB'
const fetchGallery =()=>{
 axios.get('/gallery')
    .then((response)=>{
      setGallery(response.data);
      console.log('gallery list is:', response.data);
    })
    .catch((err)=>{
      console.log('error in get', err)
    })

  };
// PUT function that will grab by id and represent images in gallery  
  const newGalleryItem= (picId)=>{
      axios({
        method: 'PUT', 
        url: `/gallery/like/${picId}`
      })
      .then((response)=>{
        console.log('in the put', response)
        fetchGallery();
      })
      .catch((err)=>{
        console.log('error in put', err);
  })
  };

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of Badra's Life</h1>
        </header>
        {/* <p>Gallery goes here</p> */}

      {/* gallerylist will append information  */}
    
      {/* <ImageList sx={{ width: 500, height: 450 }}/> */}
      <GalleryList
      galleryList={galleryList}
      newGalleryItem={newGalleryItem} />
      </div>
    );

    }
export default App;
