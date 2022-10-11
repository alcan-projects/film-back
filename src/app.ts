import { config } from 'dotenv';
import express from 'express';
import Routes from './routes';
import cors from 'cors';
import mongoose from 'mongoose';
config()
const app = express();

mongoose.connect(`mongodb://${process.env.DB_LOCAL}:27017/films`).then(() => {
    console.log('Conectador com sucesso no banco de dados')
}).catch(error => {
    console.log('Erro ao conectar no banco de dados: ', error)
})

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
app.use('/', Routes)



app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na port http://${process.env.HOST}:${process.env.PORT}`)
})