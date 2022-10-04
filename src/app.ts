import express from 'express';
import Routes from './routes';
import cors from 'cors';
import mongoose from 'mongoose';
const app = express();

mongoose.connect('mongodb://localhost:27017/films').then(() => {
    console.log('COnectador com sucesso no banco de dados')
}).catch(error => {
    console.log('Erro ao conectar no banco de dados: ', error)
})

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
app.use('', Routes)



app.listen(5000, () => {
    console.log('Servidor rodando na port http://localhost:5000')
})