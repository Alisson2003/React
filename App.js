import React from 'react';
import './App.css';
import logo from './mifoto.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p><strong>Nombre:</strong> Alisson Viracocha</p>
        <p><strong>Dirección:</strong> Quitumbe</p>
        <p><strong>Teléfono:</strong> 0999846455</p>
        <p><strong>Correo Electrónico:</strong> alisson.viracocha@epn.ecu.ec</p>

        <h2>Lista de Estudios Realizados</h2>
        <ol>
          <li>Bachiller Técnica en Informática</li>
          <li>Estudiante de Tecnología en Desarrollo de Software - EPN</li>
          <li>Curso de JavaScript</li>
        </ol>

        <h2>Lista de Herramientas Utilizadas</h2>
        <ul>
          <li>C++</li>
          <li>Python</li>
          <li>Java</li>
          <li>Visual Studio Code</li>
        </ul>

        <h2>Galería de Deportes Favoritos</h2>
        <div className="gallery">
          <div className="image-container">
            <img src="./futbol.avif" alt="Fútbol" />
            <p>Fútbol</p>
          </div>
          <div className="image-container">
            <img src="./boly.jpeg" alt="Boliche" />
            <p>Boliche</p>
          </div>
          <div className="image-container">
            <img src="./imagenes.jpeg" alt="Natación" />
            <p>Natación</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;