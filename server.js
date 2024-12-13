const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/formulario', (req, res) => {
    console.log('Dados recebidos:', req.body);
    res.status(200).send({ message: 'Dados recebidos com sucesso!' });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});
