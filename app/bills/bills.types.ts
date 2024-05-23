import z from 'zod';

export const BillSchema = z.object({
  id: z.string().uuid(),
  meter_id: z.string().uuid(),
  amount: z.number(),
  units_consumed: z.number(),
  base_rate: z.number(),
  discount: z.number(),
  total_amount: z.number(),
  generated_at: z.date(),
  due_date: z.date(),
  status: z.string()
});

export interface IBill extends z.infer<typeof BillSchema> {};
