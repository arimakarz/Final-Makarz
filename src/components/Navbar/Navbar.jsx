import {Link} from 'react-router-dom';
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
                    <Link className="navbar-brand" to="/"><img className="navbar__logo" src={logo} alt="logo" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav navbar__menues">
                            {
                                menues.map((menu) => {
                                    return (
                                        <div key={menu.id}>
                                            <li className="nav-item navbar__menu">
                                                <Link className="nav-link active" aria-current="page" to={menu.url}>{menu.text}</Link>
                                            </li>
                                        </div>
                                    )
                                })
                            }
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