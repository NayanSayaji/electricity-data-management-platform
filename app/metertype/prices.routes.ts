import { Router } from "express";
import { Route } from "../routes/routes.types";
import { ResponseHandler } from "../utils/response.handler";
import { permit } from "../utils/authorizations";

const router = Router();

// get price
router.get("/:boardId/:meterType", permit(['supervisor', 'superadmin']), async (req, res, next) => {
    try {
        const result = 'a ;';
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
});

// update price
router.put("/:boardId/:meterType", permit(['consumer']), async (req, res, next) => {
    try {
        const result = 'a ;';
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
});

// create new ticket
router.post("/:boardId/", permit(['consumer']), async (req, res, next) => {
    try {
        const result = 'a ;';
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
});

export default new Route("/prices", router);
