import z from 'zod';

export const BoardSchema = z.object({
  id: z.string().uuid(),
  name: z.string()
});

export interface IBoard extends z.infer<typeof BoardSchema> {};
