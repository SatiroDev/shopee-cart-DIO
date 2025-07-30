import { Request ,Response } from "express"
import { prisma } from "../lib/prisma"
import { StatusCode } from "../models/status-code"
import { createCart, existsCart } from "./cart"
export const createItem = async (req: Request, res: Response) => {
    const { name, price, quantity, cartId } = req.body
    const existCart = await existsCart(cartId)
    if (!existCart) {
        await createCart (cartId)
    }
    const subTotal = price * quantity
    const item = await prisma.item.create({
        data: {
            name,
            price,
            quantity,
            subTotal,
            cartId
        }
    })
    console.log(item)
    const itemCreated = {
        name: item.name,
        price: item.price.toNumber(),
        quantity: item.quantity,
        subTotal: item.subTotal.toNumber(),
        cartId: item.cartId
    }
    return res.status(StatusCode.OK).json({
        error: false,
        message: 'Produto criado e adicionado ao carrinho',
        itemCreated
    })
}
