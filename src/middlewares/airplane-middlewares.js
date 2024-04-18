const { StatusCodes } = require("http-status-codes");

const { ErrorResponse } = require("../utils/common")

function validateCreateRequest(req,res,next){
    ErrorResponse.message = "Something Went wrong while creating airplane";
    ErrorResponse.error = {
      explanation:
        "Model Number not found in the incomming request in the correct form",
    };
    if(!req.body.modelNumber){
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    next();
}
module.exports = {
    validateCreateRequest
}