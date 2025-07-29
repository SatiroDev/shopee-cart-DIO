import { itemModel } from "../models/item-model"
import { prisma } from "../lib/prisma"
import { Request, Response } from "express"
import { StatusCode } from "../models/status-code"

export const addItem = async (userCart: itemModel[], item: itemModel) => {
    userCart.push(item)
}

export const calculateTotal = async (userCart: itemModel[], name: string) =>{
    console.log()
    console.log('Shopee Cart TOTAL IS:')
    console.log(userCart.reduce((total, item) => total + item.subTotal(), 0))
}

export const deleteItem = async (userCart: itemModel[], name: string) => {
    const index = userCart.findIndex((item) => item.name === name)
    if (index !== -1) {
        userCart.splice(index, 1)
    }
}


export const removeItem = async (userCart: itemModel[], item: itemModel) => {
    const indexFound = userCart.findIndex((p) => p.name === item.name)

    if (indexFound === -1) {
        console.log('Item não encontrado!')
        return
    }

    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1
        return
    }  
    if (userCart[indexFound].quantity === 1) {
        await deleteItem(userCart, userCart[indexFound].name)
    }
}

export const displayCart = async (req: Request, res: Response) => {
    console.log('Shopee cart list:')
    const itemsInCart = await prisma.item.findMany()
    if (itemsInCart.length === 0) {
        return res.status(StatusCode.NotFound)
    }
    return res.status(StatusCode.OK).json({
        error: false,
        message: 'Itens adicionados no carrinho',
        itemsInCart
    })

}

