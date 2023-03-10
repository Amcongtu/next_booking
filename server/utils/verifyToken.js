import jwt from "jsonwebtoken"
import { createError } from "../utils/error.js"


export const verifyToken = (req,res,next)=>{
    const token = req.cookies.access_token;
    const JWT_process = process.env.JWT
    if(!token){
        return next(createError(401,"You are not authenticated!"));
    }
    jwt.verify(token,JWT_process,(err,user)=>{
        if(err){
            return next(createError(403,"Token is not valid!"));
        }
        req.user = user;
        next()
    })
}

export const verifyUser = (req,res,next)=>{
    verifyToken(req,res,next,()=>{
        if(req.user.id === req.params.id){
        next();
        }else{
            if(err) return next(createError(403,"You are not authorized!"));
        }
    })
}

export const verifyAdmin = (req,res,next)=>{
    verifyToken(req,res,next ,()=>{
        if(req.params.id){
        next();
        }else{
            if(err) return next(createError(403,"You are not authorized!"));
        }
    })
}