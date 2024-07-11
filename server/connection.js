import { text } from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();

const IP=process.env.REGISTER_DB
mongoose.connect(IP);

const register=mongoose.model("Register",{
nome:{type:String,required:true,min:10,max:50},
cpf:{type:String,required:true,min:11,max:11},
email:{type:String,required:true,min:24,max:200},
senha:{type:String,required:true,min:6,max:200},
data:{type:Date,default:Date.now}
});


    
export default (register)