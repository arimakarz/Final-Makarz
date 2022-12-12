import { useParams, Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = () => {

    const { productos, addItem, removeItem, clear, isInCart } = useContext(CartContext);
    const {id} = useParams();
    
    const listaLibros = JSON.parse(localStorage.getItem("listaLibros"));

    const [oneItem, setOneItem] = useState();
    const [hasBeenResolved, setHasBeenResolved] = useState();

    const callItemDetail = (idLibro) => {
        setOneItem(listaLibros.find((libro)=> libro.id == idLibro));
    }

    const taskGetOne = new Promise((resolved) => {
        setTimeout(() => {
            callItemDetail(id);
            resolved(id)
        }, 1000);
    })

    function isResolved(){
        setHasBeenResolved(true);
    }

    useEffect(()=>{
        taskGetOne
            .then(isResolved)
    });

    const onAdd = (productoId, cantidad) => {
        const producto = {id: productoId, quantity: cantidad};
        console.log(producto);
        addItem(producto);
        console.log(productos)
    }

    if (hasBeenResolved){
        return(
            <div>
                {
                    (oneItem && <div className='oneItem'>
                        <div>
                            <img className='oneItem__imagen' src={oneItem.imagen} alt="No disponible" />
                        </div>
                        <div className='oneItem__data'> 
                            <h2 className='oneItem__titulo'>{oneItem.titulo}</h2>
                            <h4 className='oneItem__autor'>Autor: {oneItem.autor}</h4>
                            <p className='oneItem__precio'>Precio: $ {oneItem.precio}</p>
                            <p className='oneItem__resumen'>Reseña: {oneItem.resumen ? oneItem.resumen : "Información no disponible"}</p>
                            <ItemCount onAdd={onAdd} id={oneItem.id} />
                        </div>
                    </div>
                    )
                }
                <hr className='hr__style'></hr>
                <Link className='oneItem__back' to="/libros"><button>Volver</button></Link>
            </div>
        )
    }
}

export default ItemDetail;