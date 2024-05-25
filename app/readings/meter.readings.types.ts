import { Optional } from 'sequelize';
import z from 'zod';

export const MeterReadingSchema = z.object({
  id: z.string().uuid(),
  meterId: z.string(),
  fieldWorkerId: z.string(),
  units_consumed: z.number(),
  photos: z.array(z.string()),
  timestamp: z.date(),
  status: z.enum(['submitted', 'pending_revisit']),
  remarks: z.string(),
});

export interface IMeterReading extends z.infer<typeof MeterReadingSchema> {};
export interface IMeterReadingCreationValidatorSchema extends Pick<IMeterReading, 'meterId'| 'units_consumed' | 'photos' | 'status' | 'fieldWorkerId' > {}
