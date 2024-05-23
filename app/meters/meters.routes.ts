import { Router } from "express";
import { Route } from "../routes/routes.types";
import { ResponseHandler } from "../utils/response.handler";
import { permit } from "../utils/authorizations";

const router = Router();

// get meter
router.get("/:userId", permit(['supervisor', 'superadmin','consumer','board_member','board_admin']), async (req, res, next) => {
    try {
        const result = 'a ;';
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
});

// get meterById
router.get("/:userId/:meterId", permit(['supervisor', 'superadmin']), async (req, res, next) => {
    try {
        const result = 'a ;';
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
});

// update meter
router.put("/:userId/:meterId", permit(['supervisor', 'superadmin']), async (req, res, next) => {
    try {
        const result = 'a ;';
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
});


export default new Route("/", router);
