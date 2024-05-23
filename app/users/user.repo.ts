import { FindOptions, Op } from "sequelize";
import UserModel from "./user.schema";
import { IUser, IUserRegistrationValidatorSchema } from "./user.types";


const find = async (query: FindOptions<IUser>) => {
  return await UserModel.findAll(query);
};

const findOne = async (query: FindOptions<IUser>) => {
  return await UserModel.findOne(query);
};

const insertOne = async (user: IUserRegistrationValidatorSchema) => {
  return await UserModel.create(user);
};

export default {
  find,
  findOne,
  insertOne
};







