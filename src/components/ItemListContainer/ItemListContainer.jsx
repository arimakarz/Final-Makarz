
import { Link } from 'react-router-dom';
import './ItemListContainer.css';
import ItemList from '../ItemList';
//import Item from '../Item/Item';

const ItemListContainer = ({greeting}) => {

    const listaLibros = [
        {id: 1, titulo: "Cuentos cortos para ir a dormir", autor: "Disney", categoriaId: 4, precio: 2199.99, imagen:"https://contentv2.tap-commerce.com/cover/large/9789877978254_1.jpg?id_com=1113"},
        {id: 2, titulo: "Nunca", autor: "Ken Follet", categoriaId: 1, precio: 9200, imagen:'https://contentv2.tap-commerce.com/cover/large/9789506445959_1.jpg?id_com=1113'},
        {id: 3, titulo: "El tiempo de las moscas", autor: "Claudia Piñeiro", categoriaId: 1, precio: 3999, imagen:"https://contentv2.tap-commerce.com/cover/large/9789877389753_1.jpg?id_com=1113", resumen: "Inés sale en libertad, después de quince años presa por haber asesinado a Charo, la amante de su ex marido. Su vida ha cambiado, pero así también la sociedad: el avance del feminismo, las leyes de matrimonio igualitario y del aborto, el lenguaje inclusivo. Inés, una ama de casa tradicional y a quien la maternidad no le resultó algo feliz, entiende que debe ser práctica y adaptarse a la nueva realidad. Aunque le cueste. Se asocia con la única amiga que hizo dentro de la cárcel, la Manca, y ponen una empresa doble: ella se ocupa de hacer fumigaciones y su socia de investigar como detective privada. Como unas Thelma y Louise del conurbano, Inés y la Manca enfrentan situaciones complicadas, con el deseo de reinventarse. Hasta que, inesperadamente, una de las clientas de Inés, la Señora Bonar, le propone un intercambio muy inquietante; como salida de las tinieblas del pasado, la propuesta puede inclinar la balanza peligrosamente hacia el lado desfavorable. Pero también puede cambiarles la vida. La crítica ha dicho... «He terminado de leer Catedrales, una novela de Claudia Piñeiro que me ha tenido tres días totalmente enganchado. Me pregunto si hay una posible adaptación para el cine.» Pedro Almodóvar, director de cine «La novela negra del año... Lo tiene todo. Apuesta literaria, crítica social, grandes temas. » Juan Carlos Galindo, Babelia - El País sobre Catedrales «Breve y elegante... una lacerante crónica sobre la relación madre e hija, la humillación de la burocracia, la responsabilidad en el cuidado de los otros y las imposiciones del dogma religioso en las mujeres.» New York Times sobre Elena sabe «Sus libros suelen proporcionarnos muy fecundos cruces entre niveles narrativos diferentes: en Las maldiciones está la ficción política pero también un nivel absolutamente íntimo que tiene que ver con la paternidad.» Eduardo Sacheri «Las viudas de los jueves es una novela ágil y un análisis implacable de un microcosmos social en acelerado proceso de decadencia.» José Sar"},
        {id: 4, titulo: "La lista del juez", autor: "John Grisham", categoriaId: 1, precio: 5799, imagen:"https://contentv2.tap-commerce.com/cover/large/9789506446420_1.jpg?id_com=1113"},
        {id: 5, titulo: "El presidente que no quiso ser", autor: "Silvia Mercado", categoriaId: 3, precio: 3700, imagen:"https://contentv2.tap-commerce.com/cover/large/9789504977674_1.jpg?id_com=1113"},
        {id: 6, titulo: "Dibu Martinez", autor: "Emiliano Martinez", categoriaId: 4, precio: 3499, imagen:"https://contentv2.tap-commerce.com/cover/large/9789878940182_1.jpg?id_com=1113"},
        {id: 7, titulo: "Encuentra tu persona vitamina", autor: "Marian Rojas Estape", categoriaId: 2, precio: 3500, imagen:"https://contentv2.tap-commerce.com/cover/large/9789508523334_1.jpg?id_com=1113"},
        {id: 8, titulo: "Todo va a mejorar", autor: "Almudena Grandes", categoriaId: 1, precio: 4800, imagen:"https://contentv2.tap-commerce.com/cover/large/9789876707343_1.jpg?id_com=1113", resumen: "España en un futuro próximo. Un nuevo partido político llamado Movimiento Ciudadano Soluciones Ya! ha arrasado en las elecciones. Quien lo dirige en la sombra es un empresario de éxito que propugna que el Consejo de Ministros funcione como un consejo de administración, y que tiene proyectos ambiciosos para arreglar el país. Tras la alarma de una ola de vandalismo, formará un nuevo cuerpo de Vigilantes, tras un Gran Apagón creará un acceso ilimitado a internet, y, ante las dificultades, estimulará la libertad de compras y consumo. Todas ellas serán medidas extraordinarias porque el país se enfrenta a nuevas formas de pandemia que exigen velar ante todo por la seguridad. 'La seguridad es salud. Lasalud es vida. La vida es seguridad'. Solo un grupo de mujeres y hombres corrientes se atreverán adesmontar las mentiras del nuevo régimen en el que todo aparenta mejorar, cuando en realidad se vive bajo los abusos de poderosos sin escrupulos. Novela coral de anticipación política que tiene lo mejor de Los besos en el pan y la intriga de los resistentes de los 'Episodios de una Guerra Interminable', la última novela de Almudena Grandes es sobre todo una galería inolvidable de personajes, que van contando su experiencia de adaptación a un país que ha sufrido fuertes sacudidas y en el que no quieren resignarse. El legado de una gran narradora que logra de nuevo emocionarnos y despertar conciencias. La última novela de Almudena Grandes. En un mundo perfecto de felicidad obligatoria, denunciar la mentira puede costarte la vida."},
        {id: 9, titulo: "Somos nosotros", autor: "Willy Kohan", categoriaId: 3, precio: 7999, imagen:"https://contentv2.tap-commerce.com/cover/large/9789500767903_1.jpg?id_com=1113"},
        {id: 10, titulo: "Personas decentes", autor: "Leonardo Padura", categoriaId: 1, precio: 4900, imagen:"https://contentv2.tap-commerce.com/cover/large/9789876707213_1.jpg?id_com=1113"},
        {id: 11, titulo: "Historias de la Belle Epoque", autor: "Daniel Balmaceda", categoriaId: 1, precio: 4099, imagen: "https://contentv2.tap-commerce.com/cover/large/9789500767897_1.jpg?id_com=1113", resumen: "Este libro es una invitación a recorrer los espléndidos años dorados de la Belle ‰poque argentina. De las últimas décadas del siglo XIX al Centenario de la Revolución de Mayo, en 1910, y los años previos a la Primera Guerra Mundial. Una época de gran prosperidad, cuando el porvenir era esperanza y desarrollo. Tiempos de inmigración masiva; de inicio del ocio, de la gastronomía, del transporte y de mujeres que, por primera vez, se animaban a reclamar sus derechos. Espiamos el diario de Delfina Bunge y sus observaciones de quienes iban a misa, asistimos a un baile de fin de año, presenciamos el primer llamado telefónico, la aparición de los autos eléctricos, el miedo frente al primer vuelo en avión y el caso cero de una temible vuelta de la fiebre amarilla. ¿Cómo eran los dandis por esos días? ¿Cuántos años tenía el niño que quiso matar a Roca? ¿Cómo desbarató José Hernández una edición trucha del Martín Fierro? Decenas de casos de emprendedores que armaron un imperio con una máquina rudimentaria en un sótano: de Fort a Rigolleau. Historias nacidas de la incansable búsqueda que Daniel Balmaceda realiza desde hace años en periódicos, revistas y documentos inéditos de todo tipo, para descubrir y rearmar las piezas perdidas de nuestra historia."}
        ];
    
        localStorage.setItem("listaLibros", JSON.stringify(listaLibros));

    const listaCategorias = [
        {id:1, nombre:'Ficcion'},
        {id:2, nombre:'Salud'},
        {id:3, nombre:'Comunicación'},
        {id:4, nombre:'Infantil'}
    ];

    return(
        <div>
            <div className='listContainer'>
                <h1 className="listContainer__saludo">{greeting}</h1>
                <h3 className='listContainer__categorias'>Categorías</h3>
                {
                    listaCategorias.map((categoria)=>{
                        return(
                            <div className="listContainer__categoriasList">
                                <Link to={`/category/${categoria.id}`}>{categoria.nombre.toUpperCase()}</Link>
                            </div>
                        )
                    })
                }
                <hr />
                <ItemList listas={listaLibros}></ItemList>
            </div>
        </div>
    )
}
export default ItemListContainer;