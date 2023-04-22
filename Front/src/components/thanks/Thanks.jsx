import React from 'react';
import './thanks.css';
import logoblanco from '../images/logoblanco.png';
import bocadillo from '../images/bocadillo.png'

function Thanks() {
    return (
        <div className="contenedor">
            <img className='logoBlanco' src={logoblanco} alt="Logo de la empresa" />
            {/* <div className="bocadillo">
                <p>¡Gracias por tu ayuda aventurer@!</p>
            </div> */}

            <div style={{ position: 'relative' }}>
                <img src={bocadillo} alt="Bocadillo de diálogo" style={{ width: '200px' }} />
                <p style={{ position: 'absolute', top: '43%', left: '50%', transform: 'translate(-50%, -50%)', color: 'black' }}>¡Gracias por tu ayuda aventurer@!</p>
            </div>

            <h2 className="pb-2 text-center mt-5" style={{ color: 'white' }}>¿Has olvidado mandar algún avistamiento? ¡Puedes volver!</h2>
            <a href='/discovery' className='btn buttonT'> Volver </a>
            
            <div id="club-aventureros">
                <p>Para más información, visita nuestro Club Aventureros.</p>
                <a href="https://clubaventureros.org/" id="boton-club-aventureros" target='_blank'>Club Aventurer@</a>
            </div>

        </div>
    );

}

export default Thanks;