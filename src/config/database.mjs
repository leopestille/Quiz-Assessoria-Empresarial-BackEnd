import "dotenv/config";

/* The code is exporting an object with a property called `url`. The value of the `url` property is set to the value of the `MONGODB_URI` environment variable. This allows other modules to import this object and access the `url` property. */
export default {
    url: process.env.MONGODB_URI,
}