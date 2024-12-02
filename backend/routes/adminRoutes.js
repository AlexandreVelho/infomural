const express = require('express');
const router = express.Router();
const ContentModel = require('../models/contentModel'); // Certifique-se de que o ContentModel está importado

// Rota de teste
router.get('/test', (req, res) => {
  res.status(200).json({ message: 'Rota administrativa funcionando!' });
});

// Adicionar conteúdo
router.post('/add-content', async (req, res) => {
  try {
    const { title, description, image, category } = req.body;
    const newContent = await ContentModel.addContent({ title, description, image, category });
    res.status(200).json(newContent);
  } catch (error) {
    console.error('Erro ao adicionar conteúdo:', error.message);
    res.status(500).json({ message: 'Erro ao adicionar conteúdo.' });
  }
});

// Atualizar conteúdo
router.put('/update-content/:id', async (req, res) => {
  try {
    const { title, description, image, category } = req.body;
    const updatedContent = await ContentModel.updateContent(req.params.id, { title, description, image, category });
    res.status(200).json(updatedContent);
  } catch (error) {
    console.error('Erro ao atualizar conteúdo:', error.message);
    res.status(500).json({ message: 'Erro ao atualizar conteúdo.' });
  }
});

// Excluir conteúdo
router.delete('/delete-content/:id', async (req, res) => {
  try {
    const deletedContent = await ContentModel.deleteContent(req.params.id);
    res.status(200).json({ message: 'Conteúdo excluído com sucesso!', deletedContent });
  } catch (error) {
    console.error('Erro ao excluir conteúdo:', error.message);
    res.status(500).json({ message: 'Erro ao excluir conteúdo.' });
  }
});

module.exports = router;
