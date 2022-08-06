const express = require("express");

const RequestsController = require("../controller/requests.controller");
const Validator = require("../middleware/validator.middleware");

const RequestRouter = express.Router();

//Sub Routes [/requests]
RequestRouter.get("/", RequestsController.allRequests);

RequestRouter.post("/new", RequestsController.create);
RequestRouter.get("/my-request", RequestsController.myRequests);
RequestRouter.get("/:reqId", RequestsController.getRequest);
RequestRouter.post("/donate", RequestsController.makeDonation);


// RequestRouter.delete('/:reqID/delete', Validator.isLoggedin,RequestsController.deleteRequest)

//Exports
module.exports = RequestRouter;
