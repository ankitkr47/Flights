const { StatusCodes } = require("http-status-codes");

const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");

function validateCreateRequest(req,res,next){
    ErrorResponse.message = "Something Went wrong while creating city";
    ErrorResponse.error = new AppError("Name not found in the incomming request in the correct form", StatusCodes.BAD_REQUEST);
    
    if(!req.body.name){
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    next();
}
module.exports = {
    validateCreateRequest
}