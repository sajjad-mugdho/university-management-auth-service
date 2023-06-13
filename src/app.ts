import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import userRouter from './app/modules/users/users.routes'

import globalErrorHandler from './app/middlewares/globalErrorHandler'
const app: Application = express()

// Coross Origine
app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Application

app.use('/api/v1/users/', userRouter)

//Testing
app.get('/', async (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello World!')
  next('ore baba')
})

// Error handle

app.use(globalErrorHandler)

export default app
