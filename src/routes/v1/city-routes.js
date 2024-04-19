const express = require('express');

const { CityController } = require('../../controllers');
const { CityMiddlewares } = require('../../middlewares');

const router = express.Router();

/*
method: POST
URL : /api/v1/cities/
*/
router.post('/', CityMiddlewares.validateCreateRequest, CityController.createCity);

/*
method: DELETE
URL : /api/v1/cities/:id
*/
router.delete('/:id', CityController.deleteCity);

/*
method: PATCH
URL : /api/v1/cities/:id
*/
router.patch('/:id', CityController.updateCity);

module.exports = router;