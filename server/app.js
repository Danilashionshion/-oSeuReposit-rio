import express from 'express';
import register from './connection.js';
import login from './connection2.js';
import doeagora from './connection3.js';
import bcrypt from "bcryptjs"
import cors from 'cors'


const app=express()
const PORT=3200

app.use(express.json())
app.use(cors('http://localhost:5173'))


app.get("/register",async(req,res)=>{
    const src=await register.find()
    res.send(src)
});
app.get("/login",async(req,res)=>{
    const src=await login.find()
    res.send(src)
});

app.delete("/:id",async(req,res)=>{
const id=req.params.id



try {
    const sucess=await register.deleteOne({_id:id})
    res.send("EXCLUIDO COM SUCESSO!")
} catch (error) {
    console.log(error)
    res.status(404).send("ERRO")
}
 

})

app.post("/register",async (req,res)=>{
    let cad=null
    const verification=await register.findOne({email:req.body.email})
    if(verification)
        {return res.status(400).send("Email Já Existente!.")}
    else{

        cad=new register({
            nome:req.body.nome,
            cpf:req.body.cpf,
            email:req.body.email,
            senha:bcrypt.hashSync(req.body.senha)

    })};

        try {
            const sucess=await cad.save()
            res.send("REGISTRADO COM SUCESSO!")
        } catch (error) {
            console.log(error)
            res.status(400).send("ERRO")
        }
})



app.post("/login",async (req,res)=>{
    const verification=await register.findOne({email:req.body.email})
    if(!verification)return res.status(400).send("Email ou senha incorretos!.");

    const verificationSenha=await bcrypt.compareSync(req.body.senha,verification.senha) 
    if(verificationSenha==false)return res.status(400).send("Email ou senha incorretos!.");

    const log=new login ({
        email:req.body.email,
        senha:bcrypt.hashSync(req.body.senha)
    })

    try { log.save()
        res.send("logado com sucesso")
    } catch (error) {
        console.log(error)  
    }
});

app.get("/doe", async (req, res) => {
    const Armario = await doeagora.find();
    res.send(Armario)
})

app.post("/doe", async (req, res) => {
    const name = req.body.nome;
    const sobrenome = req.body.sobrenome;
    const donate = req.body.donate;
    const cep = req.body.cep;
    const rua = req.body.rua;
    const numero=req.body.numero
    const bairro = req.body.bairro;
    const cidade = req.body.cidade;
    const estado = req.body.estado;

    const people = new doeagora({

        nome: name,
        sobrenome: sobrenome,
        donate: donate,
        cep: cep,
        rua: rua,
        numero:numero,
        bairro: bairro,
        cidade: cidade,
        estado: estado

    });
    try {
      const sucess=await people.save();
    res.send("Inserido Com Sucesso!")
    } catch (error) {
        console.error(error)
    }
    });




app.listen(PORT,()=>{
    console.log("Server Running!.")
})
