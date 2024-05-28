import { compare } from "bcrypt";
import userService from "../users/users.services";
import { IUser, IUserLoginValidatorSchema, IUserRegistrationValidatorSchema } from "../users/users.types";
import { encrypt } from "../utils/encrypt";
import { authReponses } from "./auth.responses";
import { sign } from "jsonwebtoken";
import rolesService from "../roles/roles.service";

const find = async (credentials: Partial<IUser>) => {
    try {
        const user = await userService.findOne({ email: credentials.email }, true);
        if (!user) throw authReponses.USER_NOT_FOUND;

        const { password, ...restOfTheUser } = user;
        return restOfTheUser;
    } catch (e) {
        throw e
    }
}

const login = async (credentials: IUserLoginValidatorSchema) => {
    try {

        const user = await userService.findOne({ email: credentials.email });
        if (!user?.firstname) {
            throw authReponses.USER_NOT_FOUND;
        }
        const didMatch = await compare(credentials.password, user.password);

        if (!didMatch) {
            throw authReponses.WRONG_PASSWORD;
        }
        console.log("userrole : ", user.Role.name)
        const { email, firstname, lastname, Role } = user;

        const userData = {
            firstname,
            lastname,
            email,
            role:Role.name
        }

        const { JWT_ACCESS_TOKEN } = process.env;
        const accessToken = sign(userData, JWT_ACCESS_TOKEN)

        return { userData, accessToken };
    } catch (e) {
        throw authReponses.SOMETHING_WENT_WRONG;
    }
};

const register = async (userData: IUser) => {
    try {
        const User = await userService.findOne({ email: userData.email }, true);
        if (User?.email === userData.email) {
            throw authReponses.USER_ALREADY_EXIST_WITH_THIS_EMAIL;
        }

        userData.password = await encrypt(userData.password)
        return await userService.insertOne(userData);
    } catch (e) {
        console.log(e)
        throw e;
    }
}

export default {
    login,
    register,
    find
}
