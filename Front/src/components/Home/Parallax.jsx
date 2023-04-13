
import React, { useEffect } from "react";
import Logo from '../images/logoAventurero.png'
import Agua from '../images/agua.png'
import Rocas from '../images/rocas.png'
import CiudadBosque from '../images/CiudadBosque.png'
import GolondrinaDerecha from '../images/golondrinaDerecha.png'
import GolondrinaIzquierda from '../images/golondrinaIzquierda.png'
import "./Home.css"

function Parallax() {

  useEffect(() => {
    const text = document.getElementById("text");
    const bird1 = document.getElementById("bird1");
    const bird2 = document.getElementById("bird2");
    // const bird5 = document.getElementById("bird5");
  
    function handleScroll() {
      const value = window.scrollY;

      text.style.top = `calc(20% - ${value * 0.3}px)`;
      bird2.style.top = `${value * -1.5}px`;
      bird2.style.left = `${value * 2}px`;
      bird1.style.top = `${value * -1.5}px`;
      bird1.style.left = `${value * -5}px`;
   
    btn.style.marginTop = `${value * 1.5}px`;
    
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
  return (
    <div>
      <section>
      <div id="text">
        <img src={Logo} id="logo" />
        <h2>¡BIENVENID@ <br/>AVENTURER@!</h2>
      </div>

        <img src={GolondrinaIzquierda} id="bird1" />
        <img src={GolondrinaDerecha} id="bird2" />

        <img src={CiudadBosque} id="forest" />

        <img src={Rocas} id="rocks" />
        <img src={Agua} id="water" />
       
        <a href="#" id="btn">
         Entrar
        </a>
      </section>

     

     
    </div>
  );
}

export default Parallax