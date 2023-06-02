import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import userRouter from './app/modules/users/users.routes'
const app: Application = express()

// Coross Origine
app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Application

app.use('/api/v1/users/', userRouter)

//Testing
app.get('/', async (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app
