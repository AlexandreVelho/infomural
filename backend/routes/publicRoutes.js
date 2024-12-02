const express = require('express');
const router = express.Router();
const ContentModel = require('../models/contentModel'); // Importa o modelo para gerenciar os conteúdos

// Rota para retornar todos os conteúdos públicos
router.get('/contents', async (req, res) => {
  try {
    // Recupera todos os conteúdos da coleção
    const contents = await ContentModel.getContents();
    // Retorna os conteúdos em formato JSON
    res.status(200).json(contents);
  } catch (error) {
    console.error('Erro ao recuperar conteúdos:', error.message);
    res.status(500).json({ message: 'Erro interno ao recuperar conteúdos.' });
  }
});

// Exporte o router
module.exports = router;
