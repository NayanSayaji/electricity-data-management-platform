import z from "zod";
import { UserSchema } from "../users/users.types";

export const loginCredentials = UserSchema.pick({ email: true, password: true });

export const signUpCredentials = UserSchema.pick({ email: true, password: true, firstname: true, lastname: true })

export interface ILoginCredentials extends z.infer<typeof loginCredentials> { };