import express from 'express';
import chalk from 'chalk';
import dotenv from 'dotenv';
import { connectDB } from './src/config/database.js';


dotenv.config();
connectDB(); // Connexion to mongo atlas

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {

    res.send('Welcome to server inteface !');
});

app.listen(port, () => console.log(chalk.green(`Server is running on port http://localhost:${port}`)));
