import express from 'express'
import routerCart from './routes/routerCart'
import routerItem from './routes/routerItem'
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT
const app = express()


app.use('/', routerCart)
app.use('/', routerItem)

app.listen(PORT, () => {
    console.log('Servidor rodando na porta ' + PORT)
})
