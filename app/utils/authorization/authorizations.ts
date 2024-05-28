import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { ExcludedRoutes } from "../../routes/routes.types";
import { authReponses } from "../../auth/auth.responses";
import { Roles } from "./authorization.types";


export const validateToken = (excludedRoutes: ExcludedRoutes) =>
    (req: Request, res: Response, next: NextFunction) => {
        try {
            if (excludedRoutes.find(route => route.path(req.path) && route.method === req.method)) {
                return next();
            }
            const token = req.headers.authorization?.split(' ')[1];

            if (!token) throw authReponses.UNAUTHORISED_ACCESS_DENIED;

            const { JWT_ACCESS_TOKEN } = process.env;
            const payload = verify(token, JWT_ACCESS_TOKEN);
            req.payload = payload;
            next();
        } catch (e) {
            next(authReponses.UNAUTHORISED_ACCESS_DENIED)
        }
    }

export const permit = (permittedRoles: Roles) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log("===================================asdfasf========")
            console.log("(req.payload.Role.name) ", req.payload)
            if (!permittedRoles.includes(req.payload.role)) {
                console.log(permittedRoles)
                throw authReponses.UNAUTHORISED_ACCESS_DENIED;
            }
            next();
        } catch (e) {
            next(e)
        }
    }
}