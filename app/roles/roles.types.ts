import { Optional } from 'sequelize';
import z from 'zod';

export const RoleSchema = z.object({
  id: z.string().uuid(),
  name: z.enum([
    'SUPERADMIN',
    'CONSUMER',
    'BOARD_MEMBER',
    'BOARD_ADMIN',
    'SUPERVISOR',
    'FIELD_WORKER'
  ]),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export interface IRole extends z.infer<typeof RoleSchema> { };
export interface IRoleCreationValidatorSchema extends Optional<IRole, 'id' | 'createdAt' | 'updatedAt'> { }
