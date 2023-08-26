// const express = require('express');

// const { InfoController } = require('../../controllers');

// const airplaneRoutes = require('./airplane-routes');

// const router = express.Router();

// router.use('/airplanes' , airplaneRoutes);

// router.get('/info', InfoController.info);

// module.exports = router;

const express = require("express");
const router = express.Router();
const { InfoController } = require("../../controllers");
const airplaneRoutes = require("./airplane-routes");
/*
router.get("/info", (req, res) => {
  // Link : http://localhost:3000/api/v1/info
  return res.json({ ms: "OK" });
});
*/
// Replace the above code using this current clean code

router.use("/airplanes", airplaneRoutes);
router.get("/info", InfoController.info);

module.exports = router;