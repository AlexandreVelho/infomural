import axios from 'axios';

// Cria uma instância do axios com a URL base da API (usando variável de ambiente)
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // URL da API do backend configurada no .env
});

// Função para obter todos os conteúdos
export const getContents = async () => {
  try {
    const response = await api.get('/public/contents'); // Rota pública para pegar os conteúdos
    return response.data; // Retorna os dados dos conteúdos
  } catch (error) {
    console.error('Erro ao buscar conteúdos:', error);
    throw error;
  }
};

// Função para obter um conteúdo por ID
export const getContentById = async (id) => {
  try {
    const response = await api.get(`/public/contents/${id}`); // Rota para pegar um conteúdo específico
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar conteúdo:', error);
    throw error;
  }
};

// Função para adicionar um novo conteúdo
export const addContent = async (content) => {
  try {
    const response = await api.post('/admin/add-content', content); // Envia os dados para adicionar um novo conteúdo
    return response.data; // Retorna o conteúdo adicionado
  } catch (error) {
    console.error('Erro ao adicionar conteúdo:', error);
    throw error;
  }
};

// Função para atualizar um conteúdo existente
export const updateContent = async (id, content) => {
  try {
    const response = await api.put(`/admin/update-content/${id}`, content); // Envia os dados para atualizar um conteúdo
    return response.data; // Retorna o conteúdo atualizado
  } catch (error) {
    console.error('Erro ao atualizar conteúdo:', error);
    throw error;
  }
};

// Função para excluir um conteúdo
export const deleteContent = async (id) => {
  try {
    const response = await api.delete(`/admin/delete-content/${id}`); // Envia o ID para excluir um conteúdo
    return response.data; // Retorna a confirmação de exclusão
  } catch (error) {
    console.error('Erro ao excluir conteúdo:', error);
    throw error;
  }
};
