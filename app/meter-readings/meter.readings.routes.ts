// import { Router } from "express";
// import { Route } from "../routes/routes.types";
// import { ResponseHandler } from "../utils/response.handler";
// import { permit } from "../utils/authorization/authorizations";

// const router = Router();

// // get all readings
// router.get("/", permit(['board_admin','board_member', 'consumer', 'superadmin']), async (req, res, next) => {
//     try {
//         const result = 'a ;';
//         res.send(new ResponseHandler(result));
//     } catch (e) {
//         next(e);
//     }
// });

// // get readingById
// router.get("/:id", permit(['board_admin','board_member', 'consumer', 'superadmin']), async (req, res, next) => {
//     try {
//         const result = 'a ;';
//         res.send(new ResponseHandler(result));
//     } catch (e) {
//         next(e);
//     }
// });

// // update reading
// router.put("/:id", permit(['field_worker', 'superadmin']), async (req, res, next) => {
//     try {
//         const result = 'a ;';
//         res.send(new ResponseHandler(result));
//     } catch (e) {
//         next(e);
//     }
// });

// // create new reading
// router.post("/", permit(['field_worker', 'superadmin']), async (req, res, next) => {
//     try {
//         const result = 'a ;';
//         res.send(new ResponseHandler(result));
//     } catch (e) {
//         next(e);
//     }
// });

// export default new Route("/readings", router);
