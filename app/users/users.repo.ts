import { FindOptions, FindOrCreateOptions, UpdateOptions } from "sequelize";
import UserModel from "./users.schema";
import { IUser, IUserRegistrationValidatorSchema } from "./users.types";

const findAllUsers = async (query: FindOptions<IUser>) => {
  try {
    const users = await UserModel.findAll(query);
    return users;
  } catch (e) {
    throw e
  }
};

const findUser = async (query: FindOptions<IUser>) => {
  try {
    const user = await UserModel.findOne(query);
    return user?.dataValues;
  } catch (e) {
    throw e
  }
};

const findUserByPk = async (id: string) => {
  try {
    const User = await UserModel.findByPk(id);
    return User?.dataValues;
  } catch (e) {
    console.log(e)
    throw e
  }
};

const insertUser = async (user: FindOrCreateOptions<IUser>) => {
  try {
    const User = await UserModel.findOrCreate(user);
    return User;
  } catch (e) {
    throw e
  }
};


const updateUser = async (user: Partial<IUser>, query: UpdateOptions<IUser>) => {
  try {
    const User = await UserModel.update(user,query);
    return User;
  } catch (e) {
    throw e
  }
};


const deleteUser = async (id: Pick<IUser, "id">) => {
  try {
    const User = await UserModel.create(id);
    return User.dataValues;
  } catch (e) {
    throw e
  }
};

const bulkInsertUsers = async (users: IUserRegistrationValidatorSchema[]) => {
  try {
    const response = await UserModel.bulkCreate(users);
    return response;
  } catch (e) {
    throw e;
  }
};

export default {
  findAllUsers,
  findUser,
  findUserByPk,
  insertUser,
  bulkInsertUsers,
  updateUser,
  deleteUser
};
