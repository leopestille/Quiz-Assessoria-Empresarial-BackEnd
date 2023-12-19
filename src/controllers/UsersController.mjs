import User from "../models/User.mjs";
import { createPasswordHash } from "../services/Auth.mjs";


class UsersController {

    async index(requisition, response) {
        try {
            const users = await User.find();
            return response.json(users);
        } catch (err) {
            console.error(err);
            return response.status(500).json({ message: "Usuário não encontrado" })
        }
    }


    async show(requisition, response) {
        try {
            const { id } = requisition.params;
            const user = await User.findById(id);

            if (!user) {
                return response.status(404).json({ message: "Usuário não encontrado" });
            }

            return response.json(user);
        } catch (err) {
            console.error(err);
            return response.status(500).json({ message: "Erro interno do Servidor" })
        }
    }


    async create(requisition, response) {
        try {
            const { name, email, password } = requisition.body;

            const user = await User.findOne({ email });

            if (user) {
                return response.status(400).json({ message: "Usuário Já cadastrado." });
            }

            const encryptedPassword = await createPasswordHash(password);

            const newUser = await User.create({ name, email, password: encryptedPassword, sessionCount: 0, selections: [], pdfData: "" });

            return response.status(201).json(newUser);
        } catch (err) {
            console.error(err);
            return response.status(500).json({ message: "Usuário ou Senha inválidos" })
        }
    }


    async update(requisition, response) {
        try {
            const { id } = requisition.params;
            let updateData = requisition.body;


            if (updateData.password) {
                updateData.password = await createPasswordHash(updateData.password);
            }

            if (updateData.pdfBase64) {
                updateData.pdfData = updateData.pdfBase64;
            }

            if (updateData.name) {
                updateData.name = updateData.name;
            }

            if (updateData.selections) {
                updateData.selections = updateData.selections;
            }

            const user = await User.findById(id);

            if (!user) {
                return response.status(404).json({ message: "Usuário não encontrado" });
            }

            await user.updateOne(updateData);

            return response.status(200).json({ message: "Usuário atualizado com sucesso" });
        } catch (err) {
            console.error(err);
            return response.status(500).json({ message: "Não foi possível atualizar o usuário" });
        }
    }


    
    async destroy(requisition, response) {
        try {
            const { id } = requisition.params;
            const user = await User.findById(id);

            if (!user) {
                return response.status(404).json({ message: "Usuário não encontrado" });
            }
            await user.deleteOne();

            return response.status(200).json({ message: "Usuário deletado com sucesso" });
        } catch (error) {
            console.error(err);
            return response.status(500).json({ message: "Não foi possível deletar o usuário" });
        }
    }
}

export default new UsersController();