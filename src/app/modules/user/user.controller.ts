import { RequestHandler } from 'express'

import { logger } from '../../../shared/logger'
import { UserService } from './user.service'

const createUser: RequestHandler = async (req, res, next) => {
  try {
    //req-validation

    const data = req.body
    logger.info('data:', data)
    const result = await UserService.createUserDB(data.user)
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

export const UserController = {
  createUser,
}
