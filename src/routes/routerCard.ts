import express from 'express'
import { displayCart, deleteItem } from '../services/cart'

const router = express.Router()

router.get('/card/items', displayCart)

router.delete('/card/item/:id', deleteItem)

export default router