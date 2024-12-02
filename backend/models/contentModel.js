// Importa a instância inicializada do Firebase do arquivo principal
const admin = require('firebase-admin'); // Usa a instância já inicializada no app.js
const db = admin.firestore();  // Acessa o Firestore

// Define a coleção 'contents' no Firestore
const contentsCollection = db.collection('contents');

const ContentModel = {
    // Método para obter todos os conteúdos da coleção
    async getContents() {
        const snapshot = await contentsCollection.get(); // Obtém todos os documentos da coleção
        const contents = [];
        snapshot.forEach((doc) => {
            contents.push({ id: doc.id, ...doc.data() }); // Adiciona cada documento ao array contents com seu ID
        });
        return contents; // Retorna o array de conteúdos
    },

    // Método para adicionar um novo conteúdo à coleção
    async addContent(data) {
        const { title, description, image, category } = data; // Desestruturação dos dados fornecidos
        if (!title || !description || !category) {
            throw new Error('Os campos título, descrição e categoria são obrigatórios.'); // Validação de campos obrigatórios
        }

        const content = { title, description, image: image || null, category }; // Cria um objeto de conteúdo
        const docRef = await contentsCollection.add(content); // Adiciona o novo conteúdo à coleção
        return { id: docRef.id, ...content }; // Retorna o documento adicionado com seu ID
    },

    // Método para atualizar um conteúdo existente na coleção
    async updateContent(id, data) {
        const docRef = contentsCollection.doc(id); // Referência ao documento pelo ID
        await docRef.update(data); // Atualiza o documento com os dados fornecidos
        return { id, ...data }; // Retorna o documento atualizado com seu ID
    },

    // Método para deletar um conteúdo da coleção
    async deleteContent(id) {
        const docRef = contentsCollection.doc(id); // Referência ao documento pelo ID
        await docRef.delete(); // Deleta o documento da coleção
        return { id }; // Retorna o ID do documento deletado
    },
};

// Exporta o modelo de conteúdo para uso em outras partes da aplicação
module.exports = ContentModel;
