import { useState, useEffect } from 'react';

function Date() {
  const [fecha, setFecha] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/fecha')
      .then(response => response.json())
      .then(data => setFecha(data.fecha))
      
      .catch(error => {
        console.error(error);
        console.log(error.response);
      });
      
  }, []);

  if (!fecha) {
    return <p className='text-center'>Loading...</p>;
  }

  return <h2 className='text-center'>Today is {fecha}</h2>;
}

export default Date;