import { useEffect, useState } from 'react';
import './App.css';
import PhotoContext from './context/PhotoContext';
import{BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import FavoritePage from './pages/FavoritePage';
import Nav from './components/Nav';

function App() {
  const CLIENT_SECRET = `h-wHyPBeHzum1NAUJ2Ce8IEIQX_0IrJ-aGKBOmrLAfQ`;
  const [photosData, setPhotosData] = useState([]);

  useEffect(() => {
    getPhotosFromSplash();
  }, []);

  const getPhotosFromSplash = async () => {
    const photoDataPromise = await fetch(
      `https://api.unsplash.com/photos/?client_id=${CLIENT_SECRET}`
    );
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
    <Router>
      <Nav />
      <PhotoContext.Provider
        value={{
          photosData,
          setPhotosData,
        }}>

          <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/favorite' element={<FavoritePage/>}></Route>
          </Routes>
      </PhotoContext.Provider>
    </Router>
    
  );
}

export default App;
