const express = require("express");

const RequestsController = require("../controller/requests.controller");
const Validator = require("../middleware/validator.middleware");

const RequestRouter = express.Router();

//Sub Routes [/requests]
RequestRouter.get("/", RequestsController.allRequests);

RequestRouter.post("/new", RequestsController.create);
// RequestRouter.delete('/:reqID/delete', Validator.isLoggedin,RequestsController.deleteRequest)
// RequestRouter.get("/:reqID", RequestsController.getRequest);

//Exports
module.exports = RequestRouter;
