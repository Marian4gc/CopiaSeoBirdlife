import { useEffect, useState } from "react";
import location from '../images/location.png'

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

    return (
        <div className="mapa">
            <div className="d-flex justify-content-around encabezadoGeneral">
                <img src={location} id="location" />
                    <h1>Mi ubicación actual</h1>
                <img src={location} id="location" />
            </div>
            <div className="d-flex flex-column align-items-center mt-3">
                <p>Latitud: {posicion[0]}</p>
                <p>Longitud: {posicion[1]}</p>
            </div>
        </div>
    )
}

export default Coordinates
