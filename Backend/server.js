const express = require('express');
const admin = require('firebase-admin');
const app = express();
const port = 3000;

// Inicializar o Firebase Admin
const serviceAccount = require('./caminho/para/sua/chave-de-servico.json'); // Arquivo JSON com as credenciais

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore(); // Referência ao Firestore

app.use(express.json());  // Para lidar com dados em JSON

// Rota para calcular a pegada ecológica
app.post('/calcular', async (req, res) => {
  const { energia, transporte, alimentacao } = req.body;

  // Cálculo da pegada ecológica (você pode ajustar conforme sua lógica)
  const pegada = (energia * 2) + (transporte * 3) + (alimentacao * 4);

  // Salvar o resultado no Firestore (salvar em uma coleção 'resultados')
  try {
    const resultRef = db.collection('resultados').doc();
    await resultRef.set({
      energia,
      transporte,
      alimentacao,
      pegada,
      data: new Date().toISOString()
    });

    res.json({ pegada });
  } catch (err) {
    console.log(err);
    res.status(500).send('Erro ao calcular pegada ecológica');
  }
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
