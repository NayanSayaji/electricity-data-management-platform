import { FindOptions } from "sequelize";
import UserModel from "./users.schema";
import { IUser, IUserRegistrationValidatorSchema } from "./users.types";

const find = async (query: FindOptions<IUser>) => {
  return await UserModel.findAll({
    ...query,
    include: [{ all: true }] // Include all associations
  });
};

const findOne = async (query: FindOptions<IUser>) => {
  return await UserModel.findOne({
    ...query,
    include: [{ all: true }] // Include all associations
  });
};

const findByPk = async (id: string) => {
  return await UserModel.findByPk(id, {
    include: [{ all: true }] // Include all associations
  });
};

const insertOne = async (user: IUserRegistrationValidatorSchema) => {
  return await UserModel.create(user);
};

const insertMany = async (users: IUserRegistrationValidatorSchema[]) => {
  return await UserModel.bulkCreate(users);
};

export default {
  find,
  findOne,
  findByPk,
  insertOne,
  insertMany
};
