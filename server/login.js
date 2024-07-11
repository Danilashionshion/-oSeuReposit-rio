import register from "./connection.js";
import bcrypt from 'bcryptjs';
import Jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();

const midlogin = async (req, res) => {
    try {
        const verificationEmail = await register.findOne({ email: req.body.email });

        if (!verificationEmail) {
            return res.status(400).send("ERRO, Email ou Senha Inválidos!");
        }

        const password = verificationEmail.senha; 

        if (!password) {
            return res.status(400).send("ERRO, Email ou Senha Inválidos!");
        }

        const verificationPassword = await bcrypt.compareSync(req.body.senha, password);

        if (!verificationPassword) {
            return res.status(400).send("ERRO, Email ou Senha Inválidos!");
        }

        const token = Jwt.sign({ _id: verificationEmail._id }, process.env.secret);

        res.header("Authorization", token); 

        res.status(200).send({message:"Logado Com Sucesso!",token});
    } catch (error) {
        console.error("Erro ao fazer login:", error);
        res.status(500).send("Erro interno no servidor");
    }
};

export default midlogin;