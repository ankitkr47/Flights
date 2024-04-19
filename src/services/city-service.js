const { StatusCodes } = require("http-status-codes");
const { CityRepository } = require("../repositories/");
const AppError = require("../utils/errors/app-error");

const cityRepository = new CityRepository();

async function createCity(data) {
    try {
        const city = await cityRepository.create(data);
        return city;
      } catch (error) {
        console.log(error.name);
        if (error.name == 'SequelizeValidationError' || error.name =='SequelizeUniqueConstraintError') {
          let explanation = [];
          error.errors.forEach((err) => {
            explanation.push(err.message);
          });
          console.log(explanation);
          throw new AppError(explanation,StatusCodes.BAD_REQUEST);
        }
        throw new AppError("Cannot create a new city object",StatusCodes.INTERNAL_SERVER_ERROR);
      }
}

async function deleteCity(id) {
  try {
    const response = await cityRepository.destroy(id);
    return response;
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError("The City you requested is not found",error.statusCode);
    }
    throw new AppError("Cannot fetch data of the City",StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function updateCity(id,data) {
  try {
    const response = await cityRepository.update(id, data);
    return response;
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError("The City you requested is not found",error.statusCode);
    }
    throw new AppError("Cannot fetch data of the City",StatusCodes.INTERNAL_SERVER_ERROR);
  }
  
}
module.exports = {
  createCity,
  deleteCity,
  updateCity
}