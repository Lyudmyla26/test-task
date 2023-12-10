import {  Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import FavoritePage from './pages/FavoritePage';
import Layot from './components/Laoyt';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={ <Layot/>}>
    <Route index element={<HomePage/>} />
    <Route path="catalog" element={<CatalogPage/>} />
        <Route path='favorites' element={<FavoritePage />} />
        </Route>
  </Routes>
  )
}
export default App;
