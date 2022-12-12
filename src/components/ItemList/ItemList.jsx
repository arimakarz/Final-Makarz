import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ItemList.css'; 
import Item from '../Item';

const ItemList = ({listas}) => {
      
    const {categoryId} = useParams();
    const [hasBeenResolved, setHasBeenResolved] = useState(false);
    const [itemsList, setItemsList] = useState();

    // const taskGetAll = new Promise((resolved) => {
    //     setTimeout(() => {
    //         setItemsList(listas);
    //         resolved(listas);
    //     }, 2000);
    //   });
    
    // function isResolved(res) {
    //     setHasBeenResolved(true);
    // }

    // useEffect(() => {
    //     taskGetAll
    //         .then(isResolved)
    // }, [])
    
    // if (hasBeenResolved){
        return (
            <div>
                <div>
                {listas
                ? <div className='itemList'>
                    {
                        
                        listas.map((oneItem)=>{
                            
                            // if(categoryId){
                            //     if(categoryId === oneItem.categoriaId){
                            //         console.log(oneItem.titulo);
                            //         return(
                            //             //<Link to={`/item/${oneItem.id}`}><Item key={oneItem.id} element={oneItem}></Item></Link>
                            //             <Item key={oneItem.id} element={oneItem}></Item>
                            //         )        
                            //     }
                            // }else{
                                return(
                                    //<Link to={`/item/${oneItem.id}`}><Item key={oneItem.id} element={oneItem} onClick={(e)=>{callItem({oneItem})}}></Item></Link>
                                    <Item key={oneItem.id} element={oneItem}></Item>
                                )
                            // }
                        })
                    }
                    </div>
                    : <p className='itemList__advert'>Cargando...</p>}
                </div>
            </div>
        )
    // }
}

export default ItemList;