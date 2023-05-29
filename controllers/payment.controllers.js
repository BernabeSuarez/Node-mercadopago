import mercadopago from "mercadopago"


export const createOrder = async (req, res) => {
    mercadopago.configure({
        access_token: "TEST-5430204876708196-052822-1112f05a695fdeaa7ff1b4c060c1e207-1384908369"
    })
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
            success: "https://www.mercadopago.com/success",
            failure: "https://www.mercadopago.com/failure",
            pending: "https://www.mercadopago.com/pending"
        },
        notification_url: "http://localhost:300/webhook"
    })
    console.log(result)
    res.send('Creating Order')
}