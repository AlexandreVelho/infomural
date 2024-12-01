// Importação de módulos necessários
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const adminRoutes = require('./routes/adminRoutes');
const publicRoutes = require('./routes/publicRoutes');
const mysql = require('mysql2');
const admin = require('firebase-admin');

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

// Inicialização do Firebase
admin.initializeApp({
    credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    }),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
});
console.log('Firebase inicializado com sucesso!');

// Conexão com MySQL
const db = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
});
db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err);
        process.exit(1);
    }
    console.log('Conexão com o MySQL estabelecida com sucesso!');
});

// Configuração do servidor
const app = express();
app.use(cors()); // Habilita CORS
app.use(bodyParser.json());

// Definição de rotas
app.use('/api/admin', adminRoutes);
app.use('/api/public', publicRoutes);

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
