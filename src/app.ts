import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'

import globalErrorHandler from './app/middlewares/globalErrorHandler'
import { UserRouter } from './app/modules/users/users.routes'
import ApiError from './errors/ApiError'
const app: Application = express()

// Coross Origine
app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Application

app.use('/api/v1/users/', UserRouter)

//Testing
app.get('/', async (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello World!')
  throw new ApiError(400, 'orebaba ki error', '')
  next('ore baba')
})

// Error handle

app.use(globalErrorHandler)

export default app
