import React from 'react';
import './App.css';
import Axios from 'axios';
import {useState, useEffect} from 'react';
import '../GalleryItem/GalleryItem'

function App() {
let [gallerList, setGallery] =useState([]);

useEffect(()=>{
fetchGallery();
}, []);

const fetchGallery =()=>{
 Axios.get('/gallery')
    .then((response)=>{
      setGallery(response.data);
      console.log('gallery list is:', response.data);
    })
    .catch((err)=>{
      console.log('error in get', err)
    })

  };










    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of Badra's Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
    
      </div>
    );

    }
export default App;
