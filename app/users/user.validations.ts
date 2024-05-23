import { query } from "../utils/validation";
import { findAllUsersWithPerticularRole } from "./user.types";

export const roleValidator = [
    query(findAllUsersWithPerticularRole),
]

