import z from "zod";
import { UserSchema } from "../users/user.types";

export const loginCredentials = UserSchema.pick({ username: true, password: true });

export const signUpCredentials = UserSchema.pick({ username: true, password: true, name: true, email: true })

export interface ILoginCredentials extends z.infer<typeof loginCredentials> { };