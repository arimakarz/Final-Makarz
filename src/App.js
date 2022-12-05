import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Logo from './assets/images/logo.png';
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer'
import Contacto from './pages/Contacto/Contacto';
import './App.css';

function App() {
    const Menu = [
        {
            id: '1',
            url: '/',
            text: 'HOME'
        },
        {
            id: '2',
            url: '/libros',
            text: 'LIBROS'
        },
        {
            id: '3',
            url: '/contacto',
            text: 'CONTACTO'
        }
    ];

    return(
        <BrowserRouter>
            <Navbar logo={Logo} menues={Menu} />
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/libros' element={<ItemListContainer/>}/>
                <Route exact path='/contacto' element={<Contacto/>}/>
                <Route exact path='/category/:categoryId' element={<ItemListContainer/>}></Route>
                <Route exact path='/item/:id' element={<ItemDetailContainer />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
