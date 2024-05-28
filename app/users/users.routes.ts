import { NextFunction, Request, Response, Router } from "express";
import { Route } from "../routes/routes.types";
import userServices from "./users.services";
import { ResponseHandler } from "../utils/response.handler";
import { bulkRegistrationSchemaValidator } from "./users.validations";
import { permit } from "../utils/authorization/authorizations";

const router = Router();

// get userById
router.get('/:id', permit(["SUPERADMIN", "BOARD_ADMIN", "BOARD_MEMBER", "FIELD_WORKER"]), async (req, res, next) => {
    try {
        const result = await userServices.findUserByPk(req.params.id);
        res.send(new ResponseHandler(result))
    } catch (e) {
        next(e)
    }
})

// update user by id
router.put('/:id', permit(["SUPERADMIN", "BOARD_ADMIN", "BOARD_MEMBER"]), async (req, res, next) => {
    try {
        const result = await userServices.updateUser({ id: req.params.id }, req.body);
        res.send(new ResponseHandler(result))
    } catch (e) {
        next(e)
    }
})

// update user 
router.put('/update', permit(["SUPERADMIN", "BOARD_ADMIN", "BOARD_MEMBER"]), async (req, res, next) => {
    try {
        const result = await userServices.updateUserById(req.body.data, req.body.where);
        res.send(new ResponseHandler(result))
    } catch (e) {
        next(e)
    }
})

// delete user 
router.delete('/:id', permit(["SUPERADMIN", "BOARD_ADMIN", "BOARD_MEMBER"]), async (req, res, next) => {
    try {
        const result = await userServices.deleteUser({ id: req.params.id });
        res.send(new ResponseHandler(result))
    } catch (e) {
        next(e)
    }
})

// get all users
router.get('/', permit(['SUPERADMIN', 'BOARD_ADMIN', 'BOARD_MEMBER']), async (req, res, next) => {
    try {
        const result = await userServices.findAllUsers(req.body);
        res.send(new ResponseHandler(result))
    } catch (e) {
        next(e)
    }
})

// create new users in bulk
router.post('/bulkRegister', permit(['SUPERADMIN', 'BOARD_ADMIN', 'BOARD_MEMBER']), ...bulkRegistrationSchemaValidator, async (req, res, next) => {
    try {
        const result = await userServices.bulkInsertUsers(req.body)
        res.send(new ResponseHandler(result))
    } catch (e) {
        next(e)
    }
})

// create new users in bulk
router.post('/', permit(['SUPERADMIN', 'BOARD_ADMIN', 'BOARD_MEMBER']), async (req, res, next) => {
    try {
        const result = await userServices.insertUser(req.body);
        res.send(new ResponseHandler(result))
    } catch (e) {
        next(e)
    }
})

export default new Route("/users", router);
