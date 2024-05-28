import rolesModel from '../roles/roles.schema'

const findRoleById = (query: string) => {
    try {
        const result = rolesModel.findByPk(query);
        return result;
    } catch (e) {
        throw e
    }
}

export default {
    findRoleById
}