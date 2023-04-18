import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './birds.css'
import axios from 'axios';
import PetirojoIzquierda from '../images/petirojoIzq.png';
import PetirojoDerecha from '../images/petirojoDcha.png';
import Song from './Song';
import Eyes from "./eyes.jsx";



function Birds() {
    //api que recibe datos de los pajaritos
    const [repo, setRepo] = useState([]);


    useEffect(() => {
        fetch('http://127.0.0.1:8000/birds/list')
            .then(response => response.json())
            .then(repo => setRepo(repo))
            .catch(error => console.error(error));
    }, []);

    //funcion para corazon
    const [likes, setLikes] = useState(new Array(repo.length).fill(false));


    const handleLike = (index) => {
        setLikes((prevLikes) => {
            const newLikes = [...prevLikes];
            newLikes[index] = !newLikes[index];
            return newLikes;
        });
    };

    const storedToken = localStorage.getItem("loggedAppUser");
    const parsedToken = JSON.parse(storedToken);
    const accessToken = parsedToken.accessToken;
    const token = accessToken.token;

    console.log(token)

    try {

        useEffect(() => {

            const axiosRequest = async () => {

                await axios.get('http://127.0.0.1:8000/totaldata/list', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
                    .then((response) => {
                        console.log(response.data);
                    })
                    .catch((error) => {
                        console.error(error);
                    }, []);
            }
        })
    } catch {

        console.log('Algo salio mal...')

    }


    // función para enviar datos
    function sendData(selectedBirdsData, username) {
        axios.post('http://127.0.0.1:8000/totaldata/list', selectedBirdsData, username, {
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            }, []);
    }


    // función para manejar el envío de datos
    const handleSendData = () => {
        const selectedBirds = repo.filter((int, index) => likes[index]);
        if (selectedBirds.length === 0) {
            console.log("No hay aves seleccionadas");
            return;
        }
        const selectedBirdsData = selectedBirds.map((bird) => ({
            name: bird.name,
        }));

        console.log("Selected birds data:", selectedBirdsData, parsedToken.username);
        const jsonData = JSON.stringify({ birds: selectedBirdsData, user: parsedToken.username });
        // console.log("JSON.stringify(selectedBirdsData):", jsonData);

        sendData(jsonData);
    };


    return (
        <>
            <div className="container px-4 py-5" id="hanging-icons">
                <div className="d-flex justify-content-around encabezadoGeneral">
                    <img src={PetirojoIzquierda} id="gorrionIz" />
                    <h1>Sigue la pista de las aves</h1>
                    <img src={PetirojoDerecha} id="gorrionDer" />
                </div>
                <h2 className="pb-2 border-bottom">Aves</h2>
                <div className="row">
                    {repo.map((int, index) => (
                        <div className="col-lg-6 mb-4">
                            <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg cosa">
                                <div className="row no-gutters" key={int.id}>
                                    <div className="col-md-4 col-12" style={{ textAlign: "center" }}>
                                        <img
                                            src={int.image}
                                            className="bi mt-2 mb-2 w-100 card-img"
                                            style={{
                                                maxWidth: "300px",
                                                height: "auto",
                                                marginLeft: "10px",
                                            }}
                                            alt={int.name}
                                        />

                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                {int.name}
                                            </h5>
                                            <p className="card-text">
                                                {int.description}
                                            </p>
                                            <div className="d-grid gap-2 d-md-flex justify-content-md-end mb-4 mb-lg-3">
                                                {/* <svg xmlns="http://www.w3.org/2000/svg"
                                                    width="30"
                                                    height="30"
                                                    fill={likes[index] ? "red" : "grey"}
                                                    className="bi bi-suit-heart-fill corazon"
                                                    viewBox="0 0 16 16"
                                                    onClick={() => handleLike(index)}>
                                                    <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
                                                </svg> */}
                                                {/* <svg xmlns="http://www.w3.org/2000/svg"
                                                 width="30" 
                                                 height="30" fill={likes[index] ? "green" : "grey"}
                                                 class="bi bi-eye-fill ojo" viewBox="0 0 16 16"
                                                 onClick={() => handleLike(index)}>
                                                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                                                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                                                 </svg> */}
                                                {likes[index] ? (
                                                   
                                                     <svg xmlns="http://www.w3.org/2000/svg"
                                                     width="30"
                                                     height="30"
                                                     fill="green"
                                                     class="bi bi-eye-fill ojo"
                                                     viewBox="0 0 16 16"
                                                     onClick={() => handleLike(index)}>
                                                     <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                                     <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>

                                                 </svg>
                                                ) : (
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                        width="30"
                                                        height="30"
                                                        fill="currentColor"
                                                        class="bi bi-eye-slash-fill ojo"
                                                        viewBox="0 0 16 16"
                                                        onClick={() => handleLike(index)}>
                                                        <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                                                        <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                                                    </svg>

                                                )}



                                                <Song song={int.song} />
                                                <button
                                                    type="button"
                                                    className="btn btn-primary btn-lg btn-sm px-4 gap-3 info"
                                                    onClick={() => window.open(int.link, "_blank", "noopener noreferrer")}
                                                >
                                                    + Info
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <a href={"#"}
                    className="btn btn-primary"
                    role="button"
                    data-bs-toggle="button"
                    onClick={handleSendData}
                >Envía tus datos</a>
            </div>
        </>
    );
}


export default Birds;


