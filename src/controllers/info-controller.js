// const { StatusCodes } = require('http-status-codes');

// const info = (req, res) => {
//     return res.status(StatusCodes.OK).json({
//         success: true,
//         message: 'API is live',
//         error: {},
//         data: {},
//     });
// }

// module.exports = {
//     info
// }


const { StatusCodes } = require("http-status-codes");

const info = (req, res) => {
  // API response structure
  return res.status(StatusCodes.OK).json({
    success: true, // API is successfully executed or not
    message: "Server is Live", // send a custom message to educate the end-users
    error: {}, // expose the detailed error
    data: {}, // fetch some data from the API
  });
};

module.exports = { info };