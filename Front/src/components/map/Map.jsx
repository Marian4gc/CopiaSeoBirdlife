import React, { Component } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icono from '../images/iconoUbicacion.svg';
import location from '../images/location.png';
import './map.css'

import Coordinates from './Coordinates';
import Date from '../date/TodayDate';

class Map extends Component {
    componentDidMount() {
        if (!this.map) {

            this.map = L.map('map').setView([51.505, -0.09], 13);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: 'Map data &copy; OpenStreetMap contributors'
            }).addTo(this.map);

            // Obtener la ubicación del usuario
            navigator.geolocation.getCurrentPosition(
                position => {
                    const { latitude, longitude } = position.coords;
                    const latLng = L.latLng(latitude, longitude);

                    // Agregar el marcador en la ubicación del usuario
                    const customIcon = L.icon({
                        iconUrl: icono,
                        iconSize: [64, 64], // tamaño del ícono en píxeles
                        iconAnchor: [16, 32] // posición del ancla del ícono en relación con su parte inferior izquierda
                    });

                    L.marker(latLng, { icon: customIcon }).addTo(this.map);
                    this.map.setView(latLng);
                },
                error => {
                    console.error(error);
                    alert('No se pudo obtener la ubicación del usuario.');
                },
                { timeout: 10000 } // aumentar el tiempo de espera a 10 segundos
            );
        }
    }

    render() {
        return (
            <>
                <div className="d-flex justify-content-around encabezadoGeneral">
                    <img src={location} id="locationL" />
                    <h1>Mi ubicación actual</h1>
                    <img src={location} id="locationR" />
                </div>
                <Date />
                <div className='d-flex container justify-content-center mt-3' id="map" style={{ height: '400px', width: '100%' }} >
                </div>
                <div className='success d-flex container justify-content-center'>
                    <Coordinates />
                </div>
            </>
        );
    }

}

export default Map;