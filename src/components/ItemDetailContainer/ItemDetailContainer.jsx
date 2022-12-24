import { doc, getDoc, getFirestore, query, where } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ItemDetail from '../ItemDetail';
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {

    const [oneItem, setOneItem] = useState();
    let checked = false;
    const {id} = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemRef = doc(db, "items", id);
        getDoc(itemRef).then(snapshot =>{
            if(snapshot.exists()){
                setOneItem({id: id, ...snapshot.data()});
                checked = true;
            }
        })
    }, [id])

    return (
        (oneItem) ?
        <div className='itemDetailContainer'>
            <ItemDetail item={oneItem}/>
        </div>
        :
        <div className='itemDetail__noItem'>
            <h3>¡Oh! Producto inexistente.</h3>
            <p>Disculpa los inconvenientes.</p>
            <Link to="/libros"><button>Volver</button></Link>
        </div>
    )
}

export default ItemDetailContainer;
