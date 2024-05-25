import { FindOptions } from "sequelize";
import MeterReadingModel from "./meter.readings.schema";
import { IMeterReading, IMeterReadingCreationValidatorSchema  } from "./meter.readings.types";

const find = async (query: FindOptions<IMeterReading>) => {
  return await MeterReadingModel.findAll(query);
};

const findOne = async (query: FindOptions<IMeterReading>) => {
  return await MeterReadingModel.findOne(query);
};

const findByPk = async (id:string) => {
  return await MeterReadingModel.findByPk(id);
};

const insertOne = async (meter: IMeterReadingCreationValidatorSchema) => {
  return await MeterReadingModel.create(meter);
};



export default {
  find,
  findOne,
  findByPk,
  insertOne
};







