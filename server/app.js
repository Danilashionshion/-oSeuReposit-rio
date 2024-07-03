import express from 'express';
import register from './connection.js';
import bcrypt from "bcryptjs"



const app=express()
const PORT=3200

app.use(express.json())



app.get("/",async(req,res)=>{
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

app.post("/",async (req,res)=>{
    const verification=await register.findOne({email:req.body.email})
    if(verification)return res.status(400).send("Email Já Existente!.");

        const cad=new register({
            nome:req.body.nome,
            cpf:req.body.cpf,
            email:req.body.email,
            senha:bcrypt.hashSync(req.body.senha)

        });

        try {
            const sucess=await cad.save()
            res.send("REGISTRADO COM SUCESSO!")
        } catch (error) {
            console.log(error)
            res.status(400).send("ERRO")
        }
})






app.listen(PORT,()=>{
    console.log("Server Running!.")
})