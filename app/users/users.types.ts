import { Optional } from 'sequelize';
import z from 'zod';

export const UserSchema = z.object({
  id: z.string().uuid(),
  username: z.string(),
  firstname: z.string(),
  lastname: z.string(),
  email: z.string(),
  password: z.string(),
  roleId: z.string().optional(),
  boardId: z.string().optional(),
});


export interface IUser extends z.infer<typeof UserSchema> {};
export interface IUserRegistrationValidatorSchema extends Optional<IUser, 'id'> {}
// export interface IUserRegistrationValidatorSchema extends Optional<IUser, 'id'> {}
