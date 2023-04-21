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

        </div>
    );

}

export default Thanks;