const mysql = require('mysql2');

// Configuração da conexão com o banco de dados
const db = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

// Função para registrar o log de atividades
const logActivity = (acao, usuario) => {
  const query = 'INSERT INTO logs (acao, usuario) VALUES (?, ?)';
  db.query(query, [acao, usuario], (err, results) => {
    if (err) {
      console.error('Erro ao registrar log:', err);
      return;
    }
    console.log('Log registrado com sucesso:', results);
  });
};

module.exports = {
  logActivity,
};
