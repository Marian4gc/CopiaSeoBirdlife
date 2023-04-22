import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import search from '../images/search.svg';

function AllData() {
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);

    useEffect(() => {
        Promise.all([
            fetch('http://127.0.0.1:8000/totaldata/allbirds'),
            fetch('http://127.0.0.1:8000/coordenadas/all')
        ])
            .then(([response1, response2]) => Promise.all([response1.json(), response2.json()]))
            .then(([data, data2]) => {
                setData(data);
                const filteredData2 = data2.filter(coordenadas => coordenadas.latitud !== 0 && coordenadas.longitud !== 0);
                setData2(filteredData2);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
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
    };

    const insectos = {
        Abeja: 'Abeja',
        Chupaleche: 'Chupaleche',
    };

    const avesArr = data.filter((item) => aves[item.name]);
    const plantasArr = data.filter((item) => plantas[item.name]);
    const insectosArr = data.filter((item) => insectos[item.name]);

    return (
        <div className="container">
            <div className="d-flex justify-content-around encabezadoGeneral">
                <img src={search} id="butterfly" />
                <h1>Avistamientos totales</h1>
                <img src={search} id="search" />
            </div>
            <div className="d-flex justify-content-center gap-3 mt-7">
                <a type="button" class="btn btn-warning" href="/"><i class="bi bi-arrow-left"></i> Volver a inicio </a>
                <a type="button" class="btn btn-warning" href="http://127.0.0.1:8000/birds/">Ir al back <i class="bi bi-arrow-right"></i> </a>
            </div>
            <div className="row mt-7 d-flex flex-wrap">
                <div className="col-md-3">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th style={{ backgroundColor: 'lightblue' }}>Aves</th>
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
                <div className="col-md-3">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th style={{ backgroundColor: 'lightblue' }}>Plantas</th>
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
                <div className="col-md-3">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th style={{ backgroundColor: 'lightblue' }}>Insectos</th>
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
                <div className="col-md-3">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th style={{ backgroundColor: 'lightblue' }}>Coodenadas</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data2.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.latitud}, {item.longitud}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
}

export default AllData;
