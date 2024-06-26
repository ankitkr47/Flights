const { CityService } = require("../services");
const { StatusCodes } = require("http-status-codes");

const { SuccessResponse, ErrorResponse } = require("../utils/common")

/*
method: POST request 
URL: /cities
data: req.body: {name: 'London'}
*/
async function createCity(req, res) { 
    try {
        const city = await CityService.createCity({
            name : req.body.name
        });
        SuccessResponse.data = city;
        return res
           .status(StatusCodes.OK)
           .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}
/*
method: DELETE request 
URL: /cities/:id
data: req.body: {}
*/
async function deleteCity(req, res) {
    try {
        const city = await CityService.deleteCity(req.params.id);
        SuccessResponse.data = city;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse);
        
    } catch (error) {
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}

/*
method: PATCH request 
URL: /cities/:id
data: req.body: {
    name: 'London'
}
*/
async function updateCity(req, res) {
    try {
        const city = await CityService.updateCity(req.params.id, req.body);
        SuccessResponse.data = city;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
    return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}

module.exports = {
    createCity,
    deleteCity,
    updateCity
}