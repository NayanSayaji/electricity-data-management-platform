import { Optional } from 'sequelize';
import z from 'zod';

export const UserSchema = z.object({
	id:z.string().uuid().optional(),
	name:z.string().max(20),
    username: z.string(),
	email:z.string(),
    password: z.string(),
	// roleId:z.string().uuid()  
	role:z.string()  
})

export const findAllUsersWithPerticularRole = UserSchema.pick({role:true})

export interface IUser extends z.infer<typeof UserSchema>{};
export interface IUserRegistrationValidatorSchema extends Optional<IUser, 'id'|'role'> {}
export interface LoginValidatorSchema extends Optional<IUser, 'id'|'role'> {}

