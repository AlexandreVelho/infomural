// Importação de módulos necessários
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const adminRoutes = require('./routes/adminRoutes');
const publicRoutes = require('./routes/publicRoutes');
const mysql = require('mysql2');
const admin = require('firebase-admin');
const path = require('path'); // Adicionado aqui

// Configurações
dotenv.config(); // Carrega variáveis de ambiente

// Validação das variáveis de ambiente
const validateEnv = () => {
    const requiredVars = ['PORT', 'MYSQL_HOST', 'MYSQL_USER', 'MYSQL_PASSWORD', 'MYSQL_DATABASE', 
                          'FIREBASE_API_KEY', 'FIREBASE_AUTH_DOMAIN', 'FIREBASE_DATABASE_URL',
                          'FIREBASE_PROJECT_ID', 'FIREBASE_STORAGE_BUCKET', 'FIREBASE_MESSAGING_SENDER_ID',
                          'FIREBASE_APP_ID'];

    requiredVars.forEach((key) => {
        if (!process.env[key]) {
            console.error(`Erro: Variável de ambiente ${key} não definida!`);
            process.exit(1);
        }
    });
};
validateEnv();

// Inicializa o Firebase com a chave privada JSON
admin.initializeApp({
    credential: admin.credential.cert(
      require(path.join(__dirname, 'secrets/firebase-credentials.json')) // Caminho corrigido
    ),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
});

console.log('Firebase inicializado com sucesso!');

// Criação do aplicativo Express
const app = express(); // Adicionado aqui

// Configurações do middleware
app.use(cors());
app.use(bodyParser.json());

// Definição de rotas
app.use('/api/admin', adminRoutes); // Admin routes
app.use('/api/public', publicRoutes); // Public routes

// Tratamento de erros
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Ocorreu um erro interno no servidor' });
});

// Porta
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
