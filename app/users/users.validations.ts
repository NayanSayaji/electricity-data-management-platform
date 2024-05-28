import { body, query } from "../utils/validation";
import { UserSchema } from "./users.types";

export const bulkRegistrationSchemaValidator = [
    body(UserSchema, true),
]

