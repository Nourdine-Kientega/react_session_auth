import express from 'express';
import chalk from 'chalk';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { connectDB } from './src/config/database.js';
import usersRouter from './src/routes/usersRoutes.js';
import courseRouter from './src/routes/coursesRoutes.js';

dotenv.config();
connectDB(); // Connexion to mongo atlas

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join('./', '/src/uploads')));
app.use(usersRouter);
app.use(courseRouter);


app.get('/', (req, res) => {

    res.send('Welcome to server inteface !');
});

app.listen(port, () => console.log(chalk.green(`Server is running on port http://localhost:${port}`)));
 