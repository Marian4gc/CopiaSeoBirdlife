import { useState, useEffect } from 'react';
import './todaydate.css'


function TodayDate() {
    const [fecha, setFecha] = useState(null);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/fecha')
            .then((response) => response.json())
            .then((data) => setFecha(data.fecha))
            .catch((error) => {
                console.error(error);
                console.log(error.response);
            });
    }, []);

    if (!fecha) {
        return (
            <div className="d-flex container justify-content-center dot-spinner">
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
            </div>
        );
    }

    return <h2 className="text-center">Today is {fecha}</h2>;
}

export default TodayDate;