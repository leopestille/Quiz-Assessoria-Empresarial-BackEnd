import express from 'express';
import cors from 'cors';
import routes from './routes.mjs';
import "./database/index.mjs";

/* The code defines a class called `App` that represents the application server. The `App` class has three methods: `constructor()`, `middlewares()`, and `routes()`. */
class App {
    /* The `constructor()` method is a special method that is automatically called when an object of the class is created. In this case, it is used to initialize the `server` property of the `App` class with an instance of the `express` server. */
    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
    }

    /* The `middlewares()` method is responsible for setting up the middleware functions for the Express server. Middleware functions are functions that have access to the request and response objects, and can modify them or perform additional operations before the request reaches the route handler. */
    middlewares() {
        this.server.use(cors());
        this.server.use(express.json());
    }

    /* The `routes()` method is responsible for setting up the routes for the application. It uses the `use()` method of the `express` server to mount the `routes` object, which contains all the defined routes, onto the server. This allows the server to handle incoming requests and direct them to the appropriate route handlers. */
    routes() {
        this.server.use(routes);
    }
}

export default new App().server;