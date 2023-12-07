"use strict";
const responseCodes = require('../utility/responseCode');

class ResponseContent {
    constructor(status, message, data, errorObj, currentdate = new Date()) {
        if (status) {
            this.status = status;
        } else {
            throw Error('Invalid Arguments: status');
        }
        if (status !== responseCodes.SUCESS.code) {
            if (!errorObj) {
                // throw Error('Invalid Arguments');
            } else {
                this.error = { name: errorObj.name, status: errorObj.status, message: errorObj.message };
            }
        }
        this.data = data;
        this.message = message || (errorObj ? errorObj.message : '');
        this.currentdate = currentdate;
    }
}

module.exports = {
    ResponseContent
};
