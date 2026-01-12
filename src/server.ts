import { connectToDB } from './config/db.ts'
import dotenv from 'dotenv'
import http from 'http'
import app from './app.ts'

async function startServer() {
    await connectToDB()

    const server = http.createServer(app)

    server.listen(process.env.PORT, () => {
        console.log(`Server is listening to PORT:${process.env.PORT}`)
    })
}

startServer().catch(err => {
    console.error(`Error while starting the server`, err)
    process.exit(1)
})
