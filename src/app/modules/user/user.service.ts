import config from '../../../config'
import ApiError from '../../../errors/ApiError'
import { IUser } from './user.interface'
import { User } from './user.model'
import { genareteUserID } from './user.utils'

const createUserDB = async (user: IUser): Promise<IUser | null> => {
  //Auto genareted incrimental ID
  const id = await genareteUserID()

  user.id = id
  //Auto password
  if (!user.password) {
    user.password = config.default_user_password as string
  }
  const createdUser = await User.create(user)

  if (!createUserDB) {
    throw new ApiError(400, 'Faild to create user', '')
  }

  return createdUser
}

export const UserService = {
  createUserDB,
}
