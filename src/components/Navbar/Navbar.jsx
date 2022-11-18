import Proptypes from 'prop-types';
import CartWidget from '../CartWidget';
import './Navbar.css';

const Navbar = ({logo, menues}) =>{
    return(
        // <div className='navbar'>
        //     <img className="navbar__logo" src={logo} alt="logo" />
        //     <div className='navbar__menues'>
        //         {
        //             menues.map((menu, index) => {
        //                 return <a href="#" className="navbar__menu" key={index}>{menu}</a>
        //             })
        //         }
        //         <CartWidget></CartWidget>
        //     </div>
        // </div>
        <div className='navbar__all'>
            <nav className="navbar-expand-lg bg-light">
                <div className="container-fluid navbar">
                    <a className="navbar-brand" href="#"><img className="navbar__logo" src={logo} alt="logo" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav navbar__menues">
                            {
                                menues.map((menu, index) => {
                                    return (
                                        <div key={index}>
                                            <li className="nav-item navbar__menu">
                                                <a className="nav-link active" aria-current="page" href="#">{menu}</a>
                                            </li>
                                        </div>
                                    )
                                })
                            }
                            {/* <li class="nav-item navbar__menu">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item  navbar__menu">
                                <a class="nav-link" href="#">Nosotros</a>
                            </li>
                            <li class="nav-item navbar__menu">
                                <a class="nav-link" href="#">Contacto</a>
                            </li>
                            <li class="nav-item dropdown navbar__menu">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Libros
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Ficción</a></li>
                                    <li><a class="dropdown-item" href="#">Infantiles</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
            <CartWidget></CartWidget>
        </div>
    )
}

Navbar.proptype = {
    menues: Proptypes.array.isRequired
}

export default Navbar;