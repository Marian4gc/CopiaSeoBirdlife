import React, { useState, useEffect } from 'react';
import { ReactTable } from 'react-table';


function AllBirds() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/totaldata/allbirds')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    const columns = [
        {
            Header: 'ID',
            accessor: 'id'
        },
        {
            Header: 'Name',
            accessor: 'name'
        },
        {
            Header: 'User',
            accessor: 'user'
        }
    ];

    return (
        <ReactTable
            data={data}
            columns={columns}
        />
    );
}

export default AllBirds;
