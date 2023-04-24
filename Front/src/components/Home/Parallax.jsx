import React, { useEffect } from "react";
import Logo from '../images/logoAventurero.png'
import Agua from '../images/agua.png'
import Rocas from '../images/rocas.png'
import CiudadBosque from '../images/CiudadBosque.png'
import GolondrinaDerecha from '../images/golondrinaDerecha.png'
import GolondrinaIzquierda from '../images/golondrinaIzquierda.png'
import "./Home.css"
import Start from "../navBar/Start";

function Parallax() {

  useEffect(() => {
    const text = document.getElementById("text");
    const birdHome1 = document.getElementById("birdHome1");
    const birdHome2 = document.getElementById("birdHome2");


    function handleScroll() {
      const value = window.scrollY;

      text.style.top = `calc(20% - ${value * 0.3}px)`;
      birdHome2.style.top = `${value * -1.5}px`;
      birdHome2.style.left = `${value * 2}px`;
      birdHome1.style.top = `${value * -1.5}px`;
      birdHome1.style.left = `${value * -5}px`;
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div>
      <nav>
        <Start />
      </nav>
      <section>
        <div id="text">
          <img src={Logo} id="logo" />
          <h2>¡BIENVENID@ <br />AVENTURER@!</h2>
        </div>

        <img src={GolondrinaIzquierda} id="birdHome1" />
        <img src={GolondrinaDerecha} id="birdHome2" />

        <img src={CiudadBosque} id="forest" />

        <img src={Rocas} id="rocks" />
        <img src={Agua} id="water" />

      </section>

    </div>
  );
}

export default Parallax