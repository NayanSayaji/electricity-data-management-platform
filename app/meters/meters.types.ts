import z from 'zod';

export const MeterSchema = z.object({
  id: z.string(),
  user_id: z.string(),
  board_id: z.string(),
  type: z.string(),
  status: z.string()
});

export interface IMeter extends z.infer<typeof MeterSchema> {};
