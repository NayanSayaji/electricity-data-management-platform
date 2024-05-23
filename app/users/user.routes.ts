import { NextFunction, Request, Response, Router } from "express";

import { Route } from "../routes/routes.types";
import userServices from "./user.services";
import { ResponseHandler } from "../utils/response.handler";
import { roleValidator } from "./user.validations";
import { permit } from "../utils/authorizations";

const router = Router();

// get userById
router.get('/:id', permit([]), async (req: Request<any, any, any, any>, res: Response, next: NextFunction) => {
    try {
        const role_id: string = req.query.role_id || 'customer';
        const query = { role_id: role_id }
        const result = userServices.find(query)
        res.send(new ResponseHandler(result))
    } catch (e) {
        next(e)
    }
})

// update user 
router.put('/:id', permit([]), async (req: Request<any, any, any, any>, res: Response, next: NextFunction) => {
    try {
        const role_id: string = req.query.role_id || 'customer';
        const query = { role_id: role_id }
        const result = userServices.find(query)
        res.send(new ResponseHandler(result))
    } catch (e) {
        next(e)
    }
})

// get all users
router.get('/', permit([]), async (req: Request<any, any, any, any>, res: Response, next: NextFunction) => {
    try {
        const role_id: string = req.query.role_id || 'customer';
        const query = { role_id: role_id }
        const result = userServices.find(query)
        res.send(new ResponseHandler(result))
    } catch (e) {
        next(e)
    }
})

// create new user
router.post('/', permit(['superadmin','board_admin','board_member']), async (req: Request<any, any, any, any>, res: Response, next: NextFunction) => {
    try {
        const role_id: string = req.payload.role || 'customer';
        const query = { role_id: role_id }
        const result = userServices.find(query)
        res.send(new ResponseHandler(result))
    } catch (e) {
        next(e)
    }
})

export default new Route("/users", router);
