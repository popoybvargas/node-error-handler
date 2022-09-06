import { ErrorCode } from './errorCode';
import { ErrorStatus } from './errorStatus';

export class ErrorException extends Error
{
  status: number;
  // metaData: any = null;
  errorMessage?: string;

  // constructor(code: string = ErrorCode.UnknownError, metaData: any = null)
  constructor(code: string = ErrorCode.UnknownError, message?: string)
	{
    super(code);

    Object.setPrototypeOf(this, new.target.prototype);
    this.name = code;
    this.status = 500;
    // this.metaData = metaData;

    for (const [codeKey, codeVal] of Object.entries(ErrorCode))
    {
      if (code === codeVal)
      {
        for (const [statusKey, statusVal] of Object.entries(ErrorStatus))
        {
          if (codeKey === statusKey)
          {
            this.status = statusVal;
            // this.message = this.metaData?.message || this.message;
            this.errorMessage = message || this.message;
            break;
          }
        }
        break;
      }
    }
  }
};