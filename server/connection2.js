import mongoose from "mongoose";

mongoose.connect("mongodb+srv://adrianorodrigoteixeira:armariolivre@clusterarmariolivre.tc5gdjg.mongodb.net/");

const login=mongoose.model("Login",{
    email:{type:String,required:true,min:24,max:200},
    senha:{type:String,required:true,min:6,max:200},
    });
    
export default (login)