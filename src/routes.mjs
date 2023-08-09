import { Router } from "express";
import UsersController from "./controllers/UsersController.mjs";
import auth from "./middlewares/auth.mjs";
import SessionsController from "./controllers/SessionsController.mjs";
import crypto from "node:crypto";
import sgMail from "@sendgrid/mail";

import User from "./models/User.mjs";
import { createPasswordHash } from "./services/Auth.mjs";

const routes = new Router();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const URL = process.env.FRONTEND_URL;


/* `routes.get("/", (req, res) => {
    res.send("API up");
});` is defining a route for the root endpoint ("/") of the API. When a GET request is made to the root endpoint, it will send the response "API up" back to the client. This is a simple way to check if the API is running and responding correctly. */
routes.get("/", (req, res) => {
    res.send("API up");
});

/* `routes.post("/sessions", SessionsController.create);` is defining a route for creating a new session or logging in a user. When a POST request is made to the "/sessions" endpoint, it will call the `create` method of the `SessionsController` to handle the request and create a new session for the user.*/
routes.post("/sessions", SessionsController.create);
/* `routes.post("/users", UsersController.create);` is defining a route for creating a new user. When a POST request is made to the "/users" endpoint, it will call the `create` method of the `UsersController` to handle the request and create a new user. */
routes.post("/users", UsersController.create);

/* The `routes.post("/forgot-password", async function (req, res) { ... })` function is responsible for handling the forgot password functionality.*/
routes.post("/forgot-password", async function (req, res) {
  
  crypto.randomBytes(20, async function (err, buf) {
    
    const token = buf.toString("hex");
    const expires = new Date();
    expires.setHours(expires.getHours() + 1);

    try {
      const user = await User.findOne({ email: req.body.email });

      if (!user) {
        return res
          .status(404)
          .send("Não existe nenhuma conta com esse endereço de e-mail.");
      }

      user.passwordResetToken = token;
      user.passwordResetExpires = expires;

      await user.save();

      const msg = {
        to: user.email,
        from: "contato@datainsight.com.br",
        subject: "Reset de Senha do QUIZ RELATÓRIO DE NEGÓCIO",
        text:
          "Você está recebendo esta mensagem porque você (ou outra pessoa) solicitou a redefinição de senha para sua conta.\n\n" +
          "Por favor, clique no seguinte link ou copie e cole-o em seu navegador para completar o processo:\n\n" +
          URL +          
          "/reset/" +
          token +
          "\n\n" +
          "Caso você não tenha feito essa solicitação, por favor, ignore este e-mail e sua senha permanecerá inalterada.\n",
      };

      sgMail
        .send(msg)
        .then(() => {
          res.send(
            "Um email foi enviado para " + user.email + " com mais instruções."
          );
        })
        .catch((error) => {
          console.error(error);
          res.status(500).send("Erro ao enviar o e-mail.");
        });
    } catch (err) {
      console.error(err);
      res.status(500).send("Ocorreu um erro ao procurar o usuário.");
    }
  });
});

/* The `routes.post("/reset/:token", async (req, res) => { ... })` function is responsible for handling the password reset functionality. */
routes.post("/reset/:token", async (req, res) => {
  const token = req.params.token;
  const newPassword = req.body.password;

  try {
    
    const hashedPassword = await createPasswordHash(newPassword);

    
    const updateResult = await User.updateOne(
      {
        passwordResetToken: token,
        passwordResetExpires: { $gt: Date.now() },
      },
      {
        $set: {
          password: hashedPassword,
          passwordResetToken: undefined,
          passwordResetExpires: undefined,
        },
      }
    );

    
    if (updateResult.nModified === 0) {
      return res.status(400).send("Token inválido ou expirado.");
    }

    res.send("Senha alterada com sucesso.");
  } catch (error) {
    console.error("Erro ao redefinir a senha:", error.message, error.stack);
    res.status(500).send("Erro ao redefinir a senha");
  }
});


/* `routes.get("/users", auth, UsersController.index);` is defining a route for retrieving all users. When a GET request is made to the "/users" endpoint, it will first call the `auth` middleware to authenticate the request. If the request is authenticated, it will then call the `index` method of the `UsersController` to handle the request and retrieve all users. */
routes.get("/users", auth, UsersController.index);
/* `routes.delete("/users/:id", auth, UsersController.destroy);` is defining a route for deleting a user. When a DELETE request is made to the "/users/:id" endpoint, it will first call the `auth` middleware to authenticate the request. If the request is authenticated, it will then call the `destroy` method of the `UsersController` to handle the request and delete the user with the specified `id`. */
routes.delete("/users/:id", auth, UsersController.destroy);
/* `routes.get("/users/:id", auth, UsersController.show);` is defining a route for retrieving a specific user by their `id`. When a GET request is made to the "/users/:id" endpoint, it will first call the `auth` middleware to authenticate the request. If the request is authenticated, it will then call the `show` method of the `UsersController` to handle the request and retrieve the user with the specified `id`. */
routes.get("/users/:id", auth, UsersController.show);
/* `routes.patch("/users/:id", auth, UsersController.update);` is defining a route for updating a user. When a PATCH request is made to the "/users/:id" endpoint, it will first call the `auth` middleware to authenticate the request. If the request is authenticated, it will then call the `update` method of the `UsersController` to handle the request and update the user with the specified `id`. */
routes.patch("/users/:id", auth, UsersController.update);

export default routes;
