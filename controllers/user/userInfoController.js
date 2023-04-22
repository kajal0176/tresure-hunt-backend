import CustomErrorHandler from "../../services/CustomErrorHandler.js";
import Joi from "joi";
import bcrypt from 'bcrypt';
import JwtService from "../../services/JwtService.js";
import user from "../../models/user.js";
import auth from "../../models/auth.js";


const userInfoController = {
    async userInfoCreate(req,res,next){
       console.log(req.body)
       const {email,
            avgTime,
            deadCounts,
            acc,
            softSkills} = req.body;

       const userInfo = new user({
            email,
            avgTime,
            deadCounts,
            acc,
            softSkills
        })

    try {
        const result = await userInfo.save();
        res.json({result})
    } catch (err) {
        return next(err)
    }

    },
    async userInfoGet(req,res,next){
       
        try {
            const result = await user.find();
            res.json({result})
        } catch (err) {
            return next(err)
        }
    
     },
    async userInfoGetById(req,res,next){
     
        try {
            // console.log(req.params)
            const candidate = await user.findById(req.params._id)
            res.json(candidate)
        } catch (error) {
            return next(error)
        }
      
 
     },
    async userRegisterdGet(req,res,next){
       
        try {
            const result = await auth.find();
            res.json({result})
        } catch (err) {
            return next(err)
        }
    
    },
    async userInfoUpdate(req,res,next){
       
        const {
             _id,
             email,
             avgTime,
             deadCounts,
             acc,
             softSkills} = req.body;
 
        const userInfo = new user({

             email,
             avgTime,
             deadCounts,
             acc,
             softSkills
         })
 
         try {
            const updateUserInfo = await userInfo.findOneAndUpdate({email:req.user.email},candidate, {
               new: true
             });
            res.json({sucess:1,message:"sucessfully updated"})
         } catch (err) {
                return next(err)
            }
 
     },
   
}

export default userInfoController