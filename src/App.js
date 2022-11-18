import Logo from './assets/images/logo.png';
import Navbar from './components/Navbar';
import Layout from './components/Layout';
import ItemListContainer from './components/ItemListContainer';
import './App.css';

function App() {
  const Menu = ['HOME', 'LIBROS', 'CONTACTO'];
  
    return(
        <div>
            <Layout>
                <Navbar logo={Logo} menues={Menu} />
                <ItemListContainer greeting="Bienvenido a Milan Libros" status="Página en construcción" />
            </Layout>
        </div>
    )
}

export default App;
