import "dotenv/config";

/* The code is exporting an object with three properties: `secret`, `expiresIn`, and `export default`. */
export default {
    secret: process.env.APP_SECRET,
    expiresIn: "90d",
}