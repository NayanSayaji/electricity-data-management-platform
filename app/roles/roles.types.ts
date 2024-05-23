import { Optional } from 'sequelize';
import z from 'zod';

export const RoleSchema = z.object({
  id: z.string().uuid().optional(),
  role: z.string().max(50),
});

export interface IRole extends z.infer<typeof RoleSchema> {};
export interface IRoleCreation extends Optional<IRole, 'id'> {};
