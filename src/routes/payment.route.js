import { Router } from "express";
import { createOrder, receiveWebhooks } from "../controllers/payment.controllers.js"

const router = Router()



router.post('/create-order', createOrder)



router.get('/success', (req, res) => {
    res.send('<h1>Pago Aprobado</h1>')
})


router.post('/webhook', receiveWebhooks)

export default router