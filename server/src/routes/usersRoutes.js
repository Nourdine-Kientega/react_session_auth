import express from 'express';
import { loginUser, signupUser } from '../controllers/usersController.js';

const usersRouter = express.Router();

usersRouter.post('/signup', signupUser);

usersRouter.post('/login', loginUser);

export default usersRouter;