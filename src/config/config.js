import { config } from "dotenv"
config()

export const PORT = 5500
export const MP_API_KEY = process.env.MERCADOPAGO_API_KEY