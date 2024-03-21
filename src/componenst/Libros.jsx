import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
const Libros = ({ cartilla, email }) => {
    const navigate = useNavigate()
    const [pagina, setPagina] = useState(1)
    const [navb, setnNavb] = useState()
    // btn amburguesa 
    const amburguesa = () => {
        setnNavb(!navb)
    }
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
    const castellano = cartilla.slice(0, 8);
    const matematicas = cartilla.slice(8, 16);
    const naturales = cartilla.slice(16, 24);
    return (
        // className="hijo__navbar"
        <div className='padre__hijo'>
            <i onClick={amburguesa} className='bx bx-menu bx-flip-vertical' ></i>
            <ul className={navb ? "cambio" : " hijo__navbar"} >
                <img className='mariposa__libros-navbar' src="/img/gif/Mariposa.gif" alt="" />
                <li onClick={() => cambioPaina(1)}>Matematicas</li>
                <li onClick={() => cambioPaina(2)}>Castellano</li>
                <li onClick={() => cambioPaina(3)}>Naturales</li>
                <li>Quimicas</li>
                <li>Sociales</li>
                <li>Fisica</li>
                <li>Ingles</li>
            </ul>
            <div className="hijo__libros">
                <div className="buscador__libros">
                    <input type="text" placeholder='Buscador de libros' className="input__libros " /><span onClick={inicio} className='nombre__registro'>{email ? `${email}` : `registrarse`}</span>
                </div>
                {pagina === 1 && (<h2 className="titulo__libro">Hola!!, Bienvenidos A Matematicas</h2>)}
                {pagina === 2 && (<h2 className="titulo__libro">Hola!!, Bienvenidos A Castellano</h2>)}
                {pagina === 3 && (<h2 className="titulo__libro">Hola!!, Bienvenidos A Naturales</h2>)}
                {/* PAGINA DOS MATEMATICAS */}
                {pagina === 1 && (
                    <div className="contenedor__libros">
                        {
                            matematicas.map(book => (
                                <div className='portada__de-libro'>

                                    {/* <h2 className='titulo__libro'>{book.titulo}</h2> */}
                                    <img onClick={() => rutaDetalles(book.id)} className='img__book' src={book.image.url} alt="img" />
                                </div>

                            ))
                        }


                    </div>
                )
                }
                {/* PAGINA UNO CASTELLANO */}
                {pagina === 2 && (
                    <div className="contenedor__libros">
                        {
                            castellano.map(book => (
                                <div className='portada__de-libro'>


                                    <img onClick={() => rutaDetalles(book.id)} className='img__book' src={book.image.url} alt="img" />
                                </div>

                            ))
                        }


                    </div>
                )
                }
                 {/* PAGINA UNO naturales */}
                 {pagina === 3 && (
                    <div className="contenedor__libros">
                        {
                            naturales.map(book => (
                                <div className='portada__de-libro'>


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