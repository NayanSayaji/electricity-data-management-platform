import z from "zod";
import { UserSchema } from "../users/users.types";

export const loginCredentials = UserSchema.pick({ username: true, password: true });

export const signUpCredentials = UserSchema.pick({ username: true, password: true, firstname: true, email: true })

export interface ILoginCredentials extends z.infer<typeof loginCredentials> { };