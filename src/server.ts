// src/server.js
import express, { Express, Request, Response } from "express"
import dotenv from "dotenv"

dotenv.config()

const app:Express = express()
const port = process.env.PORT || 8081

app.get('/', (req: Request, res: Response) => {
    res.send('Express Typescript server on Beanstalk')
})

app.listen(port, () => {
    console.log(`[server.js] Server is running on port ${port}`)
})