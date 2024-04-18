const { AirplaneService } = require("../services");
const { StatusCodes } = require("http-status-codes");

const { SuccessResponse , ErrorResponse } = require("../utils/common")
/*
method: POST request 
URL: \airplanes
data: req.body: {modelNumber: 'airbus320', capacity:200}
*/
async function createAirplane(req, res) {

  try {
    const airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    SuccessResponse.data = airplane;
    return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse);
  } 
  
  catch (error) {
    ErrorResponse.error = error;
    return res
            .status(error.statusCode)
            .json(ErrorResponse);
  }
}
/*
method: get request 
URL: /airplanes
*/
async function getAirplanes(req, res) { 
  try {
    const airplanes = await AirplaneService.getAirplanes();
    SuccessResponse.data = airplanes;
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
method: get request 
URL: /airplanes/:id
data: req.body: {}
*/
async function getAirplane(req, res) { 
  try {
    const airplanes = await AirplaneService.getAirplane(req.params.id);
    SuccessResponse.data = airplanes;
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
URL: /airplanes/:id
data: req.body: {}
*/
async function destroyAirplane(req, res) { 
  try {
    const airplanes = await AirplaneService.destroyAirplane(req.params.id);
    SuccessResponse.data = airplanes;
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
URL: /airplanes/:id
data: req.body: {
  capacity:250
}
*/
async function updateAirplane(req, res) {
  try {
    const airplanes = await AirplaneService.updateAirplane(req.params.id, req.body);
    SuccessResponse.data = airplanes;
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
  createAirplane,
  getAirplanes,
  getAirplane,
  destroyAirplane,
  updateAirplane
};