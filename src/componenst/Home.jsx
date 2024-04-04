
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({traerName}) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
useEffect(()=>{
  traerName(email)
},[email])

  const handleRegister = () => {
    // Realiza la lógica de registro

    // Simulación: Si los campos no están vacíos, consideramos que el registro es exitoso
    if (email.trim() !== '' && password.trim() !== '') {
      // Almacenar datos en localStorage
      localStorage.setItem('user', JSON.stringify({ email, password }));
      alert('Registro exitoso. Ahora puedes iniciar sesión.');
    } else {
      alert('Por favor, ingresa un correo electrónico y una contraseña válidos.');
    }
  };

  const handleLogin = () => {
    // Realiza la lógica de autenticación

    // Simulación: Recuperar datos del localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    // Simulación: Verificar si los datos coinciden
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      // Navegar a la página de libros
      navigate('/libros');
    } else {
      alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div className='padre__login'>
      <div className="hijo__ingreso">
        <h1 className='titulo__iniciar-sesion'>Login</h1>
        <div className='contenedor__input'>
          <input
            className='input__login'
            type="text"
            placeholder='Name'
           
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className='input__login'
            type="password"
            placeholder='Password'
            
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className='btn__ingresar' onClick={handleLogin}>Login</button>
      </div>
      <div className="hijo__registro">
        <h2 className="titulo__registro">¿Do not you have an account yet?</h2>
        <p className='p__subtitulo-registrarse'>Register to login</p>
        {/* Formulario de registro */}
        <div className='contenedor__input'>
          <input
            className='input__registro input__login '
            type="text"
            placeholder='Name'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className='input__registro input__login '
            type="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className='btn__registrarse' onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
};

export default Home;
