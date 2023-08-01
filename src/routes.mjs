import { Router } from "express";
import UsersController from "./controllers/UsersController.mjs";
import auth from "./middlewares/auth.mjs";
import SessionsController from "./controllers/SessionsController.mjs";
import crypto from "node:crypto";
import nodemailer from "nodemailer";
import User from "./models/User.mjs";

const routes = new Router();

routes.get("/", (req, res) => {
    res.send("API up");
});

routes.post("/sessions", SessionsController.create);
routes.post("/users", UsersController.create);

routes.post("/forgot-password", function(req, res) {
    crypto.randomBytes(20, function(err, buf) {
        const token = buf.toString("hex");

        User.findOne({ email: req.body.email }, function(err, user) {
            if (!user) {
                return res
                  .status(404)
                  .send(
                    "Não existe nenhuma conta com esse endereço de e-mail."
                  );
            }
            user.passwordResetToken = token;
            user.passwordResetExpires = Date.now() + 3600 * 1000;

            user.save().then(() => {
                const smtpTransport = nodemailer.createTransport({
                    service: "Gmail",
                    auth: {
                        user: "leonardopestille@gmail.com",
                        pass: "Rhauane@103",                        
                    },
                });
            const mailOptions = {
              to: user.email,
              from: "leonardopestille@hotmail.com",
              subject: "Reset de Senha do QUIZ RELATÓRIO DE NEGÓCIO",
              text:
                "Você está recebendo esta mensagem porque você (ou outra pessoa) solicitou a redefinição de senha para sua conta.\n\n" +
                "Por favor, clique no seguinte link ou copie e cole-o em seu navegador para completar o processo:\n\n" +
                "http://" +
                req.headers.host +
                "/reset/" +
                token +
                "\n\n" +
                "Caso você não tenha feito essa solicitação, por favor, ignore este e-mail e sua senha permanecerá inalterada.\n",
            };

            smtpTransport.sendMail(mailOptions, function(err) {
                res.send(
                  "Um email foi enviado para ' + user.email + ' com mais instruções."
                );
            })
            })
        })
    })
})

routes.use(auth);

routes.get("/users", UsersController.index);
routes.delete("/users/:id", UsersController.destroy);
routes.get("/users/:id", UsersController.show);
routes.patch("/users/:id", UsersController.update);

export default routes;
