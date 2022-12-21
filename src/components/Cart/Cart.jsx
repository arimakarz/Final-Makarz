import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { doc, addDoc, collection, getFirestore, updateDoc, writeBatch } from 'firebase/firestore';
import './Cart.css';

const Cart = () => {

    const sendOrder = () => {
        const order = {
            buyer: {
                name: 'john',
                phone: '22222',
                email: 'prueba@coder.com'
            },
            items: [{
                id: 'bicicleta',
                quantity: 2000
            }],
            total: 2000
        }

        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order).then(({id}) => alert(id));
    };

    const updateOrder = () => {
        const db = getFirestore();
        const orderDoc = doc(db, 'orders', '2vtkqz884fXmPBfa0wkg');
        updateDoc(orderDoc, {buyer:{name:'juan', phone:'2222', email: 'prueba@coder.com'},total:200}).then(res => alert('actualizado'));
    }

    const batchOrder = () => {
        //Actualizar un lote de datos
        const db = getFirestore();
        const batch = writeBatch(db);
        const orderDoc = doc(db, 'orders', '2vtkqz884fXmPBfa0wkg');
        const orderDoc2 = doc(db, 'orders', '0nH63jpE7yzL2Fr3xBIw');
        
        batch.update(orderDoc,{total:350});
        batch.update(orderDoc2,{total: 199});
        //tambien puedo hacer un batch.set para setear un valor nuevo
        batch.commit().then(res => alert("todo bien"));
    }

    const { listaProductos, removeItem, clearCart } = useContext(CartContext);
    const [cartItems, setCartItems] = useState(listaProductos);

    // useEffect(() => {
    //     setCartItems(listaProductos);
    // })

    // useEffect(() => {
    //     setCartItems(listaProductos);
    // }, [listaProductos])

    const handlerRemoveItem = (id) => {
        removeItem(id);
        setCartItems(listaProductos);
    }

    const handlerEmptyCart = () => {
        clearCart();
        setCartItems(listaProductos);
    }

    return (
        <div>
            <h2 className='cart__title'>Carrito de compras</h2>
            <button className='cartItem_btnClear' onClick={(()=>handlerEmptyCart())}>Vaciar carrito</button>
            <div className='cart'>
                <div>
                    <div className='cart__buyer'>
                        <div>
                            <label className='cart__label'>Nombre:</label>
                            <input id='buyerName' type="text" />
                        </div>
                        <div>
                            <label className='cart__label'>Dirección:</label>
                            <input id='buyerAddress' type="text" />
                        </div>
                        <div>
                            <label className='cart__label'>Teléfono:</label>
                            <input id='buyerPhone' type="text" />
                        </div>
                    </div>
                    { 
                    cartItems && cartItems.map((producto) => {
                        return(
                            <div className='cartItem' key={producto.item.id}>
                                <img src={producto.item.imagen} className='cartItem__image' />
                                <p className='cartItem__title'>{producto.item.titulo}</p>
                                <p className='cartItem__author'>{producto.item.autor}</p>
                                <p className='cartItem__quantity'>{producto.quantity}</p>
                                <button className='cartItem__btnRemove' id={producto.item.id} onClick={(e)=>handlerRemoveItem(e.target.id)}>Remove item</button>
                            </div>
                        )
                    })
                }
                </div>
            </div>
            <button className='btnFinalizar' onClick={()=>sendOrder()}>Generar orden de compra</button>
            <button className='btnFinalizar' onClick={()=>updateOrder()}>Update orden de compra</button>
            <button className='btnFinalizar' onClick={()=>batchOrder()}>Batch orden de compra</button>
        </div>
    )
}

export default Cart;