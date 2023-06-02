import config from '../../../config'
import { IUser } from './users.interface'
import { User } from './users.model'
import { genareteUserID } from './users.utils'

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
    throw new Error('Faild to create user')
  }

  return createdUser
}

export default {
  createUserDB,
}
