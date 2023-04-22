import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import plant from '../images/plant.svg';
import '../birds/birds.css';
import Swal from 'sweetalert2';

function Plants() {

    const [plants, setRepo] = useState([]);


    useEffect(() => {
        fetch('http://127.0.0.1:8000/plant/list')
            .then(response => response.json())
            .then(plants => setRepo(plants))
            .catch(error => console.error(error));
    }, []);

    const [likes, setLikes] = useState(new Array(plants.length).fill(false));


    const handleLike = (index) => {
        setLikes((prevLikes) => {
            const newLikes = [...prevLikes];
            newLikes[index] = !newLikes[index];
            return newLikes;
        });
    };

        // función para enviar datos
        function sendData(selectedPlantsData) {
            axios.post('http://127.0.0.1:8000/totaldata/plant', selectedPlantsData, {
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
            const selectedPlants = plants.filter((int, index) => likes[index]);
            if (selectedPlants.length === 0) {
                console.log("No hay plantas seleccionadas");
                alert("¿No has visto ninguna? No te preocupes, pasa a los insectos!");
                return;
            }
            const selectedPlantsData = selectedPlants.map((plant) => ({
                name: plant.name,
            }));
    
            console.log("Selected plants data:", selectedPlantsData);
            const jsonData = JSON.stringify({ plants: selectedPlantsData });
            // console.log("JSON.stringify(selectedBirdsData):", jsonData);
    
            sendData(jsonData);

            Swal.fire({
                icon: 'success',
                title: '¡Gracias!',
                text: 'Has enviado las plantas'
            }).then(() => {
                window.location.href = '#butterfly';
            });
        };
    

return (
    <>
    <div className="container px-4 py-5" id="hanging-icons">
    <div className="d-flex justify-content-around encabezadoGeneral">
                    <img src={plant} id="plantR" />
                    <h1>Sigue la pista de las plantas</h1>
                    <img src={plant} id="plantL" />
                </div>
        <h2 className="pb-2 border-bottom mt-7" >Plantas</h2>
        <div className="row">
            {plants.map((int, index) => (
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
                                    <h5 className="card-title text-center" id="rutaPlant">
                                        {int.name}
                                    </h5>
                                    <p className="card-text">
                                        {int.description}
                                    </p>
                                    <div className="d-grid gap-2 d-md-flex justify-content-md-end mb-4 mb-lg-3">
                                        {likes[index] ? (

                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                        width="30"
                                                        height="30"
                                                        fill="green"
                                                        className="bi bi-eye-fill ojo"
                                                        viewBox="0 0 16 16"
                                                        onClick={() => handleLike(index)}>
                                                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />

                                                    </svg>
                                                ) : (
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                        width="30"
                                                        height="30"
                                                        fill="currentColor"
                                                        className="bi bi-eye-slash-fill ojo"
                                                        viewBox="0 0 16 16"
                                                        onClick={() => handleLike(index)}>
                                                        <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                                                        <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                                                    </svg>
                                                )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <h2 className="pb-2 text-center mt-5">Ahora envía todas las plantas que has visto</h2>
                <div className="d-flex justify-content-center mt-3">
                    <a href={"#"}
                        className="btnb"
                        role="button"
                        data-bs-toggle="button"
                        onClick={handleSendData}
                    >Envía las plantas
                    </a>
                </div>
    </div>
</>
);
}

export default Plants
