# InfoMural

O **InfoMural** é um sistema de mural de informações para empresas, com uma interface administrativa onde os administradores podem adicionar, editar e excluir conteúdos. O mural exibe essas informações de maneira organizada e acessível aos usuários finais. O sistema é composto por um backend que gerencia os dados e um frontend para a interface de usuário.

## Funcionalidades

* **Mural Público:** Exibe informações para todos os usuários da empresa, como anúncios, atualizações ou notícias.

* **Painel Administrativo:** Permite aos administradores adicionar, editar e excluir conteúdos.

* **Exibição Responsiva:** O mural se adapta a diferentes tamanhos de tela (desktop, tablet, celular).

## Tecnologias Utilizadas

### Backend

* **Node.js:** Ambiente de execução JavaScript no servidor.
* **Express.js:** Framework para a construção da API RESTful.
* **Firebase:** Banco de dados em tempo real para armazenar os conteúdos do mural.
* **MySQL:** Banco de dados para registrar logs de atividades administrativas.
* **Axios:** Para fazer requisições HTTP no frontend.

### Frontend

* **React.js:** Biblioteca para construção da interface de usuário.
* **Axios:** Para realizar requisições HTTP ao backend.
* **CSS3:** Para estilização da interface.

## Como Executar o Projeto

1. **Backend**

Para rodar o backend, siga os passos abaixo:

    1. Navegue até a pasta backend/ e instale as dependências:
        cd backend
        npm install

    2. Crie um arquivo .env na raiz da pasta backend/ com as váriaveis de ambiente necessárias, como o acesso ao Firebase e o banco de dados MySQL.

    3. Inicie o servidor:
        npm start

Isso iniciará o backend na porta 3000 (ou conforme configurado no arquivo .env).

2.**Frontend**

Para rodar o **frontend**, siga os passos abaixo:

    1. Navegue até a pasta frontend/ e instale as dependências:
        cd frontend
        npm install

    2. Crie um arquivo .env na raiz da pasta frontend/ com a URL da API do backend:
        REACT_APP_API_URL=http://localhost:3000/api

    3. Inicie o servidor de desenvolvimento:
        npm start

Isso iniciará o frontend na porta 3000 (ou conforme configurado no React).

## Estrutura do Projeto

A estrura do projeto é dividida em backend e frontend:

/infomural
│
├── backend/           # Código do backend (API, banco de dados)
│   ├── config/         # Arquivos de configuração (ex.: conexão com o Firebase)
│   ├── controllers/    # Lógica de controle das rotas
│   ├── models/         # Modelos de dados
│   ├── routes/         # Definição das rotas da API
│   └── app.js          # Arquivo principal para iniciar o servidor
│
├── frontend/           # Código do frontend (React)
│   ├── src/
│   │   ├── components/ # Componentes React (ex.: InfoDisplay, AdminPanel)
│   │   ├── services/   # Arquivos de configuração para comunicação com a API
│   │   └── App.js      # Arquivo principal do React
│   └── .env            # Variáveis de ambiente para o frontend
│
└── README.md           # Documento explicativo do projeto

## Como Contribuir

1. Faça um fork do repositório.
2. Crie uma branch para sua funcionalidade ou correção de bug:
    git checkout -b minha-nova-funcionalidade
3. Realize as alterações desejadas.
4. Teste sua alterações para garantir que o sistema funciona conforme esperado.
5. Envie um **pull request** com uma descrição clara das alterações feitas.

## Dicas Gerais

* **Desenvolvimento Local:** Certifique-se de que o backend e o frontend estejam rodando localmente para testar a integração.

* **Testes de API:** Utilize ferramentas como Postman ou Insomnia para testar as rotas da API do backend.

* **Debugging:** Se o frontend não estiver carregando os dados corretamente, utilize as ferramentas de desenvolvedor do navegador para inspecionar as requisições.

## Licença

Este projeto está licenciado sob a Licença MIT.

## Explicação do que cada seção faz

* **Tecnologias Utilizadas:** Uma visão geral das tecnologias usadas no backend e frontend.

* **Como Executar o Projeto:** Como configurar e rodar tanto o backend quanto o frontend localmente.

* **Estrutura do Projeto:** Mostra como o código está organizado nas pastas e arquivos.

* **Como Contribuir:** Instruções para desenvolvedores que desejam contribuir para o projeto.

* **Dicas Gerais:** Recomendações para facilitar o desenvolvimento e o teste do projeto.

* **Licença:** Se o projeto for aberto, é uma boa prática adicionar uma seção sobre a licença, indicando os direitos de uso e modificação.

Esse **README.md** oferece uma visão clara e detalhada sobre o projeto como um todo, tornando mais fácil para qualquer desenvolvedor ou colaborador entender como configurar e contribuir para o projeto **InfoMural**.
