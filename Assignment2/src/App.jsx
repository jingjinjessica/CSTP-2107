import {useRoutes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import './App.css';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  let element = useRoutes([
    {
      path: '/',
      element:<HomePage/>
    },
    {
      path: '/detail/:flagName',
      element:<DetailPage/>
    },
    {
      path:'*',
      element:<NotFoundPage/>
    }
  ])
  return element;
}

export default App
