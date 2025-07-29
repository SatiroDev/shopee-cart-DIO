import express from 'express'
import { displayCart } from '../services/cart'

const router = express.Router()

router.get('/api/itens', displayCart)

export default router