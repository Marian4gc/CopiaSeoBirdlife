import React from 'react';
import './thanks.css';
import logoblanco from '../images/logoblanco.png';

function Thanks() {
    return (
        <div className="contenedor">
            <img className='logoBlanco' src={logoblanco} alt="Logo de la empresa" />
            <div className="bocadillo">
                <p>¡Gracias por tu ayuda aventurer@!</p>
            </div>
            <div id="club-aventureros">
                <p>Para más información, visita nuestro Club Aventureros.</p>
                <a href="https://clubaventureros.org/" id="boton-club-aventureros" target='_blank'>Club Aventurer@</a>
            </div>
            {/* <button class="cta">
                <span>Envía tus descubrimientos</span>
                <svg viewBox="0 0 13 10" height="10px" width="15px">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
            </button> */}
        </div>
    );

}

export default Thanks;