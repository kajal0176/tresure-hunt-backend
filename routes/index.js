import express from 'express';
import loginController from '../controllers/auth/loginController.js';
import signupController from '../controllers/auth/signupController.js';
import userInfoController from '../controllers/user/userInfoController.js';


const router = express.Router();

 router.post('/signup',signupController.signup)
 router.post('/login',loginController.login)
 router.get('/userInfo',userInfoController.userInfoGet)
 router.get('/userInfo/:_id',userInfoController.userInfoGetById)
 router.post('/userInfo',userInfoController.userInfoCreate)

export default router