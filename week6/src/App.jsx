import { useEffect, useState } from 'react';
import {useRoutes} from 'react-router-dom';
import PhotoList from './components/PhotoList';
import  PhotoContext from './context/PhotoContext';
import './App.css'
import HomePage from './pages/HomePage';
import FavoritePage from './pages/FavoritePage';

function App() {
  // let element = useRoutes([
  //   {
  //     path:'/',
  //     element:<HomePage/>
  //   },
  //   {
  //     path:'/Favorite',
  //     element:<FavoritePage/>
  //   }
  // ])
  
  const CLIENT_SECRET = `h-wHyPBeHzum1NAUJ2Ce8IEIQX_0IrJ-aGKBOmrLAfQ`;
  const [photosData, setPhotosData] = useState([]);

  useEffect(() => {
    getPhotoFromSplash();
  },[])
  const getPhotoFromSplash = async() =>
  {
    const  photoDataPromise = await fetch(`https://api.unsplash.com/photos/?client_id=${CLIENT_SECRET}`);
    const photoJsonData = await photoDataPromise.json();
    const requiredData = photoJsonData.map((data) => {
      return {
        image: data.urls.full,
        description: data.alt_description,
        isFavorite: false,
        id: data.id,
      };
    });
    setPhotosData(requiredData);
  };
  
  return (
    <PhotoContext.Provider
      value={{
        photosData,
        setPhotosData,
      }}
    >
      <PhotoList />
       
    </PhotoContext.Provider>
   
  );
}

export default App
