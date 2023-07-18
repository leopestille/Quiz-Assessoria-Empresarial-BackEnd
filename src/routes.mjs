import { Router } from "express";
import UsersController from "./controllers/UsersController.mjs";
import auth from "./middlewares/auth.mjs";
import SessionsController from "./controllers/SessionsController.mjs";

const routes = new Router();

routes.get("/", (req, res) => {
    res.send("API up");
});

routes.post("/sessions", SessionsController.create);
routes.post("/users", UsersController.create);

routes.use(auth);

routes.get("/users", UsersController.index);
routes.delete("/users/:id", UsersController.destroy);
routes.get("/users/:id", UsersController.show);
routes.patch("/users/:id", UsersController.update);

export default routes;
