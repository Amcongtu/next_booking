import User from "./../models/User.js"
import bcrypt from "bcryptjs"
import { createError } from './../utils/error.js';
import jwt from 'jsonwebtoken';


export const register = async (req,res,next)=>{
    try{
        req.body = JSON.parse(req.body) 
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password,salt);
        
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
        })
        await newUser.save();
        res.status(200).send("User has been created")
    }catch(err){
        next(err)
    }
}
export const login = async (req,res,next)=>{
    try{
        var username = JSON.parse(req.body)
        const user = await User.findOne({username:username.username});
        
        if(!user) return next(createError(404,"User not found!"));

        const isPasswordCorrect = await bcrypt.compare(username.password,user.password);

        if(!isPasswordCorrect) return next(createError(400,"Wrong password or username!"));
        const token = jwt.sign(
            { id:user._id, isAdmin:user.isAdmin},
            process.env.JWT
        );
        const {password, isAdmin,...otherDetails} = user._doc;  
        res
        .setHeader("set-cookie", `access_token=${token}; Path=/;HttpOnly`)
        .status(200)
        .json({...otherDetails});
    }catch(err){
        next(err)
    }
}