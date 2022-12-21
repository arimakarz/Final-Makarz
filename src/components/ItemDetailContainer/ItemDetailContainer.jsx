import { collection, doc, getDoc, getFirestore, query, where } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail';

const ItemDetailContainer = () => {

    const [oneItem, setOneItem] = useState();
    const {id} = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemRef = doc(db, "items", id);
        getDoc(itemRef).then(snapshot =>{
            if(snapshot.exists()){
                setOneItem({id: id, ...snapshot.data()});
            }
        })
    }, [id])

    return (
        <div className='itemDetailContainer'>
            <ItemDetail item={oneItem}/>
        </div>
    )
}

export default ItemDetailContainer;
