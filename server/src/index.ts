import express from "express"
import { smtpServer } from "./smtp"
import cors from "cors"
import "dotenv/config"

import "./queue/workers"

import emailRouter from "./routers/email.router"

const app = express()
app.use(cors(
    {
        origin: '*'
    }
))

app.use(express.json())


app.use('/api/v1/emails', emailRouter)

app.listen(3000, () => {
    console.log(`Server is listening on PORT 3000`)
})

smtpServer.listen(1025, () => {
    console.log('SMTP server is running on port 1025')
})