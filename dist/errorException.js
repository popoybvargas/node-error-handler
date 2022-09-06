"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorException = void 0;
const errorCode_1 = require("./errorCode");
const errorStatus_1 = require("./errorStatus");
class ErrorException extends Error {
    constructor(code = errorCode_1.ErrorCode.UnknownError, message) {
        super(code);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = code;
        this.status = 500;
        for (const [codeKey, codeVal] of Object.entries(errorCode_1.ErrorCode)) {
            if (code === codeVal) {
                for (const [statusKey, statusVal] of Object.entries(errorStatus_1.ErrorStatus)) {
                    if (codeKey === statusKey) {
                        this.status = statusVal;
                        this.errorMessage = message || this.message;
                        break;
                    }
                }
                break;
            }
        }
    }
}
exports.ErrorException = ErrorException;
;
