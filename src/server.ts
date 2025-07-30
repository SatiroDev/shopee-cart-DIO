// import { createItem } from "./services/item"
// import { prisma } from "./lib/prisma"
// import * as cartService from "./services/cart"
// import { itemModel } from "./models/item-model"
import express from 'express'
import router from './routes/routerCard'
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT
const app = express()

app.use('/', router)

app.listen(PORT, () => {
    console.log('Servidor rodando na porta ' + PORT)
})





// const main = async () => {
//     const cart = await prisma.item.findMany()
//     console.log(cart)
//     // const item1 = await createItem('hotwheels ferrari', 20.99, 1)
//     // // criando um item
//     // const item1 = await createItem('hotwheels ferrari', 20.99, 1)
//     // // criando outro item
//     // const item2 = await createItem('hotwheels lamborghini', 39.99, 3)

//     // // adicionando o item1 no carrinho
//     // await cartService.addItem(myCart, item1)
//     // // adicionando o item2 no carrinho
//     // await cartService.addItem(myCart, item2)

//     // // removendo o item2 do carrinho
//     // await cartService.removeItem(myCart, item2)
//     // // removendo o item2 do carrinho
//     // await cartService.removeItem(myCart, item2)

//     // // deletando o item1 do carrinho
//     // await cartService.deleteItem(myCart, item1.name)

//     // // listando todos os itens que estão no carrinho
//     // await cartService.displayCart(myCart)

//     // // calculando o preço total dos itens que estão no carrinho
//     // await cartService.calculateTotal(myCart, item2.name)
// }
// main()
