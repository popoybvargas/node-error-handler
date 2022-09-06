"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorCode_1 = require("./errorCode");
const errorException_1 = require("./errorException");
const errorStatus_1 = require("./errorStatus");
exports.default = (err, _, res, __) => {
    console.error(`ERROR ${JSON.stringify(err)}`);
    let errorCode = errorCode_1.ErrorCode.UnknownError;
    let errorStatus = err instanceof errorException_1.ErrorException ? err.status : errorStatus_1.ErrorStatus.UnknownError;
    let errorMessage = err.message;
    res.status(errorStatus);
    if (err instanceof errorException_1.ErrorException)
        res.json(err);
    else
        res.json({ code: errorCode, status: errorStatus, errorMessage });
};
