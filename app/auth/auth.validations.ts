import { body, params, query } from "../utils/validation";
import { loginCredentials, signUpCredentials,  } from "./auth.types";

export const LoginValidations = [
    body(loginCredentials)
];
    
export const SignUpValidations = [
    body(signUpCredentials)
]