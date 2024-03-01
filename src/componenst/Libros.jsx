import React from 'react';
import { useNavigate } from 'react-router-dom';
import {  useState } from 'react'
const Libros = ({ cartilla,email }) => {
    const navigate = useNavigate()
    const [pagina, setPagina] = useState(1)
    // cambio de pagina
    const cambioPaina = (option) => {
        setPagina(option);
    }
    // ruta detalles
    const rutaDetalles = (id) => {
        navigate(`/detalles/${id}`);
    }

    const inicio = () => {
        navigate(`/`);
    }

    return (
        <div className='padre__hijo'>
      
            <ul className="hijo__navbar">
            <img className='mariposa__libros-navbar' src="/img/gif/Mariposa.gif" alt="" />
                <li onClick={() => cambioPaina(1)}>Matematicas</li>
                <li onClick={() => cambioPaina(2)}>Castellano</li>
                <li>Naturales</li>
                <li>Sociales</li>
                <li>Quimicas</li>
                <li>Fisica</li>
                <li>Ingles</li>
            </ul>
            <div className="hijo__libros">
                <div className="buscador__libros">
                    <input type="text" placeholder='Buscador de libros' className="input__libros " /><span onClick={inicio} className='nombre__registro'>{email ? `${email}`:`registrarse`}</span>
                </div>
                {pagina === 1 && (<h2 className="titulo__libro">Hola!!, Bienvenidos A Matematicas</h2>)}
                {pagina === 2 && (<h2 className="titulo__libro">Hola!!, Bienvenidos A Castellano</h2>)}
                  {/* PAGINA UNO MATEMATICA */}
                {pagina === 1 && (
                    <div className="contenedor__libros">
                        {
                            cartilla.map(book => (
                                <div className='portada__de-libro'>

                                    {/* <h2 className='titulo__libro'>{book.titulo}</h2> */}
                                    <img onClick={() => rutaDetalles(book.id)} className='img__book' src={book.image.url} alt="img" />
                                </div>

                            ))
                        }


                    </div>
                )
                }
                {/* PAGINA DOS CASTELLANO */}
                {pagina === 2 && (
                    <div className="contenedor__libros">
                        {
                            cartilla.map(book => (
                                <div className='portada__de-libro'>

                                    {/* <h2 className='titulo__libro'>{book.titulo}</h2> */}
                                    <img onClick={() => rutaDetalles(book.id)} className='img__book' src={book.image.url} alt="img" />
                                </div>

                            ))
                        }


                    </div>
                )
                }
            </div>
        </div>
    );
};

export default Libros;