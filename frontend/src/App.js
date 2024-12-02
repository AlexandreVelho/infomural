import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Altere Switch para Routes
import ContentList from './components/ContentList';  // Componente que lista os conteúdos
import InfoDisplay from './components/InfoDisplay';  // Componente que exibe detalhes

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ContentList />} /> {/* Altere component para element */}
        <Route path="/content/:id" element={<InfoDisplay />} /> {/* Altere component para element */}
      </Routes>
    </Router>
  );
};

export default App;
