import { NextFunction, Request, Response, Router } from "express";

import { Route } from "../routes/routes.types";
import userServices from "./user.services";
import { ResponseHandler } from "../utils/response.handler";
import { roleValidator } from "./user.validations";

const router = Router();

router.get('/', ...roleValidator, async (req:Request<any,any,any,any>, res:Response, next:NextFunction) => {
    try {
        const role: string = req.query.role || 'customer';
        const query = {role}
        const result = userServices.find(query)
        res.send(new ResponseHandler(result))
    } catch (e) {
        next(e)
    }
})

export default new Route("/users", router);
