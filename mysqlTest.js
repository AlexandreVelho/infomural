require('dotenv').config(); // Carrega o arquivo .env
const mysql = require('mysql2');

// Verifique se as variáveis estão sendo lidas corretamente
console.log('MYSQL_USER:', process.env.MYSQL_USER);
console.log('MYSQL_PASSWORD:', process.env.MYSQL_PASSWORD);

// Configuração da conexão com o MySQL
const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

// Testando a conexão
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
    return;
  }
  console.log('Conexão com o MySQL estabelecida com sucesso!');
});
