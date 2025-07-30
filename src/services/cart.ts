import { itemModel } from "../models/item-model"
import { prisma } from "../lib/prisma"
import { Request, Response } from "express"
import { StatusCode } from "../models/status-code"

export const addItem = async (item: itemModel) => {
    await prisma.cart.create({
        data: {
            items: {
                create: [
                    item
                ]
            }
        }
    })
    return
}

export const calculateTotal = async (userCart: itemModel[], name: string) =>{
    console.log()
    console.log('Shopee Cart TOTAL IS:')
    console.log(userCart.reduce((total, item) => total + item.subTotal, 0))
}
const existsItemById = async (id: number) => {
    const item = prisma.item.findUnique({
        where: {id}
    })
    return item
}


export const deleteItem = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const existsItem = await existsItemById(id)
    if (existsItem) {
        await prisma.item.delete({
            where: {id}
        })
        return res.status(StatusCode.OK).json({
            error: false,
            message: `Item com o ID '${id}' deletado!`
        })
    }
    return res.status(StatusCode.NotFound).json({
        error: true,
        message: `Item com o ID '${id}' não existe!`
    })
}


// export const removeItem = async (userCart: itemModel[], item: itemModel) => {
//     const indexFound = userCart.findIndex((p) => p.name === item.name)

//     if (indexFound === -1) {
//         console.log('Item não encontrado!')
//         return
//     }

//     if (userCart[indexFound].quantity > 1) {
//         userCart[indexFound].quantity -= 1
//         return
//     }  
//     if (userCart[indexFound].quantity === 1) {
//         await deleteItem(userCart, userCart[indexFound].name)
//     }
// }

export const displayCart = async (req: Request, res: Response) => {
    console.log('Shopee cart list:')
    const itemsInCart = await prisma.item.findMany()
    if (itemsInCart.length === 0) {
        return res.status(StatusCode.NoContent)
    }
    return res.status(StatusCode.OK).json({
        error: false,
        message: 'Itens adicionados no carrinho',
        itemsInCart
    })

}

