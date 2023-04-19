import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table'

function AllBirds() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/totaldata/allbirds')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    const aves = {
        "Abejaruco europeo": "Abejaruco europeo",
        "Abubilla común": "Abubilla común",
        "Ánsar común": "Ánsar común",
        "Autillo europeo": "Autillo europeo",
        "Avión común": "Avión común",
        "Cigüeña blanca": "Cigüeña blanca",
        "Codorniz común": "Codorniz común",
        "Cuco común": "Cuco común",
        "Golondrina común": "Golondrina común",
        "Grulla común": "Grulla común",
        "Pardela cenicienta": "Pardela cenicienta",
        "Ruiseñor común": "Ruiseñor común",
        "Tortola europea": "Tortola europea",
        "Vencejo común": "Vencejo común",
    };
    
    const plantas = {
        "Almendro": "Almendro",
        "Amapola": "Amapola",
        "Castaño": "Castaño",
        "Jara Pringosa": "Jara Pringosa",
        "Plátano de paseo": "Plátano de paseo",
        // Agrega más plantas aquí
    };
    
    const insectos = {
        "Abeja": "Abeja",
        "Chupaleche": "Chupaleche",
        // Agrega más insectos aquí
    };

    const avesArr = [];
    const plantasArr = [];
    const insectosArr = [];

    data.forEach(item => {
        if (aves[item.name]) {
            avesArr.push(item);
        } else if (plantas[item.name]) {
            plantasArr.push(item);
        } else if (insectos[item.name]) {
            insectosArr.push(item);
        }
    });

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Aves</th>
                    <th>Plantas</th>
                    <th>Insectos</th>
                </tr>
            </thead>
            <tbody>
                {Object.values(avesArr).map((item, index) => (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                ))}
                {Object.values(plantasArr).map((item, index) => (
                    <tr key={index}>
                        <td>-</td>
                        <td>{item.name}</td>
                        <td>-</td>
                    </tr>
                ))}
                {Object.values(insectosArr).map((item, index) => (
                    <tr key={index}>
                        <td>-</td>
                        <td>-</td>
                        <td>{item.name}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default AllBirds;
