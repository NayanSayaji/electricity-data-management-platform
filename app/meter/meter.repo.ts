import { FindOptions } from "sequelize";
import MeterModel from "./meter.schema";
import { IMeter, IMeterCreationValidatorSchema } from "./meter.types";

const find = async (query: FindOptions<IMeter>) => {
  return await MeterModel.findAll(query);
};

const findOne = async (query: FindOptions<IMeter>) => {
  return await MeterModel.findOne(query);
};

const findByPk = async (id:string) => {
  return await MeterModel.findByPk(id);
};

const insertOne = async (meter: IMeterCreationValidatorSchema) => {
  return await MeterModel.create(meter);
};

const insertMany = async (meters: IMeterCreationValidatorSchema[]) => {
  return await MeterModel.bulkCreate(meters);
};

export default {
  find,
  findOne,
  findByPk,
  insertOne,
  insertMany
};







