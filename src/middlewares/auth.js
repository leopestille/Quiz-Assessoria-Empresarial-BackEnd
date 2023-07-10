import jwt from "jsonwebtoken";
import { promisify } from "util";
import authConfig from "../config/auth";

export default async (requisition, response, next) => {
    const auth = requisition.headers.authorization;

    if (!auth) {
        return response.status(401).json({ error: "Token não informado" });
    }

    const [, token] = auth.split(" ");

    try {
        const decoded = await promisify(jwt.verify)(token, authConfig.secret);
        requisition.userId = decoded.id;
        return next();
    } catch (err) {
        return response.status(401).json({ error: "Token inválido" });
    }
};