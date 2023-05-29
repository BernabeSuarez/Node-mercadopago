import express from 'express'
import paymentRoute from './routes/payment.route.js'
import morgan from 'morgan'
import { PORT } from './config/config.js'
import path from 'path'

const app = express()

app.use(express.static(path.resolve('src/public')))
app.use(morgan('dev'))
app.use(paymentRoute)

app.listen(PORT, () => {
    console.log('Server running OK on port ', PORT)
})