import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table'

function AllBirds() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/totaldata/allbirds')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    const filteredData = data.filter(item => {
        return item.name !== "" && item.user !== "";
    });

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>User</th>
                </tr>
            </thead>
            <tbody>
                {filteredData.map((item, index) => (
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.user}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default AllBirds;
