import { Optional } from 'sequelize';
import z from 'zod';

export const MeterSchema = z.object({
  id: z.string().uuid(),
  type: z.enum(['household_solar', 'household_regular', 'industrial_solar', 'industrial_regular']),
  userId: z.string().optional(),
  boardId: z.string().optional(),
});

export enum METER_TYPES {
  HOUSEHOLD_SOLAR = 'HOUSEHOLD_SOLAR',
  HOUSEHOLD_REGULAR = 'HOUSEHOLD_REGULAR',
  INDUSTRIAL_SOLAR = 'INDUSTRIAL_SOLAR',
  INDUSTRIAL_REGULAR = 'INDUSTRIAL_REGULAR'
}

export interface IMeter extends z.infer<typeof MeterSchema> {};
export interface IMeterCreationValidatorSchema extends Pick<IMeter, 'type'> {}
