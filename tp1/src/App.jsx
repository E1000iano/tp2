import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './style.css'; 
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer />} />
      <Route path='/Cerveza/:categoriaId' element={<ItemDetailContainer />} />
      <Route path='/Cart' element={<Cart />} />
      <Route path='/detalle/detalleId' element={<ItemDetailContainer />} />
    </Routes>
    </BrowserRouter>
    </>
    
  );
}
export default App;
