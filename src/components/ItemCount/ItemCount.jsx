import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { useState, useEffect } from 'react';
import './ItemCount.css';

const ItemCount = ({id}) => {
    const [contador, setContador] = useState(0);
    const [stock, setStock] = useState(5)
    const { productos, addItem } = useContext(CartContext);
    //const [isInCart, setIsInCart] = useState(false);

console.log(productos)

    useEffect(() => {
        const productoExistente = false;
        // if (productos){
        //     productoExistente = productos.find((producto) => producto.id == id);
        // }
        // if (productoExistente){
        //     setIsInCart(true);
        // }else{
        //     setIsInCart(false);
        // }
    }, [productos, id]);

    const setStatus = (operation) => {
        if (operation === '-'){
            if (contador > 0){
                setContador(contador - 1);
            }
        }else{
            if (operation === '+'){
                if (contador < stock){
                    setContador(contador + 1);
                }
            }else{
                setStock(stock - contador);
                setContador(0);
            }
        }
        
    }

    const onAdd = (productoId) => {
        const producto = {id: productoId, quantity: contador};
        console.log(producto)
        addItem(producto);
        // if (!isInCart){
        //     addItem(producto);
        // }else{
        //     removeItem(id);
        //     addItem(producto);
        // } 
    }

    return (
        <div className='container__itemCount'>
            <div className='container__cantidad'>
                <button className='btnCantidad' onClick={()=> setStatus('-')}>-</button>
                <input id="textCantidad" name="cantidad" type="text" placeholder='0' value={contador} onChange={ e => setContador(e.target.value)}/>
                <button className='btnCantidad' onClick={()=> setStatus('+')}>+</button>
            </div>
            {/* <button id="btnAddOn" onClick={()=> setStatus('fin')}>Agregar</button> */}
            <button id={id} onClick={(e)=>onAdd(e.target.id)}>Agregar</button>
        </div>
    )
}

export default ItemCount;