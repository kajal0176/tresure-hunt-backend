import express from 'express';
import loginController from '../controllers/auth/loginController.js';
import signupController from '../controllers/auth/signupController.js';


const router = express.Router();

 router.post('/signup',signupController.signup)
 router.post('/login',loginController.login)

export default router