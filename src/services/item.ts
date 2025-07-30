import { itemModel } from "../models/item-model"
import { prisma } from "../lib/prisma"
export const createItem = async (name: string, price: number, quantity: number): Promise<itemModel> => {
    const subTotal = price * quantity
    const item = await prisma.item.create({
        data: {
            name: name,
            price: price,
            quantity: quantity,
            subTotal: subTotal
        }
    })
    return {
        name: item.name,
        price: item.price.toNumber(),
        quantity: item.quantity,
        subTotal: item.subTotal.toNumber()
    }
}