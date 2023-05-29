import { Router } from "express";
import { createOrder } from '../controllers/payment.controllers.js'

const router = Router()



router.post('/create-order', createOrder)



router.get('/success', (req, res) => {
    res.send('Payment Success')
})


router.post('/webhook', (req, res) => {
    res.send('WebHook')
})

export default router