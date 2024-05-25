import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { ExcludedRoutes } from "../routes/routes.types";
import { authReponses } from "../auth/auth.responses";
import userServices from "../users/users.services";

export const validateToken = (excludedRoutes: ExcludedRoutes) =>
    (req: Request, res: Response, next: NextFunction) => {
        try {

            if (excludedRoutes.find(route => route.path(req.path) && route.method === req.method)) {
                return next();
            }

            const token = req.headers.authorization;

            if (!token) throw authReponses.UNAUTHORISED_ACCESS_DENIED;

            const { JWT_ACCESS_TOKEN } = process.env;
            const payload = verify(token, JWT_ACCESS_TOKEN);

            req.payload = payload;

            next();
        } catch (e) {
            next(authReponses.UNAUTHORISED_ACCESS_DENIED)
        }
    }



type Role = 'superadmin' | 'consumer' | 'board_member' | 'board_admin' | 'supervisor' | 'field_worker' ;
type Roles = Role[]

export const permit = (roles: Roles) =>
    (req: Request, res: Response, next: NextFunction) => {
        console.log("req.payload" ,req.payload)
        console.log("req.payload" ,roles)
        if (!roles.includes(req.payload.role)) throw authReponses.UNAUTHORISED_ACCESS_DENIED;

        next();
    }

    // const permit = (roles: Roles) =>
    //     async (req: Request, res: Response, next: NextFunction) => {
    //         try {
    //             const userId = req.payload.id;
    //             const user = await userServices.findOneWithRole(userId);
    
    //             if (!roles.includes(user.role as Role)) {
    //                 throw authReponses.UNAUTHORISED_ACCESS_DENIED;
    //             }
    
    //             next();
    //         } catch (error) {
    //             next(error);
    //         }
    //     };