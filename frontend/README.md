Este arquivo explicará como configurar, executar e entender o frontend (React.js com Axios para consumir a API).

# InfoMural Frontend

Este é o frontend do projeto **InfoMural**, que exibe os conteúdos do mural e fornece um painel administrativo para gerenciar as informações.

## Tecnologias Utilizadas
- **React.js**: Biblioteca para construção da interface de usuário.
- **Axios**: Para realizar requisições HTTP ao backend.
- **CSS3**: Para estilização da interface.

## Como Configurar

### 1. Instalar Dependências
Clone o repositório e navegue até a pasta `frontend/`:

```bash
git clone <URL_DO_REPOSITORIO>
cd frontend
npm install

#-----------------------------------------------------------------------------------#

Configurar Variáveis de Ambiente

Crie um arquivo .env na raiz do diretório frontend/ e adicione a variável de ambiente para a URL da API do backend: REACT_APP_API_URL=http://localhost:3000/api

Iniciar o Servidor

Para rodar o frontend, execute o seguinte comando: npm start

Isso irá iniciar o servidor de desenvolvimento na porta padrão do React (padrão 3000).

Estrutura do Projeto

Componentes Principais

InfoDisplay.js: Componente que exibe os conteúdos do mural. Conecta-se à API para recuperar os dados e exibi-los de forma organizada.

AdminPanel.js: Painel administrativo que permite adicionar, editar e excluir conteúdos. Conecta-se à API para realizar operações no banco de dados.

Serviços

api.js: Arquivo de configuração do Axios para fazer requisições HTTP ao backend.

Funcionalidades

Mural Público: Exibe os conteúdos do mural para os usuários finais.

Painel Administrativo: Permite que os administradores adicionem, editem e excluam conteúdos. Só é acessível por administradores.

Testar o Frontend

Abra o painel administrativo e adicione, edite e exclua conteúdos.

Verifique se as mudanças são refletidas no mural público.

Teste o carregamento de dados no componente InfoDisplay.js e certifique-se de que o conteúdo é exibido corretamente.

Como Contribuir

Faça um fork do repositório.

Crie uma branch para sua funcionalidade (git checkout -b minha-nova-funcionalidade).

Realize as alterações e envie um pull request.

Dicas Gerais:

Desenvolvimento Local: Certifique-se de que o backend esteja rodando localmente antes de testar o frontend.

Testes de API: Utilize Postman ou Insomnia para testar as rotas de API do backend.

Debugging: Se o frontend não estiver carregando os dados corretamente, verifique as requisições da API usando as ferramentas de desenvolvedor do navegador.