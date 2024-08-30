import cors from 'cors'
import express from 'express'
import morgan from 'morgan'

const app = express()

// Middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

app.get('/', (_req, res) => {
    return res.status(200).json({ message: 'Hello World' })
})

const port = 3000
const server = app.listen(port, () => {
    console.log('Server started on port', port)
})

export default server
