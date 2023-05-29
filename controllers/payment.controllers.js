import mercadopago from "mercadopago"
import * as dotenv from 'dotenv'

dotenv.config()


export const createOrder = async (req, res) => {

    /* `mercadopago.configure()` is a method that sets the configuration options for the MercadoPago
    API. In this case, it is setting the access token for the API, which is required for
    authentication and authorization purposes. The access token is a unique identifier that allows
    the API to identify and authenticate the user making the API call. */

    mercadopago.configure({
        access_token: process.env.MERCADOPAGO_API_KEY
    })

    /* This code is creating an order using the MercadoPago API. It is configuring the API with an
    access token, and then using the `preferences.create` method to create an order with the
    specified item details (title, currency, unit price, and quantity), back URLs for success,
    failure, and pending states, and a notification URL for webhooks. The result of this API call is
    being stored in the `result` variable. */

    const result = await mercadopago.preferences.create({
        items: [
            {
                title: "Cursos Web",
                currency_id: "ARS",
                unit_price: 1500,
                quantity: 1
            }
        ],
        // Devuelve a una url segun el estado que devuelva el pago
        back_urls: {
            success: "https://localhost:3000/success",
            failure: "https://localhost:3000/failure",
            pending: "https://localhost:3000/pending"
        },
        notification_url: "https://2176-45-186-47-2.ngrok-free.app/webhook"
    })
    console.log(result)
    res.send('Creating Order')
}

export const receiveWebhooks = async (req, res) => {
    const payment = req.query
    try {
        if (payment.type === 'payment') {
            const data = await mercadopago.payment.findById(payment['data id'])
            console.log(data)
            //almacenar en Base de datos los datos del pago y del usuario
        }
        res.sendStatus(204)
    }
    catch (error) {
        console.log(error)
        return res.sendStatus(500).json({ error: error.message })
    }

}