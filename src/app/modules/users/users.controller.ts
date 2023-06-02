import { Request, Response } from 'express'
import userService from './user.service'

const createUser = async (req: Request, res: Response) => {
  try {
    const data = req.body
    console.log('data:', data)
    const result = await userService.createUserDB(data.user)
    console.log('result:', result)
    res.status(200).json({
      sucsess: true,
      message: 'User Created Sucsessfully',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      sucsess: false,
      message: `Failed to create user${error}`,
    })
  }
}

export default {
  createUser,
}
