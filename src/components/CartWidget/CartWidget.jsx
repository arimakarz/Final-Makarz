import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import './CartWidget.css';
import Logo from '../../assets/images/cart.png';

const CartWidget = () =>{

    const { listaProductos, itemsInCart } = useContext(CartContext);
    const [countItems, setCountItems] = useState(0);

    const isFull = {
        opacity: 100
    }

    const isEmpty = {
        opacity: 0
    }

    useEffect(() => {
        setCountItems(itemsInCart());
    }, [listaProductos])

    return(
        <div className="cartWidget" style={(countItems > 0) ? isFull : isEmpty}>
            <Link to="/cart">
                <div className='cartWidget__items'>
                    <img src={Logo} className="cart__image" alt="cart"/>
                    <label className="cart__items">{itemsInCart()}</label>
                </div>
                <p>¡Listo!</p>
            </Link>
        </div>
    )
}

export default CartWidget;