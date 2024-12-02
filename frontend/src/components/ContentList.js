import React, { useEffect, useState } from 'react';
import { getContents } from '../services/api';  // Supondo que você tenha essa função

const ContentList = () => {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    const fetchContents = async () => {
      try {
        const data = await getContents();
        setContents(data);
      } catch (error) {
        console.error('Erro ao buscar conteúdos:', error);
      }
    };
    fetchContents();
  }, []);

  return (
    <div>
      <h1>Lista de Conteúdos</h1>
      {contents.length === 0 ? (
        <p>Nenhum conteúdo encontrado.</p>
      ) : (
        <ul>
          {contents.map((content) => (
            <li key={content.id}>{content.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContentList;
