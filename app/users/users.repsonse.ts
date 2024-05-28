import { ResponsesI } from "../utils/responses.types";

export const userResponses: ResponsesI = {
    USER_NOT_FOUND: {
        message: "USER NOT FOUND",
        statusCode: 404
    },
    BAD_REQUEST: {
        message: "BAD REQUEST",
        statusCode: 400
    },
    USER_ALREADY_EXIST: {
        message: "USER ALREADY EXIST",
        statusCode: 403
    },
    USER_REGISTERED_SUCCESSFULLY: {
        message: "USER REGISTERED SUCCESSFULLY",
        statusCode: 200
    },
    BULK_USER_REGISTERED_SUCCESSFULLY: {
        message: "BULK_USER REGISTERED SUCCESSFULLY",
        statusCode: 200
    },
}
