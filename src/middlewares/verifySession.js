import jwt from 'jsonwebtoken';
import User from '../models/User';
import { checkPassword } from "../services/Auth";
import authConfig from "../config/auth";

export default async function verifySession(req, res, next) {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !checkPassword(user, password)) {
        return res.status(401).json({ message: "Usuário ou Senha Incorretos" });
    }

    user.sessionCount = (user.sessionCount || 0) + 1;
    await user.save();

    if (user.sessionCount > 3) {
        return res.status(401).json({ message: "Limite de sessões excedido" });
    }

    req.user = {
        id: user.id,
        name: user.name,
        email: user.email,
        token: jwt.sign({ id: user.id }, authConfig.secret, {
            expiresIn: authConfig.expiresIn,
        }),
    };

    next();
}
