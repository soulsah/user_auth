# Autenticação de Usuário em Node.js com TypeScript

Este é um projeto básico de autenticação de usuário desenvolvido em Node.js usando TypeScript. Ele inclui um servidor Express, integração com MongoDB para armazenamento de dados de usuário, e utiliza o padrão JWT para autenticação.

## Pré-requisitos

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community) (ou uma instância do MongoDB Atlas)

## Configuração

1. Clone o repositório:

   ```bash
   git clone https://github.com/andzedd/user_auth.git

2. Instale as dependências:

   ```
   @types/bcrypt
   @types/express
   @types/jsonwebtoken
   @types/mongoose
   @types/node
   bcrypt
   dotenv
   express
   jsonwebtoken
   mongoose
   nopt
   ts-node
   typescript

3. Crie um arquivo '.env' na raiz do projeto com as seguintes configurações:
   ```bash
   MONGODB_URI=sua_url_do_mongodb
   SECRET_KEY=secret_key_do_jwt
   PORT=porta_que_deseja_executar

4. Execute o projeto:
   ```bash
   npm start

5. Não esqueça de adicionar o script no package.json:
   ```bash
   "scripts": {
     "start": "ts-node src/app.ts"
   }

# Rotas
POST /auth/signup: Registra um novo usuário. Envie um JSON com username e password.

POST /auth/signin: Efetua login. Envie um JSON com username e password. Retorna um token JWT válido por 1 hora.

# Estrutura do Projeto
/src/models/user.ts: Modelo de dados do usuário.

/src/routes/authRoutes.ts: Rotas para registro e login de usuário.

/src/app.ts: Configuração do servidor Express e conexão com o MongoDB.
