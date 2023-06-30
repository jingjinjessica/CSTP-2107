import { useState } from "react";
import { useRoutes } from 'react-router-dom'
import './App.css'
import GlobalContext from './context/GlobalContext'
import DetailPage from './pages/DetailPage'
import HomePage from './pages/HomePage'
import FavoritePage from './pages/FavoritePage'
import NotFoundPage from './pages/NotFoundPage'
import { Bottom } from "./components/Bottom"
import Box from '@mui/material/Box'

function App() {
  const [favoriteData, setFavoriteData] = useState([])
  const [detailData, setDetailData] = useState([])
  let element = useRoutes([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/detail',
      element: <DetailPage />
    },
    {
      path: '/favorite',
      element: <FavoritePage />
    },
    {
      path: "*",
      element: <NotFoundPage />
    }
  ])

  return <GlobalContext.Provider
    value={{
      detailData,
      favoriteData,
      setDetailData,
      setFavoriteData
    }}
  >
    <Box
      sx={{
        pb: { xs: "56px", md: "0" }
      }}
    >
      {element}
    </Box>
    <Bottom />
  </GlobalContext.Provider>;
}

export default App
