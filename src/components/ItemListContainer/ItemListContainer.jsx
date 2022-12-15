import { useState, useEffect } from 'react';
import {collection, doc,getDoc,getDocs,getFirestore, query, where} from 'firebase/firestore';
import { useParams, Link } from 'react-router-dom';
import './ItemListContainer.css';
import ItemList from '../ItemList';

const ItemListContainer = ({greeting}) => {

    // const listaLibros = [
    //     {id: 1, titulo: "Cuentos cortos para ir a dormir", autor: "Disney", categoriaId: 4, precio: 2199.99, imagen:"https://contentv2.tap-commerce.com/cover/large/9789877978254_1.jpg?id_com=1113"},
    //     {id: 2, titulo: "Nunca", autor: "Ken Follet", categoriaId: 1, precio: 9200, imagen:'https://contentv2.tap-commerce.com/cover/large/9789506445959_1.jpg?id_com=1113'},
    //     {id: 3, titulo: "El tiempo de las moscas", autor: "Claudia Piñeiro", categoriaId: 1, precio: 3999, imagen:"https://contentv2.tap-commerce.com/cover/large/9789877389753_1.jpg?id_com=1113", resumen: "Inés sale en libertad, después de quince años presa por haber asesinado a Charo, la amante de su ex marido. Su vida ha cambiado, pero así también la sociedad: el avance del feminismo, las leyes de matrimonio igualitario y del aborto, el lenguaje inclusivo. Inés, una ama de casa tradicional y a quien la maternidad no le resultó algo feliz, entiende que debe ser práctica y adaptarse a la nueva realidad. Aunque le cueste. Se asocia con la única amiga que hizo dentro de la cárcel, la Manca, y ponen una empresa doble: ella se ocupa de hacer fumigaciones y su socia de investigar como detective privada. Como unas Thelma y Louise del conurbano, Inés y la Manca enfrentan situaciones complicadas, con el deseo de reinventarse. Hasta que, inesperadamente, una de las clientas de Inés, la Señora Bonar, le propone un intercambio muy inquietante; como salida de las tinieblas del pasado, la propuesta puede inclinar la balanza peligrosamente hacia el lado desfavorable. Pero también puede cambiarles la vida. La crítica ha dicho... «He terminado de leer Catedrales, una novela de Claudia Piñeiro que me ha tenido tres días totalmente enganchado. Me pregunto si hay una posible adaptación para el cine.» Pedro Almodóvar, director de cine «La novela negra del año... Lo tiene todo. Apuesta literaria, crítica social, grandes temas. » Juan Carlos Galindo, Babelia - El País sobre Catedrales «Breve y elegante... una lacerante crónica sobre la relación madre e hija, la humillación de la burocracia, la responsabilidad en el cuidado de los otros y las imposiciones del dogma religioso en las mujeres.» New York Times sobre Elena sabe «Sus libros suelen proporcionarnos muy fecundos cruces entre niveles narrativos diferentes: en Las maldiciones está la ficción política pero también un nivel absolutamente íntimo que tiene que ver con la paternidad.» Eduardo Sacheri «Las viudas de los jueves es una novela ágil y un análisis implacable de un microcosmos social en acelerado proceso de decadencia.» José Sar"},
    //     {id: 4, titulo: "La lista del juez", autor: "John Grisham", categoriaId: 1, precio: 5799, imagen:"S"},
    //     {id: 5, titulo: "El presidente que no quiso ser", autor: "Silvia Mercado", categoriaId: 3, precio: 3700, imagen:"https://contentv2.tap-commerce.com/cover/large/9789504977674_1.jpg?id_com=1113"},
    //     {id: 6, titulo: "Dibu Martinez", autor: "Emiliano Martinez", categoriaId: 4, precio: 3499, imagen:"https://contentv2.tap-commerce.com/cover/large/9789878940182_1.jpg?id_com=1113"},
    //     {id: 7, titulo: "Encuentra tu persona vitamina", autor: "Marian Rojas Estape", categoriaId: 2, precio: 3500, imagen:"https://contentv2.tap-commerce.com/cover/large/9789508523334_1.jpg?id_com=1113"},
    //     {id: 8, titulo: "Todo va a mejorar", autor: "Almudena Grandes", categoriaId: 1, precio: 4800, imagen:"https://contentv2.tap-commerce.com/cover/large/9789876707343_1.jpg?id_com=1113", resumen: "W"},
    //     {id: 9, titulo: "Somos nosotros", autor: "Willy Kohan", categoriaId: 3, precio: 7999, imagen:"https://contentv2.tap-commerce.com/cover/large/9789500767903_1.jpg?id_com=1113"},
    //     {id: 10, titulo: "Personas decentes", autor: "Leonardo Padura", categoriaId: 1, precio: 4900, imagen:"https://contentv2.tap-commerce.com/cover/large/9789876707213_1.jpg?id_com=1113"},
    //     {id: 11, titulo: "Historias de la Belle Epoque", autor: "Daniel Balmaceda", categoriaId: 1, precio: 4099, imagen: "https://contentv2.tap-commerce.com/cover/large/9789500767897_1.jpg?id_com=1113", resumen: "Este libro es una invitación a recorrer los espléndidos años dorados de la Belle ‰poque argentina. De las últimas décadas del siglo XIX al Centenario de la Revolución de Mayo, en 1910, y los años previos a la Primera Guerra Mundial. Una época de gran prosperidad, cuando el porvenir era esperanza y desarrollo. Tiempos de inmigración masiva; de inicio del ocio, de la gastronomía, del transporte y de mujeres que, por primera vez, se animaban a reclamar sus derechos. Espiamos el diario de Delfina Bunge y sus observaciones de quienes iban a misa, asistimos a un baile de fin de año, presenciamos el primer llamado telefónico, la aparición de los autos eléctricos, el miedo frente al primer vuelo en avión y el caso cero de una temible vuelta de la fiebre amarilla. ¿Cómo eran los dandis por esos días? ¿Cuántos años tenía el niño que quiso matar a Roca? ¿Cómo desbarató José Hernández una edición trucha del Martín Fierro? Decenas de casos de emprendedores que armaron un imperio con una máquina rudimentaria en un sótano: de Fort a Rigolleau. Historias nacidas de la incansable búsqueda que Daniel Balmaceda realiza desde hace años en periódicos, revistas y documentos inéditos de todo tipo, para descubrir y rearmar las piezas perdidas de nuestra historia."}
    // ];
    // const listaCategorias = [
    //     {id:1, nombre:'Ficcion'},
    //     {id:2, nombre:'Salud'},
    //     {id:3, nombre:'Comunicación'},
    //     {id:4, nombre:'Infantil'}
    // ];
    
    //localStorage.setItem("listaLibros", JSON.stringify(listaLibros));
    const {categoryId} = useParams();
    const [listaLibros, setListaLibros] = useState([]);
    const [listaCategorias, setListaCategorias] = useState([]);
    let [listaMostrar, setListaMostrar] = useState([]);

    useEffect(()=>{
        const db = getFirestore();
        const categoryCollection = collection(db, 'categorias');
        //const categoryCollection = query(collection(db,'cateogorias', where('name','==','Ficcion')))
        getDocs(categoryCollection).then((result) => {
            setListaCategorias(result.docs.map((doc)=>({id:doc.id,...doc.data()})))
        })
    }, [])

    const categoryFilter = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (categoryId){
                let listaNueva = listaLibros.filter((oneItem) => oneItem.categoriaId == categoryId);
                resolve(listaNueva);
            }else{
                resolve(listaLibros);
            }
        }, 500);
    })

    useEffect(()=>{
        categoryFilter.then((res)=>{
            setListaMostrar(res);
        })
        // const db = getFirestore();
        // if (categoryId){
        //     console.log(categoryId)
        //     const categoryFilter = query(collection(db, 'items', where('categoriaId', '==', {categoryId})));
        //     if (categoryFilter){
        //         getDocs(categoryFilter).then((result) => {
        //             //setListaMostrar(result.docs.map((doc)=>({id:doc.id,...doc.data()})))
        //             console.log(result.data());
        //         })
        //     }else{
        //         console.log("vacia")
        //     }
        // }
    }, [categoryId])

    useEffect(() => {
        const db = getFirestore();
        //Traer producto por id: 
        const itemRef = doc(db, "items", "yScrwNNqtKQWOmQp5PIF");
        getDoc(itemRef).then(snapshot =>{
            if(snapshot.exists()){
                //setListaMostrar([snapshot.data])
                console.log(snapshot.data());
            }
        })

        //Traer todos los registros:
        const itemCollection = collection(db, "items");
        getDocs(itemCollection).then((result) => {
            const listaCompleta =result.docs.map((doc) => ({id:doc.id, ...doc.data()}))
            setListaMostrar(result.docs.map((doc) => ({id:doc.id, ...doc.data()})))
            setListaLibros(listaCompleta);
            console.log(result.docs)
        })
    }, [])

    return(
        <div>
            <div className='listContainer'>
                <h1 className="listContainer__saludo">{greeting}</h1>
                <h3 className='listContainer__categorias'>Categorías</h3>
                {
                    listaCategorias.map((categoria)=>{
                        return(
                            <div key={categoria.id} className="listContainer__categoriasList">
                                <Link key={categoria.id} to={`/category/${categoria.id}`}>{categoria.nombre.toUpperCase()}</Link>
                            </div>
                        )
                    })
                }
                <hr />
                {listaMostrar && <ItemList listas={listaMostrar}></ItemList>}
            </div>
        </div>
    )
}
export default ItemListContainer;