import { Optional } from 'sequelize';
import z from 'zod';

export const BillSchema = z.object({
  id: z.string().uuid(),
  meterReadingId: z.string(),
  amount: z.number(),
  discount: z.number().optional(),
  total_amount: z.number(),
  generated_at: z.date(),
  email_sent: z.boolean()
});

export interface IBill extends z.infer<typeof BillSchema> {};
export interface IBillCreationValidatorSchema extends Optional<IBill, 'id' | 'discount' > {}
