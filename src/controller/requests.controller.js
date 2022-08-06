// IMPORTS
const RequestModel = require("../model/requests.model");
const AccountsModel = require("../model/accounts.model");

const jwt = require("jsonwebtoken");

JWT_SECRET = process.env.JWT_SECRET;

//Request Handlers

//All Requests
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

// New Request
const create = (req, res) => {
  const userID = jwt.verify(req.cookies.token, JWT_SECRET).id;

  let newReq = new RequestModel(req.body);

  newReq.userId = userID;

  newReq.save((err, result) => {
    if (err) {
      return res.json({
        isSuccess: false,
        err: err.message,
      });
    }
    return res.status(201).json({
      isSuccess: true,
      request: result,
    });
  });
};

// Single request

const getRequest = (req, res) => {
  reqId = req.params.reqId;

  RequestModel.findById(reqId, (err, result) => {
    if (err) {
      return res.json({
        isSuccess: false,
        err: err.message,
      });
    }

    AccountsModel.find()
      .where("_id")
      .in(result.donors)
      .exec((err, donorsData) => {
        donors = donorsData;
        return res.status(201).json({
          isSuccess: true,
          request: result,
          donors: donors,
        });
      });
  });
};

// User requests

const myRequests = (req, res) => {
  const userID = jwt.verify(req.cookies.token, JWT_SECRET).id;

  RequestModel.find({ userId: userID }, (err, results) => {
    if (err) {
      return res.json({
        isSuccess: false,
        err: err.message,
      });
    }
    return res.status(201).json({
      isSuccess: true,
      requests: results,
    });
  });
};

// Donate Endpoint

const makeDonation = (req, res) => {
  const userID = jwt.verify(req.cookies.token, JWT_SECRET).id;

  const reqId = req.body.reqId;

  RequestModel.findByIdAndUpdate(
    reqId,
    { $push: { donors: userID } },
    (err, result) => {
      if (err) {
        return res.json({
          isSuccess: false,
          err: err.message,
        });
      }

      return res.send("Added to Wishlist");
    }
  );
};

const RequestController = {
  allRequests,
  create,
  getRequest,
  myRequests,
  makeDonation,
};
module.exports = RequestController;
