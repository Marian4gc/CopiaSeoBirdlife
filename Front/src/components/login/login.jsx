import React, { useState } from 'react';
import axios from '../../api/axios';
import './login.css';
import Logo from '../images/logoAventurero.png';
import GolondrinaL from '../images/golondrinaLeft.png';
import GolondrinaR from '../images/golondrinaRight.png';

const LOGIN_URL = '/api/login_check';
import jwtDecode from 'jwt-decode';

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [success, setSuccess] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post(LOGIN_URL, 
                JSON.stringify({username: username, password: password}),
                    {
                        headers:{'content-Type' : 'application/json'},
                        withCredentials: true
                    }
            )

            const accessToken = response.data.token;
            const token = { accessToken: accessToken };
            console.log(accessToken);
            
            const storedToken = window.localStorage.setItem(
                'loggedAppUser', accessToken
            );

            console.log(storedToken)

            const auth_username = { username: username }
            const stored_username = window.localStorage.setItem(
                'name', JSON.stringify(auth_username)
            );
            console.log(stored_username)

            const decoded_token = jwtDecode(accessToken)
            console.log(decoded_token);

            const decoded_role = decoded_token.roles
            console.log(decoded_role[1])

           // const userRole = { role: decoded_role }
            const stored_roles = window.localStorage.setItem(
                'role', decoded_role
            )

            setUsername(username)
            setPassword('')
            setSuccess(true)

            console.log('¡Estás logead@!')

        }catch (err){
            console.log('Oh vaya! No funciona ...')
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
                            <h1>¡Bienvenid@, {username}!</h1>
                            <a href='/Map' className='mt-5 btn-login btnAzul'>Comienza tu aventura</a>
                        </div>
                    </div>

                ) : (
                    <div id='secLogin' className='d-flex container justify-content-center mt-5'>
                        <h1>Login</h1>
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
                                />

                                <label htmlFor='password' className="form-label">Contraseña</label>
                                <input
                                    type='password'
                                    id='password'
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    required
                                    className='form-control'
                                />
                                <div className='d-flex container justify-content-center'>
                                    <button className='mt-5 btnAzul'>Entrar</button>
                                </div>
                            </form>


                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Login;