import e from "express";
import mongoose from "mongoose";

mongoose.connect('mongodb+srv://adrianorodrigoteixeira:armariolivre@clusterarmariolivre.tc5gdjg.mongodb.net/');


const register=mongoose.model("Login/Register",{
nome:{type:String,required:true,min:3,max:50},
cpf:{type:String,required:true,min:11,max:11},
email:{type:String,required:true,min:24,max:50},
senha:{type:String,required:true,min:3,max:50},
data:{type:Date,default:Date.now}
});

export default register