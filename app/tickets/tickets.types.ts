import z from 'zod';

export const TicketSchema = z.object({
  id: z.string().uuid(),
  user_id: z.string().uuid(),
  meter_id: z.string().uuid(),
  description: z.string(),
  status: z.string()
});

export interface ITicket extends z.infer<typeof TicketSchema>{};
