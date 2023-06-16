import PhotoList from './components/PhotoList';
import  PhotoContext from './context/PhotoContext';
import './App.css'

function App() {
  const CLIENT_SECRET = 'phzmbaBs1ZA70b22uh8xGZkFMLG6KLqnZBUQ4Yb8eqk';
  useEffect(() => {
    getPhotoFromSplash();
  },[])
  const getPhotoFromSplash = async() =>
  {
    const photoData = fetch('https://api.unsplash.com/photos/?client_id=${phzmbaBs1ZA70b22uh8xGZkFMLG6KLqnZBUQ4Yb8eqk}')
  }
  return (
    <PhotoContext.Provider value>
      <PhotoList />

      
    </PhotoContext.Provider>
  )
}

export default App
