import jwt from 'jsonwebtoken';
import User from '../models/User';
import { checkPassword } from "../services/Auth";
import authConfig from "../config/auth";

class SessionController {
    async create(req, res) {
        return res.status(200).json(req.user);
    }
}


export default new SessionController();