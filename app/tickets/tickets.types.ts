import { Optional } from 'sequelize';
import z from 'zod';

export const TicketSchema = z.object({
  id: z.string().uuid(),
  userId: z.string(),
  billId: z.string(),
  boardId: z.string(),
  issue_description: z.string(),
  status: z.enum(['open', 'closed']),
});

export interface ITicket extends z.infer<typeof TicketSchema> {};
export interface ITicketCreationValidatorSchema extends Optional<ITicket, 'id'> {}
