import Role from "../roles/roles.schema";
import userRepo from "./users.repo";
import { userResponses } from "./users.repsonse";
import { IUser, IUserRegistrationValidatorSchema } from "./users.types";

const findAllUsers = async (query: Partial<IUser>) => {
    try {
        const queryObj = { where: query }
        const users = await userRepo.findAllUsers(queryObj);
        return users;
    } catch (e) {
        throw e;
    }
}

const findUser = async (query: Partial<IUser>, safe?: boolean) => {
    try {
        const queryObj = { where: query, include: [Role] }
        const user = await userRepo.findUser(queryObj);
        console.log(user)
        if (!user) {
            if (safe) return null;

            throw userResponses.USER_NOT_FOUND;
        }
        return user.dataValues;
    } catch (e) {
        throw e;
    }
}

const findUserByPk = async (id: string) => {
    try {
        const user = await userRepo.findUserByPk(id);
        console.log("user -> \n", user)
        if (!user) {
            throw userResponses.USER_NOT_FOUND;
        }
        return user;
    } catch (e) {
        throw e;
    }
}

const insertUser = async (user: IUser) => {
    try {
        const query = {
            where: { email: user.email },
            defaults: user
        }

        const response = await userRepo.insertUser(query);
        if (response) return userResponses.USER_REGISTERED_SUCCESSFULLY;
        throw userResponses.USER_REGISTRATION_FAILED;
    } catch (e) {
        throw e;
    }
}

const updateUser = async (user: Partial<IUser>, body: Partial<IUser>) => {
    try {
        const query = {
            where: { body }
        }
        const response = await userRepo.updateUser(user, query);
        if (response) return userResponses.USER_REGISTERED_SUCCESSFULLY;
        throw userResponses.USER_REGISTRATION_FAILED;
    } catch (e) {
        throw e;
    }
}

const updateUserById = async (id: Pick<IUser, "id">, body: Partial<IUser>) => {
    try {
        const query = {
            where: { body }
        }
        const response = await userRepo.updateUser(body, query);
        if (response) return userResponses.USER_REGISTERED_SUCCESSFULLY;
        throw userResponses.USER_REGISTRATION_FAILED;
    } catch (e) {
        throw e;
    }
}

const deleteUser = async (user: Pick<IUser, "id">) => {
    try {
        const response = await userRepo.deleteUser(user);
        if (response) return userResponses.USER_REGISTERED_SUCCESSFULLY;
        throw userResponses.USER_REGISTRATION_FAILED;
    } catch (e) {
        throw e;
    }
}

const bulkInsertUsers = async (users: IUserRegistrationValidatorSchema[]) => {
    try {
        const response = await userRepo.bulkInsertUsers(users);
        if (response) return userResponses.BULK_USER_REGISTERED_SUCCESSFULLY;
        throw userResponses.USER_REGISTRATION_FAILED;
    } catch (e) {
        throw e;
    }
}

export default {
    findAllUsers,
    findUser,
    findUserByPk,
    insertUser,
    bulkInsertUsers,
    updateUser,
    updateUserById,
    deleteUser
}
