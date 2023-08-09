import mongoose from "mongoose";
import config from "../config/database.mjs";

/* The `class Database` is defining a class called `Database`. Inside the class, there is a constructor method that is responsible for establishing a connection to a MongoDB database using the `mongoose.connect()` method. The connection URL is provided through the `config.url` property. The resulting connection object is assigned to the `this.connection` property of the `Database` instance. */
class Database {
    constructor() {
        this.connection = mongoose.connect(config.url);
    }
}

export default new Database();