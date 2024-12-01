import axios from 'axios'; // Importa a biblioteca Axios para fazer requisições HTTP

// Cria uma instância personalizada do Axios com uma URL base configurada
const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3000/api', 
    // Define a URL base para as requisições.
    // Usa a variável de ambiente REACT_APP_API_URL se disponível,
    // Caso contrário, usa 'http://localhost:3000/api' como padrão.
});

export default api; // Exporta a instância personalizada do Axios para uso em outros módulos
