import { Request, Response, NextFunction } from "express";
import { StatusCode } from "../models/status-code";
export const globalError = (
    err: {statusCode?: StatusCode; message?: string},
    req: Request,
    res: Response,
    next: NextFunction) => {
    const status = err.statusCode || StatusCode.InternalServerError
    console.log(`[ERRO] - ${status} - ${err.message}`)
    res.status(status).json({
        error: true,
        message: err.message || 'Erro interno no servidor!'
    })
}