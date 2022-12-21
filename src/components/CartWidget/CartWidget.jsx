import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import './CartWidget.css';
import Logo from '../../assets/images/cart.png';

const CartWidget = () =>{

    const { listaProductos } = useContext(CartContext);
    const [countItems, setCountItems] = useState(0);

    const isFull = {
        opacity: 100
    }

    const isEmpty = {
        opacity: 0
    }

    useEffect(() => {
        debugger
        console.log(listaProductos)
        let totalCount = 0;
        if (listaProductos){
            listaProductos.forEach((element)=>{ totalCount += element.quantity })
            //setCountItems(listaProductos.reduce((acum, element) => acum + element.quantity, 0))
        }
        setCountItems(totalCount);
        console.log(`cantidaD: ${countItems}`);
    }, [listaProductos])

    return(
        <div className="cart" style={(countItems > 0) ? isFull : isEmpty}>
            <Link to="/cart"><img src={Logo} className="cart__image" alt="cart"/>
            <label className="cart__items" htmlFor="">{countItems}</label>Terminar compra</Link>
        </div>
    )

}

export default CartWidget;