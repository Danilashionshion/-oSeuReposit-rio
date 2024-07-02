import express from 'express';
import register from './connection.js';
import bcrypt from 'bcryptjs'
import cors from 'cors'

const app=express();
const PORT=3240


app.use(express.json())
app.use(cors(''))

app.get("/",async(req,res)=>{
const src=await register.find();
res.send(src)
});

app.post("/",async(req,res)=>{

const verification=await register.findOne({email:req.body.email});

if(verification) return res.status(400).send("Email já Existente!")
    const cad=new register({
        nome:req.body.nome,
        cpf:req.body.cpf,
        email:req.body.email,
        senha:bcrypt.hashSync(req.body.senha)
    });
    
    try {
        const sucess=cad.save()
        res.send("Sucesso!")
    } catch (error) {
        console.log(error);
        res.status(400).send("ERRO")
    }
})


























app.listen(PORT,()=>{
    console.log("Server Running!.")
})