import { useContext, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { doc, addDoc, collection, getFirestore, updateDoc, Timestamp } from 'firebase/firestore';
import swal from 'sweetalert';
import './Cart.css';

const Cart = () => {
    const { listaProductos, removeItem, clearCart } = useContext(CartContext);
    const [cartItems, setCartItems] = useState(listaProductos);

    const [buyersName, setBuyersName] = useState();
    const [buyersSurname, setBuyersSurname] = useState();
    const [buyersPhone, setBuyersPhone] = useState();
    const [buyersMail, setBuyersMail] = useState();

    const [idCompra, setIdCompra] = useState('');

    const db = getFirestore();

    const handlerChangeName = (event) => {
        setBuyersName(event.target.value);
    }

    const handlerChangeSurname = (event) => {
        setBuyersSurname(event.target.value);
    }

    const handlerChangePhone = (event) => {
        setBuyersPhone(event.target.value);
    }

    const handlerChangeMail = (event) => {
        setBuyersMail(event.target.value);
    }

    function datosValidos(){
        if (buyersName && buyersSurname && buyersPhone && buyersMail && listaProductos){
            return true;
        }else{
            return false;
        }
    }

    const sendOrder = () => {
        debugger
        const sonValidos = datosValidos();
        if (sonValidos == true){
            const itemsBD = [];
            let montoTotal = 0;
            listaProductos.map((producto)=>{
                const itemBD = {
                    id: producto.item.id,
                    title: producto.item.titulo,
                    quantity: producto.quantity,
                    price: producto.item.precio
                }
                montoTotal += producto.item.precio * producto.quantity;
                itemsBD.push(itemBD);
            })

            const order = {
                buyer: {
                    name: buyersName,
                    surname: buyersSurname,
                    phone: buyersPhone,
                    email: buyersMail
                },
                items: itemsBD,
                total: montoTotal,
                fecha : Timestamp.now()
            }

            const ordersCollection = collection(db, 'orders');
            addDoc(ordersCollection, order).then(({id}) => setIdCompra(id));

            updateStock();
            clearCart();
        }else{
            swal("Oops! ¡Tu pedido no ha sido registrado!", "Corrobora tus datos y tu compra por favor.", "error");
        }
    };

    const updateStock = () => {
        listaProductos.map((producto) => {
            const orderDoc = doc(db, 'items', producto.item.id.toString());
            updateDoc(orderDoc, {stock: producto.item.stock - producto.quantity }).then(res => res)
        })
    }

    const handlerRemoveItem = (id) => {
        removeItem(id);
        setCartItems(listaProductos);
    }

    const handlerEmptyCart = () => {
        debugger
        if (listaProductos.length > 0){
            clearCart();
            setCartItems(listaProductos);
        }else{
            swal("Carrito vacío", "No tienes productos en tu carrito de compras.", "error");
        }
    }

    return (
        //Si se registró muestra cartel de éxito. Si aún no se registró, muestra el detalle.
        (idCompra != '') ? 
            <div className='compraExitosa'>
                <h2>¡Gracias por comprar en Milan Libros!</h2>
                <p>Su pedido ha sido registrado y está siendo procesado.</p>
                <p>Su número de orden es {idCompra}</p>
            </div>
        :
        <div>
            <div className='cart'>
                <div className='cart__buyersData'>
                    <h3 className='cart__title'>Datos personales</h3>
                    <fieldset className='cart__buyer'>
                        <div>
                            <label className='cart__label'>Nombre:</label>
                            <input id='buyersName' onChange={handlerChangeName} type="text" />
                        </div>
                        <div>
                            <label className='cart__label'>Apellido:</label>
                            <input id='buyersName' onChange={handlerChangeSurname} type="text" />
                        </div>
                        <div>
                            <label className='cart__label'>Dirección:</label>
                            <input id='buyerAddress' onChange={handlerChangeMail} type="text" />
                        </div>
                        <div>
                            <label className='cart__label'>Teléfono:</label>
                            <input id='buyerPhone' onChange={handlerChangePhone} type="text" />
                        </div>
                    </fieldset>
                </div>
                {/* Validación: que haya ítems en la compra */}
                <div className='cart__items'>
                    <h2 className='cart__title'>Carrito de compras</h2>
                    {cartItems && cartItems.map((producto) => {
                        return(
                            <div>
                                <div className='cartItem' key={producto.item.id}>
                                    <img src={producto.item.imagen} className='cartItem__image' alt='No disponible'/>
                                    <p className='cartItem__title'>{producto.item.titulo}</p>
                                    <p className='cartItem__author'>{producto.item.autor}</p>
                                    <p className='cartItem__quantity'>{producto.quantity}</p>
                                    <p className='cartItem__price'>$ {(producto.item.precio).toFixed(2)}</p>
                                    <p className='cartItem__price'>$ {(producto.item.precio * producto.quantity).toFixed(2)}</p>
                                    <button className='cartItem__btnRemove' id={producto.item.id} onClick={(e)=>handlerRemoveItem(e.target.id)}>Remove item</button>
                                </div>
                                <hr />
                            </div>
                        )})
                    }
                    <p className='cartItem__TotalPrice'>Precio final: $ {listaProductos.reduce((acum, val)=> acum + (val.item.precio * val.quantity), 0).toFixed(2)}</p>
                    <div className='controls'>
                        <button className='btnClear' onClick={(()=>handlerEmptyCart())}>Vaciar carrito</button>
                        <button className='btnFinalizar' onClick={()=>sendOrder()}>Generar orden de compra</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;