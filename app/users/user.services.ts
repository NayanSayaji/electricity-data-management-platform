import Role from "../roles/roles.schema";
import userRepo from "./user.repo";
import { userResponses } from "./user.repsonse";
import { IUser } from "./user.types";

const find = async (query: Partial<IUser>) => {
    try {
        const queryObj = { where: query }
        const users = await userRepo.find(queryObj);
        return users;
    } catch (e) {
        throw e;
    }
}

const findOne = async (query: Partial<IUser>, safe?: boolean) => {
    try {
        const queryObj = { where: query }
        const user = await userRepo.findOne(queryObj);
        console.log(user?.dataValues)
        if (!user) {
            if (safe) return null;

            throw userResponses.USER_NOT_FOUND;
        }
        return user.dataValues;
    } catch (e) {
        throw e;
    }
}


const findOneWithRole = async (userId: string) => {
    try {
        const user = await userRepo.findOne({
            where: { id: userId },
            include: [Role],
        });
        if (!user) {
            throw userResponses.USER_NOT_FOUND;
        }
        console.log(user.dataValues)
        return user.dataValues;
    } catch (e) {
        throw e;
    }
};

const insertOne = async (user: IUser) => {
    try {
        const response = await userRepo.insertOne(user);
        if (response) return userResponses.USER_REGISTERED_SUCCESSFULLY;
        throw userResponses.USER_REGISTRATION_FAILED;
    } catch (e) {
        throw e;
    }
}

export default {
    find, findOne, insertOne,findOneWithRole
}
