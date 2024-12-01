require('dotenv').config();
const admin = require('firebase-admin');
const path = require('path');

// Inicializa o Firebase com a chave privada do arquivo JSON
admin.initializeApp({
  credential: admin.credential.cert(require(path.join(__dirname, 'secrets/firebase-credentials.json'))),
  databaseURL: process.env.FIREBASE_DATABASE_URL,
});

// Referência ao Firestore ou Realtime Database
const db = admin.firestore(); // Para Firestore
// const db = admin.database(); // Para Realtime Database

// Testando leitura e escrita no Firestore
async function testFirebase() {
  try {
    // Escreve dados no Firestore
    const docRef = db.collection('testCollection').doc('testDoc');
    await docRef.set({ message: 'Firebase está funcionando!' });

    // Lê dados do Firestore
    const doc = await docRef.get();
    if (doc.exists) {
      console.log('Dados lidos do Firebase:', doc.data());
    } else {
      console.log('Nenhum documento encontrado!');
    }
  } catch (error) {
    console.error('Erro ao testar o Firebase:', error);
  }
}

testFirebase();
