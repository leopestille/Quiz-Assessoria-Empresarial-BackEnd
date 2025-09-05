import jwt from 'jsonwebtoken';
import User from '../models/User.mjs';
import { checkPassword } from "../services/Auth.mjs";
import authConfig from "../config/auth.mjs";


class SessionController {

    async create(requisition, response) {
        const { email, password } = requisition.body;

        const user = await User.findOne({ email: { $eq: email } });

        if (!user) {
            response.status(401).json({ message: "Usuário ou Senha Incorretos" });
            return;
        }

        if (!checkPassword(user, password)) {
            response.status(401).json({ message: "Usuário ou Senha Incorretos" });
            return;
        }

        const { id, name } = user;

        user.sessionCount = (user.sessionCount || 0) + 1;

        await user.save();

        if (user.sessionCount > 3) {
            response.status(401).json({ message: "Limite de sessões excedido" });
            return;
        }
        return response.status(200).json({
            user: {
                id,
                name,
                email
            },
            token: jwt.sign({ id }, authConfig.secret, {
                expiresIn: authConfig.expiresIn,
            })
        });
    }
}


export default new SessionController();