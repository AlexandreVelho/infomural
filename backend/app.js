// Importação de módulos necessários
const express = require('express'); // Framework de servidor web
const admin = require('firebase-admin'); // Biblioteca do Firebase Admin SDK
const bodyParser = require('body-parser'); // Middleware para análise de corpos de requisição
const dotenv = require('dotenv'); // Biblioteca para carregar variáveis de ambiente
const cors = require('cors'); // Middleware para habilitar CORS (Cross-Origin Resource Sharing)

const mysql = require('mysql2'); // Módulo para conexão com o banco de dados MySQL

const path = require('path'); // Módulo para manipulação de caminhos de arquivos

// Carregar as variáveis de ambiente
dotenv.config(); // Carrega variáveis de ambiente do arquivo .env para process.env

// Verificar se o Firebase já foi inicializado
if (!admin.apps.length) {
    try {
        console.log("Inicializando o Firebase...");

        // Caminho para o arquivo JSON com as credenciais
        const serviceAccount = require(path.join(__dirname, 'secrets/firebase-credentials.json'));

        // Inicializa o Firebase com as credenciais fornecidas
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: process.env.FIREBASE_DATABASE_URL,
        });

        console.log('Firebase inicializado com sucesso!');
    } catch (error) {
        console.error('Erro ao inicializar o Firebase:', error);
        process.exit(1); // Finaliza o processo se houver erro
    }
} else {
    console.log('Firebase já estava inicializado.');
}
const adminRoutes = require('./routes/adminRoutes'); // Rotas específicas para o administrador
const publicRoutes = require('./routes/publicRoutes'); // Rotas públicas acessíveis a todos
// Criação do servidor Express
const app = express();

// Configurações do middleware
app.use(cors()); // Habilita CORS para permitir requisições de diferentes origens
app.use(bodyParser.json()); // Configura o Express para usar body-parser para analisar JSON no corpo das requisições

// Definir as rotas
app.use('/api/admin', adminRoutes); // Associa rotas de administrador ao caminho /api/admin
app.use('/api/public', publicRoutes); // Associa rotas públicas ao caminho /api/public

// Tratamento de erros
app.use((err, req, res, next) => {
    console.error(err.stack); // Exibe o erro no console
    res.status(500).json({ error: 'Ocorreu um erro interno no servidor' }); // Retorna uma resposta de erro 500 em JSON
});

// Definir a porta do servidor
const PORT = process.env.PORT || 3000; // Define a porta do servidor a partir da variável de ambiente ou 3000 como padrão
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`); // Exibe mensagem no console indicando que o servidor está rodando
});
