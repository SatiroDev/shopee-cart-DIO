import { itemModel } from "../models/item-model"
import { Request ,Response } from "express"
import { prisma } from "../lib/prisma"
import { StatusCode } from "../models/status-code"
export const createItem = async (req: Request, res: Response) => {
    const { name, price, quantity } = req.body
    const subTotal = price * quantity
    const item = await prisma.item.create({
        data: {
            name,
            price,
            quantity,
            subTotal
        }
    })
    return res.status(StatusCode.Created).json({
        name: item.name,
        price: item.price.toNumber(),
        quantity: item.quantity,
        subTotal: item.subTotal.toNumber()
    })
}