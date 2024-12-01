const express = require('express');
const router = express.Router();

// Rota de teste
router.get('/test', (req, res) => {
    res.status(200).json({ message: 'Rota administrativa funcionando!' });
});

module.exports = router;
