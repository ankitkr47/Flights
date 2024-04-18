const express = require("express");
const { AirplaneController } = require("../../controllers");
const { AirplaneMiddlewares } = require("../../middlewares");

const router = express.Router();

/*
method: POST
URL : /api/v1/airplanes/
*/
router.post("/", 
            AirplaneMiddlewares.validateCreateRequest,
    AirplaneController.createAirplane);
            
/*
method: get
URL : /api/v1/airplanes/
*/
router.get("/", AirplaneController.getAirplanes);

/*
method: get
URL : /api/v1/airplanes/:id
*/
router.get('/:id', AirplaneController.getAirplane);

/*
method: get
URL : /api/v1/airplanes/:id
*/
router.delete('/:id', AirplaneController.destroyAirplane);

/*
method: get
URL : /api/v1/airplanes/:id
*/
router.patch('/:id', AirplaneController.updateAirplane);

module.exports = router;
