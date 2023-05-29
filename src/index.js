import express from 'express'
import paymentRoute from '../routes/payment.route.js'
import morgan from 'morgan'

const app = express()

app.use(morgan('dev'))
app.use(paymentRoute)

app.listen(3000, () => {
    console.log('Server running OK...')
})