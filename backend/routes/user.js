const express=require('express')
const route=express.Router()
const usermodel=require('../models/user_model')
route.post('/login',async (req,res)=>{
    try{
        const {
            username,password
        }=req.body;
        const result= await usermodel.find({
            username,password
        })
        if(result){
            return res.status(210).json({message : "User found"})
        }
        else{
            return res.status(407).json({message:"Not found"})
        }
    }
   catch(err){
        console.log(err);
   }
}
)
route.post('/registration',async (req,res)=>{
    try{
        const {
            Fullname,Date_of_birth,email,phone,Username,password,confirm_password
        }=req.body;
        const result= await usermodel.create({
          Fullname,Date_of_birth,email,phone,Username,password,confirm_password
        })
        if(result){
            return res.status(210).json({message : "User Created"})
        }
        else{
            return res.status(407).json({message:"Not created"})
        }
    }
   catch(err){
        console.log(err);
   }
}
)
module.exports=route