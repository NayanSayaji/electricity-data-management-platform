import rolesRepo from "./roles.repo";
import { roleResponses } from "./roles.repsonse";

const findRoleById = async (id: string) => {
    try {
        const role = await rolesRepo.findRoleById(id)
        return role?.dataValues.name;
    } catch (e) {
        throw roleResponses.ROLE_NOT_FOUND;
    }
}

export default {
    findRoleById
}