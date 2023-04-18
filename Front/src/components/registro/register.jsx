import React, { useState } from 'react';
import axios from '../../api/axios';
import './register.css';
import Logo from '../images/logoAventurero.png';
import GolondrinaL from '../images/golondrinaLeft.png';
import GolondrinaR from '../images/golondrinaRight.png';

const LOGIN_URL = '/api/login_check';


function Register() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [success, setSuccess] = useState(false)
    const [isChecked, setIsChecked] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (isChecked) {
            // Hacer algo si el checkbox está marcado
          } else {
            // Mostrar un mensaje de error o tomar otra acción si el checkbox no está marcado
          }

        try{
            const response = await axios.post(REGISTRATION_URL, { 
                username: username, 
                password: password
            },
            {
                headers: {'Content-Type': 'application/json'} 
            })

            console.log(response.data)
            setSuccess(true)
        }catch{
                console.log('No funciona')
        }
    }

    return (
        <div className='d-flex container justify-content-center'>
            <div className=''>
                <header>

                    <img src={GolondrinaL} id="bird1" />
                    <img src={Logo} />
                    <img src={GolondrinaR} id="bird2" />
                </header>
                {success ? (
                    <div className='success d-flex container justify-content-center mt-7'>
                        <div className="d-flex flex-column align-items-center">
                        <h2>¡Registro completado!</h2>
                    <a href='/login' className='btn-login btnAzul'>Ve al inicio de sesión</a>


                    
                        </div>
                    </div>

                ) : (
                    <div id='secLogin' className='d-flex container justify-content-center'>
                        <h1>Registro de usuario</h1>
                        <div className='box-fichaje'>
                            <form onSubmit={handleSubmit}>
                            <label htmlFor='username' className="form-label">Usuario</label>
                                <input
                                    type='text'
                                    id='username'
                                    autoComplete='off'
                                    onChange={(e) => setUsername(e.target.value)}
                                    value={username}
                                    required
                                    className='form-control'
                                    minLength={6} 
                                />

                                <label htmlFor='password' className="form-label">Contraseña</label>
                                <input
                                    type='password'
                                    id='password'
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    required
                                    className='form-control'
                                    minLength={6} 
                                />
                                <div className='d-flex container justify-content-center'>
                                    <button className='btnAzul'>Registrarse</button>
                                </div>
                            </form>
                            <p>Si ya estás registrado pasa a:</p>
                            <a href="/login" className='btnAzul'>Iniciar sesión</a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Register;