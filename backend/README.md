# InfoMural Backend

Este é o backend do projeto **InfoMural**, que fornece uma API para exibir e gerenciar conteúdos no mural de informações de uma empresa.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express.js**: Framework web para Node.js.
- **MySQL**: Banco de dados relacional para logs de atividades.
- **Firebase**: Banco de dados em tempo real para armazenar os conteúdos do mural.
- **dotenv**: Para gerenciar variáveis de ambiente.
- **body-parser**: Para processar as requisições HTTP.

## Como Configurar

### 1. Instalar Dependências

Clone o repositório e navegue até a pasta `backend/`:

```bash
git clone <URL_DO_REPOSITORIO>
cd backend
npm install

#-----------------------------------------------------------------------------------#

Configurar Variáveis de Ambiente

Antes de rodar o servidor, você precisa configurar as variáveis de ambiente. Isso garante que o backend se conecte ao banco de dados MySQL e ao Firebase corretamente.

Crie um arquivo .env na raiz do diretório backend/.

Adicione as seguintes variáveis de ambiente no arquivo .env:

PORT=3000
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=senha
MYSQL_DATABASE=infomural
FIREBASE_API_KEY=<SUA_CHAVE_DO_FIREBASE>
FIREBASE_AUTH_DOMAIN=<SEU_DOMINIO_DO_FIREBASE>
FIREBASE_DATABASE_URL=<URL_DO_SEU_BANCO_DE_DADOS_FIREBASE>
FIREBASE_PROJECT_ID=<ID_DO_PROJETO_FIREBASE>
FIREBASE_STORAGE_BUCKET=<SEU_BUCKET_FIREBASE>
FIREBASE_MESSAGING_SENDER_ID=<ID_DO_REMETENTE_MENSAGEM>
FIREBASE_APP_ID=<ID_DO_APP_FIREBASE>

Substitua os valores de <SUA_CHAVE_DO_FIREBASE>, <SEU_DOMINIO_DO_FIREBASE>, etc., com as credenciais do seu projeto Firebase.

Você pode encontrar essas informações no Console do Firebase, na seção de configurações do seu projeto.

Salve o arquivo .env.

Agora, o backend estará configurado para se conectar ao banco de dados e ao Firebase.

#-----------------------------------------------------------------------------------#

Iniciar o Servidor

Para rodar o backend, execute o seguinte comando: npm start

Isso irá iniciar o servidor na porta especificada no arquivo .env (padrão 3000).

Endpoints da API

Rota Pública (Exibição de Conteúdos)

GET /api/public/contents: Retorna todos os conteúdos do mural armazenados no Firebase.

Rota Administrativa (Gestão de Conteúdos)

POST /api/admin/contents: Adiciona um novo conteúdo no mural.

PUT /api/admin/contents/:id: Edita um conteúdo existente.

DELETE /api/admin/contents/:id: Exclui um conteúdo do mural.

Log de Atividades

Todas as ações de administração (adicionar, editar, excluir) geram registros de log no banco de dados MySQL.

Como Testar

Use ferramentas como Postman ou Insomnia para testar as rotas da API:

Teste as rotas GET, POST, PUT, DELETE usando os dados de exemplo.

Verifique se os logs estão sendo registrados corretamente no banco de dados MySQL.




