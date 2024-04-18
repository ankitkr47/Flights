
/*
- Controllers pass the request to the service.
- Services use repositories to interact with the database.
*/
const { StatusCodes } = require("http-status-codes");
const { AirplaneRepository } = require("../repositories/");
const AppError = require("../utils/errors/app-error");

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
  try {
    const airplane = await airplaneRepository.create(data);
    return airplane;
  } catch (error) {
    // console.log(error.name);
    if (error.name == 'SequelizeValidationError') {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      console.log(explanation);
      throw new AppError(explanation,StatusCodes.BAD_REQUEST);
    }
    throw new AppError("Cannot create a new Airpalne object",StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function getAirplanes() {
  try {
    const airplanes = await airplaneRepository.getAll();
    return airplanes;
  } catch (error) {
    throw new AppError("Cannot fetch data of all the Airplanes",StatusCodes.INTERNAL_SERVER_ERROR);
    
  }
}
async function getAirplane(id) {
  try {
    const airplanes = await airplaneRepository.get(id);
    return airplanes;
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError("The Airplane you requested is not found",error.statusCode);
    }
    throw new AppError("Cannot fetch data of the Airplane",StatusCodes.INTERNAL_SERVER_ERROR);
    
  }
}

async function destroyAirplane(id) {
  try {
    const response = await airplaneRepository.destroy(id);
    return response;
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError("The Airplane you requested is not found",error.statusCode);
    }
    throw new AppError("Cannot fetch data of the Airplanes",StatusCodes.INTERNAL_SERVER_ERROR);
    
  }
}

async function updateAirplane(id, data) {
  try {
    const response = await airplaneRepository.update(id, data);
    return response;
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError("The Airplane you want to updata is not found",error.statusCode);
    }
    throw new AppError("Cannot fetch data of the Airplanes",StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

module.exports={
  createAirplane,
  getAirplanes,
  getAirplane,
  destroyAirplane,
  updateAirplane
}