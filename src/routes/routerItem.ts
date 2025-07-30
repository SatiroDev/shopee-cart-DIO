import express from 'express'
import { createItem } from '../services/item'


const router = express.Router()
const jsonParser = express.json()

router.post('/add/item', jsonParser, createItem) 

export default router