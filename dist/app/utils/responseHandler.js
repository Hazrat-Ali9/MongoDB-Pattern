"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendApiResponse = void 0;
const sendApiResponse = (res, statusCode, success, data, error) => {
    const apiResponse = { success };
    if (data) {
        apiResponse.data = data;
    }
    if (error) {
        apiResponse.error = error;
    }
    res.status(statusCode).send(apiResponse);
};
exports.sendApiResponse = sendApiResponse;
