import { NextFunction, Request, Response, Router } from "express";
import { Route } from "../routes/routes.types";
import authServices from "./auth.services";
import { ResponseHandler } from "../utils/response.handler";
import { LoginValidations, SignUpValidations } from "./auth.validations";
import { permit } from "../utils/authorization/authorizations";

const router = Router();

router.get("/user/:name", permit(["CONSUMER"]), async (req, res, next) => {
    try {
        const result = await authServices.find({ email: req.params.email })
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
});

router.post("/login", ...LoginValidations, async (req, res, next) => {
    try {
        const { accessToken, userData } = await authServices.login(req.body)
        res
            .cookie('accessToken', 'Bearer ' + accessToken)
            .send(new ResponseHandler({userData, accessToken}));
    } catch (e) {
        next(e);
    }
});

router.post("/register", ...SignUpValidations, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await authServices.register(req.body)
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
});

export default new Route("/auth", router);







