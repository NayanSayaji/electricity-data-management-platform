import { Router } from "express";
import { Route } from "../routes/routes.types";
import { ResponseHandler } from "../utils/response.handler";
import { permit } from "../utils/authorizations";

const router = Router();

// get all tickets
router.get("/", permit(['supervisor', 'superadmin']), async (req, res, next) => {
    try {
        const result = 'a ;';
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
});

// get tickeyById
router.get("/:id", permit(['supervisor', 'superadmin']), async (req, res, next) => {
    try {
        const result = 'a ;';
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
});

// update ticket
router.put("/:id", permit(['consumer']), async (req, res, next) => {
    try {
        const result = 'a ;';
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
});

// create new ticket
router.post("/", permit(['consumer']), async (req, res, next) => {
    try {
        const result = 'a ;';
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
});

export default new Route("/tickets", router);
