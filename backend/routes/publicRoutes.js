const express = require('express');
const router = express.Router();

// Rota de exemplo para teste
router.get('/test', (req, res) => {
    res.status(200).json({ message: 'Rota pública funcionando!' });
});

module.exports = router;
