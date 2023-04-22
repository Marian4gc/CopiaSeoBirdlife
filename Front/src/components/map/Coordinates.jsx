import { useEffect, useState } from "react";

import axios from 'axios';

function Coordinates() {
    const [posicion, setPosicion] = useState([0, 0]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                setPosicion([pos.coords.latitude, pos.coords.longitude]);
            },
            (error) => console.log(error)
        );
    }, []);

    //enviar datos
    const enviarCoordenadas = () => {
        const mapa = {
            latitud: posicion[0],
            longitud: posicion[1]
        };

        console.log(mapa);

        axios.post('http://localhost:8000/coordenadas/', mapa, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            }, []);
    }


    return (
        <div className="mapa">
            <div className="d-flex flex-column align-items-center mt-3">
                <p>Latitud: {posicion[0]}</p>
                <p>Longitud: {posicion[1]}</p>
                {/* <button onClick={enviarCoordenadas}>Enviar coordenadas</button> */}
                <div className="d-flex flex-column align-items-center mt-5">
                    <h2 className="text-center">Para poder recopilar bien los datos, y entender el comportamiento de las aves, necesitamos que envíes tu Ubicación</h2>
                    <a href='/Discovery' onClick={enviarCoordenadas} className='mt-5 btn-login btnAzul'>Enviar corrdenadas</a>
                </div>
            </div>
        </div>
    )
}

export default Coordinates
