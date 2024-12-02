import React from 'react';
import ReactDOM from 'react-dom/client'; // Importando o ReactDOM do cliente
import App from './App';  // Importa o componente App

// Cria um "root" para a renderização no React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza o componente App dentro do "root"
root.render(<App />);
