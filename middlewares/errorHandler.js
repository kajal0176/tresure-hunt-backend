import { DEBUG_MODE } from "../config/index.js";

import CustomErrorHandler from "../services/CustomErrorHandler.js";
import Joi from "joi";


const errorHandler = (err,req,res,next)=>{
     let statusCode = 500;
     let data = {
         status:0,
         message:'Internal server error',
         ...(DEBUG_MODE === 'true' && {orginalError:err.message})
     }

     if (err instanceof Joi.ValidationError) {
          statusCode = 422;
          data = {
              status:0,
              message:err.message
          }
     }

     if (err instanceof CustomErrorHandler) {
         statusCode = err.status;
         data = {
             status:0,
             message:err.msg
         }
     }

     return res.json(data).status(statusCode);
}

export default errorHandler