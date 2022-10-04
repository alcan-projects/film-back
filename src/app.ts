import express from 'express';
import Routes from './routes';
import cors from 'cors';
import mongoose from 'mongoose';
const app = express();

mongoose.connect('mongodb://localhost:27017/films')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
app.use('', Routes)



app.listen(5000, () => {
    console.log('Servidor rodando na port http://localhost:5000')
})