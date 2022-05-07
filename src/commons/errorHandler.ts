import { Request, Response, NextFunction } from 'express'

export function logError(err: Error, req: Request, res: Response, next: NextFunction) {
  console.error(err.message)
  next(err)
}

export function sendError(err: Error, req: Request, res: Response, next: NextFunction) {
  return res.status(500).send({ status: 'FAILED', message: err.message })
}

export default {
    logError,
    sendError
}