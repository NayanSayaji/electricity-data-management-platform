import z from 'zod';

export const MeterPriceSchema = z.object({
  id: z.string().uuid(),
  board_id: z.string().uuid(),
  type: z.string(),
  base_rate: z.number(),
  discount: z.number()
});

export interface IMeterPrice extends z.infer<typeof MeterPriceSchema>{};
