export class ErrorModel
{
  /** Unique error code which identifies the error. */
  code: string;
  /** Status code of the error. */
  status: number;
  /** * Any additional data that is required for translation. */
  // metaData?: any;
	message?: string;

	// constructor(code: string, status: number, metaData?: any)
	constructor(code: string, status: number, message?: string)
	{
		this.code = code;
		this.status = status;
		// this.metaData = metaData;
		this.message = message;
	};
};