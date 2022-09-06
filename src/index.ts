import { Request, Response, NextFunction } from 'express';

import { ErrorCode } from './errorCode';
import { ErrorException } from './errorException';
import { ErrorModel } from './errorModel';
import { ErrorStatus } from './errorStatus';

export const errorHandler = (err: Error, _: Request, res: Response, __: NextFunction) =>
{
  console.error(`ERROR ${JSON.stringify(err)}`);
  
  let errorCode = ErrorCode.UnknownError;
  let errorStatus = err instanceof ErrorException ? err.status : ErrorStatus.UnknownError;
  let errorMessage = err.message;

  res.status(errorStatus);

  if (err instanceof ErrorException) res.json(err);
	else res.json({ code: errorCode, status: errorStatus, errorMessage } as ErrorModel);
};