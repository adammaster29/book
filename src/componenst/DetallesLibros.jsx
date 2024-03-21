import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const DetallesLibros = ({ cartilla,email }) => {
    const { id } = useParams();
    const navigate = useNavigate()
    const detal = cartilla.find((detal) => detal.id === parseInt(id));
  const descarga = detal?.libro.pdf;
    const descargar = ()=>{
    if (email === null) {
        alert("para descargar primero registrate");
    }else{descarga};
   }
const regresar = ()=>{
    navigate('/libros');
}
    return (
        <div className='padre__detalles'>
                 
                <img className='hijo__img' src={detal?.image.url} alt="" />

            <div className='hijo__descargar'>
                <h1 className='titulo__Detalles'>{detal?.titulo}</h1>
                <p className='texto__detalles'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate eveniet perferendis voluptatibus magnam totam? Asperiores, assumenda. Atque cupiditate mollitia, eos illo corrupti vitae laudantium aspernatur fugiat, fugit voluptate error beatae. In corrupti deserunt omnis tempore soluta consequatur esse sequi earum, numquam laudantium sed dolor est ea quod dolore quidem, mollitia, modi eveniet!
                    In esse temporibus earum obcaecati minima enim, culpa reprehenderit dolorem cumque, tempore voluptates tenetur perspiciatis saepe unde non nemo repellendus dolore quisquam inventore. Quas ab culpa voluptatem consectetur quod distinctio.</p>
                    
                <div className='btn__contenedor-detalles'>
                    <a className='descarga btn-detail' href={descarga} target='_blank'><span>Descargar</span></a>
                    <span onClick={regresar} className='regresar btn-detail'><span>Regresar</span></span>
                    </div>
                </div>
        </div>
    );
};

export default DetallesLibros;