// Importação de módulos necessários
const express = require('express'); // Framework de servidor web
const bodyParser = require('body-parser'); // Middleware para processamento de corpo de requisições
const dotenv = require('dotenv'); // Biblioteca para carregar variáveis de ambiente
const adminRoutes = require('./routes/adminRoutes'); // Rotas específicas para o administrador
const publicRoutes = require('./routes/publicRoutes'); // Rotas públicas acessíveis a todos

// Configurações
dotenv.config(); // Carrega variáveis de ambiente do arquivo .env para process.env
const app = express(); // Cria uma instância do aplicativo Express
app.use(bodyParser.json()); // Configura o aplicativo para usar o middleware body-parser para analisar JSON

// Definição de rotas
app.use('/api/admin', adminRoutes); // Associa rotas de administrador ao caminho /api/admin
app.use('/api/public', publicRoutes); // Associa rotas públicas ao caminho /api/public

// Porta
const PORT = process.env.PORT || 3000; // Define a porta do servidor a partir da variável de ambiente ou 3000
app.listen(PORT, () => { // Inicia o servidor e escuta na porta definida
    console.log(`Servidor rodando na porta ${PORT}`); // Exibe mensagem no console indicando que o servidor está rodando
});
