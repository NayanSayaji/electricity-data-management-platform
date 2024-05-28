// import { Optional } from 'sequelize';
// import z from 'zod';

// export const RoleSchema = z.object({
//   id: z.string().uuid(),
//   name: z.enum([
//     'superadmin',
//     'supervisor',
//     'field_worker',
//     'board_admin',
//     'board_member',
//     'user'
//   ]),
//   createdAt: z.date(),
//   updatedAt: z.date(),
// });

// export interface IRole extends z.infer<typeof RoleSchema> {};
// export interface IRoleCreationValidatorSchema extends Optional<IRole, 'id' | 'createdAt' | 'updatedAt'> {}
