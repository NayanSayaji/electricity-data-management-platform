import { NextFunction, Request, Response } from "express";

export const setRole = (req:Request, res:Response, next:NextFunction) =>{
    const role = req.payload.role
}