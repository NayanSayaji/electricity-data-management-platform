// import { Router } from "express";
// import { Route } from "../routes/routes.types";
// import { ResponseHandler } from "../utils/response.handler";
// import { permit } from "../utils/authorization/authorizations";

// const router = Router();

// // get all boards
// router.get("/", permit(['superadmin']), async (req, res, next) => {
//     try {
//         const result = 'a ;';
//         res.send(new ResponseHandler(result));
//     } catch (e) {
//         next(e);
//     }
// });

// // get board
// router.get("/:id", permit(['superadmin']), async (req, res, next) => {
//     try {
//         const result = 'a ;';
//         res.send(new ResponseHandler(result));
//     } catch (e) {
//         next(e);
//     }
// });

// // update board
// router.put("/:id", permit(['superadmin']), async (req, res, next) => {
//     try {
//         const result = 'a ;';
//         res.send(new ResponseHandler(result));
//     } catch (e) {
//         next(e);
//     }
// });

// // add new board
// router.post("/new", permit(['superadmin']), async (req, res, next) => {
//     try {
//         const result = 'a ;';
//         res.send(new ResponseHandler(result));
//     } catch (e) {
//         next(e);
//     }
// });

// export default new Route("/boards/", router);
