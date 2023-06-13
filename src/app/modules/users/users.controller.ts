import { NextFunction, Request, Response } from 'express'
import userService from './user.service'
import { logger } from '../../../shared/logger'

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = req.body
    logger.info('data:', data)
    const result = await userService.createUserDB(data.user)
    logger.info('result:', result)
    res.status(200).json({
      sucsess: true,
      message: 'User Created Sucsessfully',
      data: result,
    })
  } catch (error) {
    next(error)
    res.status(400).json({ error: error })
    next()
    //   error: error,
    //   // sucsess: false,
    //   // message: `Failed to create user${error}`,
    // })
  }
}

export default {
  createUser,
}
