import { CartContext } from '../../contexts/CartContext';
import { useContext } from 'react';
import './Cart.css';

const Cart = () => {

    const { productos } = useContext(CartContext);
    console.log(productos)
    return (
        <div>
            <h2 className='cart__title'>Carrito de compras</h2>
            {
                productos.map((producto) => {
                    return(
                        <div key={producto.id}>
                            {producto.id}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Cart;