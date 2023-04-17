import React, { useEffect } from 'react'
import axios from '../../api/axios';


const DASHBOARD_URL = '/dashboard/users/list';

function UsersList() {

    const storedToken = localStorage.getItem("loggedAppUser");
    const parsedToken = JSON.parse(storedToken);
    const accessToken = parsedToken.accessToken;
    const token = accessToken.token;

    console.log(token)

    try{

        useEffect(() => {

            const axiosRequest= async() => {
        
               await axios.get(DASHBOARD_URL, {
                headers:{
                    Authorization: `Bearer ${token}`,
                  }
               })
            //    .then((response) => response.json())
               .then(data => console.log(data.data))
            }

            axiosRequest()
    
            }, [])


    }catch{

        console.log('Algo salio mal...')

    }

  return (
    <div>
        <h1>ESTAS EN LA USERLIST</h1>
        
    </div>
  )
}

export default UsersList