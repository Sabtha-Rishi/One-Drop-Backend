// IMPORTS
const RequestModel = require("../model/requests.model                                                                                                                                                                                                                                                                                                                                                                        ");

//Request Handlers

const allRequests = (req, res) => {
  RequestModel.find({}, (err, results) => {
    if (err) {
      return res.json({
        isSuccess: false,
        err: err.message,
      });
    }
    return res.json({
      isSuccess: true,
      requests: results,
    });
  });
};

const RequestController = { allRequests };
module.exports = RequestController;
