import express from 'express'
import { displayCart, deleteItem } from '../services/cart'

const router = express.Router()

router.get('/cart/items', displayCart)

// router.post('cart/create')

router.delete('/cart/item/:id', deleteItem)

export default router