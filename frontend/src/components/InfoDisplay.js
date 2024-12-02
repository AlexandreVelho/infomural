import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getContentById } from '../services/api'; // Importando a função

const InfoDisplay = () => {
  const { id } = useParams(); // Obtém o ID da URL
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const contentData = await getContentById(id);
        setContent(contentData);
      } catch (error) {
        console.error('Erro ao buscar conteúdo:', error);
      }
    };

    fetchContent();
  }, [id]); // Reexecuta o efeito quando o ID mudar

  if (!content) return <p>Carregando...</p>;

  return (
    <div>
      <h1>{content.title}</h1>
      <p>{content.description}</p>
      {/* Renderizar outros dados do conteúdo */}
    </div>
  );
};

export default InfoDisplay;
