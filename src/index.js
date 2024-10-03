import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css'; // Archivo para los estilos globales si lo necesitas

// Selecciona el contenedor donde se montará la aplicación
const container = document.getElementById('root');

// Usa createRoot para React 18
const root = createRoot(container);

// Renderiza la aplicación en el contenedor seleccionado
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
