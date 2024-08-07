import express from 'express';
import register from './connection.js';
import midlogin from './login.js';
import doeagora from './connection3.js';
import cors from 'cors'
import midlogout from './logout.js';
import midregister from './midregister.js';
import dotenv from 'dotenv'
import authenticateToken from './logout.js';

dotenv.config()

const app=express()
const PORT=process.env.PORT||3200

app.use(express.json())
app.use(cors({
<<<<<<< HEAD
    origin :["https://pi-9e4y.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true
}))
    
=======
    origin :["https://pi-9e4y-itr8dz4nx-danilashionshions-projects.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true
}))

>>>>>>> f44788ac4533d4c2557055b449feeb31f93dd050

app.get("/register",async(req,res)=>{
    const src=await register.find()
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

app.post("/register",midregister)

app.post("/logout", midlogout)

app.post("/login",midlogin);

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

    app.post('/logout', authenticateToken, (req, res) => {
        const token = req.headers['authorization'].split(' ')[1];
        revokedTokens.push(token);
        res.status(200).send("Logout realizado com sucesso!");
    });
    
    // Rota protegida para teste
    app.get('/teste', authenticateToken, (req, res) => {
        res.json(req.user);
    })


app.listen(PORT,()=>{
    console.log("Server Running!.")
})
