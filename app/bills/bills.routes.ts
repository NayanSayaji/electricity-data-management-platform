import { Router } from "express";
import { Route } from "../routes/routes.types";
import { ResponseHandler } from "../utils/response.handler";
import { permit } from "../utils/authorizations";

const router = Router();

// generate all bills
router.get("/", permit(['supervisor', 'superadmin']), async (req, res, next) => {
    try {
        const result = 'a ;';
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
});

// get bill by id 
router.get("/:id", permit(['supervisor', 'superadmin']), async (req, res, next) => {
    try {
        const result = 'a ;';
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
});

// generate all bills
router.post("/generate", permit(['supervisor', 'superadmin']), async (req, res, next) => {
    try {
        const result = 'a ;';
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
});

export default new Route("/bills", router);
