import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import butterfly from '../images/butterfly.svg';

function AllBirds() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/totaldata/allbirds')
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    const aves = {
        'Abejaruco europeo': 'Abejaruco europeo',
        'Abubilla común': 'Abubilla común',
        'Ánsar común': 'Ánsar común',
        'Autillo europeo': 'Autillo europeo',
        'Avión común': 'Avión común',
        'Cigüeña blanca': 'Cigüeña blanca',
        'Codorniz común': 'Codorniz común',
        'Cuco común': 'Cuco común',
        'Golondrina común': 'Golondrina común',
        'Grulla común': 'Grulla común',
        'Pardela cenicienta': 'Pardela cenicienta',
        'Ruiseñor común': 'Ruiseñor común',
        'Tortola europea': 'Tortola europea',
        'Vencejo común': 'Vencejo común',
    };

    const plantas = {
        Almendro: 'Almendro',
        Amapola: 'Amapola',
        Castaño: 'Castaño',
        'Jara Pringosa': 'Jara Pringosa',
        'Plátano de paseo': 'Plátano de paseo',
        // Agrega más plantas aquí
    };

    const insectos = {
        Abeja: 'Abeja',
        Chupaleche: 'Chupaleche',
        // Agrega más insectos aquí
    };

    const avesArr = data.filter((item) => aves[item.name]);
    const plantasArr = data.filter((item) => plantas[item.name]);
    const insectosArr = data.filter((item) => insectos[item.name]);

    return (
        <div className="container">
            <div className="d-flex justify-content-around encabezadoGeneral">
                <img src={butterfly} id="butterfly" />
                <h1>Avistamientos totales</h1>
                <img src={butterfly} id="butterfly" />
            </div>
            <div className="row">
                <div className="col-md-4">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Aves</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.values(avesArr).map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
                <div className="col-md-4">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Plantas</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.values(plantasArr).map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
                <div className="col-md-4">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Insectos</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.values(insectosArr).map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
}

export default AllBirds;
