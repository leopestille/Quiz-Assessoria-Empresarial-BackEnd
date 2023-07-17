import { Router } from "express";
import UsersController from "./controllers/UsersController";
import auth from "./middlewares/auth";
import SessionsController from "./controllers/SessionsController";

const routes = new Router();

routes.post("/sessions", SessionsController.create);
routes.post("/users", UsersController.create);

routes.use(auth);

routes.get("/users", UsersController.index);
routes.delete("/users/:id", UsersController.destroy);
routes.get("/users/:id", UsersController.show);
routes.put("/users/:id", UsersController.update);

export default routes;
