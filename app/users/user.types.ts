import { Optional } from 'sequelize';
import z from 'zod';

export const UserSchema = z.object({
  id: z.string().uuid(),
  username: z.string().trim(),
  firstname:z.string(),
  lastname:z.string(),
  email: z.string(),
  password: z.string(),
  role_id: z.string(),
  board_id: z.number()
});

export const findAllUsersWithPerticularRole = UserSchema.pick({role_id:true})

export interface IUser extends z.infer<typeof UserSchema>{};
export interface IUserRegistrationValidatorSchema extends Optional<IUser, 'id'|'role_id' | 'board_id'> {}
export interface LoginValidatorSchema extends Optional<IUser, 'id'| 'role_id' | 'board_id'>{}

