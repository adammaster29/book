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
    const learn_english = () => {
        navigate(`/learn`);
    }
    const castellano = cartilla.slice(0, 8);
    const matematicas = cartilla.slice(8, 16);
    const naturales = cartilla.slice(16, 24);
    const quimica = cartilla.slice(24, 32);
    const ingles = cartilla.slice(32, 40);
    return (
        // className="hijo__navbar"
        <div className='padre__hijo'>
            <i onClick={amburguesa} className='bx bx-menu bx-flip-vertical' ></i>
            <ul className={navb ? "cambio" : " hijo__navbar"} >
                <img className='mariposa__libros-navbar' src="/img/gif/lapiz.gif" alt="" />
                <li onClick={() => cambioPaina(1)}>Math</li>
                <li onClick={() => cambioPaina(2)}>spanish</li>
                <li onClick={() => cambioPaina(3)}>Biology</li>
                <li onClick={() => cambioPaina(4)}>Chemistry</li>
                <li onClick={() => cambioPaina(5)}>English</li>
                {/* <li   onClick={learn_english}>Learn English</li>  */}
                {/* <li>Fisica</li>  */}
            </ul>
            <div className="hijo__libros">
                <div className="buscador__libros">
                    <input type="text" placeholder='Buscador de libros' className="input__libros " /><span onClick={inicio} className='nombre__registro'>{email ? `${email}` : `Register`}</span>
                </div>
                {pagina === 1 && (<h2 className="titulo__libro">Hello!!, Welcome to Math</h2>)}
                {pagina === 2 && (<h2 className="titulo__libro">Hello!!, Welcome to spanish</h2>)}
                {pagina === 3 && (<h2 className="titulo__libro">Hello!!, Welcome to Biology</h2>)}
                {pagina === 4 && (<h2 className="titulo__libro">Hello!!, Welcome to Chemistry</h2>)}
                {pagina === 5 && (<h2 className="titulo__libro">Hello!!, Welcome to English</h2>)}
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
                 {/* PAGINA cuatro quimica */}
                 {pagina === 4 && (
                    <div className="contenedor__libros">
                        {
                            quimica.map(book => (
                                <div className='portada__de-libro'>


                                    <img onClick={() => rutaDetalles(book.id)} className='img__book' src={book.image.url} alt="img" />
                                </div>

                            ))
                        }


                    </div>
                )
                }
                 {/* PAGINA cuatro quimica */}
                 {pagina === 5 && (
                    <div className="contenedor__libros">
                        {
                            ingles.map(book => (
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