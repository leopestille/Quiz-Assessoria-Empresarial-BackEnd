# Quiz Assessoria Empresarial — API

API REST que dá suporte ao [Quiz de Assessoria Empresarial](https://github.com/leopestille/Quiz-Assessoria-Empresarial). Responsável por autenticação, persistência das respostas do quiz e envio de e-mails com o resultado.

🔗 **Base URL:** [quiz-assessoria-empresarial-back-end.vercel.app](https://quiz-assessoria-empresarial-back-end.vercel.app)
🎨 **Front-end:** [Quiz-Assessoria-Empresarial](https://github.com/leopestille/Quiz-Assessoria-Empresarial)

## Funcionalidades

- Autenticação com JWT e senhas criptografadas com bcrypt
- Cadastro e gerenciamento de usuários
- Registro e consulta das respostas e resultados do quiz
- Envio de e-mails transacionais via SendGrid
- CORS habilitado para consumo pelo front-end

## Tecnologias

| Categoria | Ferramentas |
| --- | --- |
| Runtime | Node.js (ES Modules) |
| Framework | Express 5 |
| Banco de dados | MongoDB via Mongoose 7 |
| Autenticação | jsonwebtoken, bcryptjs |
| E-mail | @sendgrid/mail |
| Utilitários | cors, dotenv |
| Dev | nodemon, sucrase |
| Deploy | Vercel |

## Como rodar localmente

Pré-requisitos: [Node.js](https://nodejs.org/) 18+, npm e uma instância do MongoDB (local ou [Atlas](https://www.mongodb.com/atlas)).

```bash
# clonar o repositório
git clone https://github.com/leopestille/Quiz-Assessoria-Empresarial-BackEnd.git
cd Quiz-Assessoria-Empresarial-BackEnd

# instalar as dependências
npm install

# criar o arquivo de variáveis de ambiente
cp .env.example .env   # ou crie o .env manualmente

# iniciar em modo de desenvolvimento
npm run dev
```

## Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
PORT=3000
MONGO_URI=mongodb+srv://usuario:senha@cluster.mongodb.net/quiz
JWT_SECRET=sua_chave_secreta
SENDGRID_API_KEY=SG.xxxxxxxxxxxx
SENDGRID_FROM_EMAIL=contato@seudominio.com
```

> O arquivo `.env` está no `.gitignore` e **não deve** ser versionado.

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Sobe o servidor com nodemon (reinicia a cada alteração) |
| `npm start` | Executa o servidor em modo de produção |

## Endpoints

| Método | Rota | Descrição | Autenticação |
| --- | --- | --- | --- |
| `POST` | `/users` | Cria um novo usuário | Não |
| `POST` | `/auth` | Autentica e retorna o token JWT | Não |
| `POST` | `/quiz` | Registra as respostas do quiz | Sim |
| `GET` | `/quiz` | Lista os resultados salvos | Sim |
| `GET` | `/quiz/:id` | Retorna um resultado específico | Sim |

Rotas protegidas exigem o token no cabeçalho:

```http
Authorization: Bearer <seu_token_jwt>
```

## Estrutura do projeto

```
├── .vscode/           # Configurações do editor
├── src/               # Código-fonte da API
│   └── server.js      # Ponto de entrada
├── nodemon.json       # Configuração do nodemon
├── SECURITY.md        # Política de segurança
└── package.json
```

## Deploy

A API está hospedada na Vercel. Pushes na branch `main` disparam um novo deploy automaticamente. Lembre-se de cadastrar todas as variáveis de ambiente no painel do projeto (**Settings → Environment Variables**).

## Segurança

Para reportar vulnerabilidades, consulte o arquivo [SECURITY.md](SECURITY.md).

## Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/minha-feature`)
3. Commit suas alterações (`git commit -m 'feat: adiciona minha feature'`)
4. Envie a branch (`git push origin feature/minha-feature`)
5. Abra um Pull Request

## Licença

Distribuído sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Autor

Desenvolvido por [Leonardo Pestille](https://github.com/leopestille).
