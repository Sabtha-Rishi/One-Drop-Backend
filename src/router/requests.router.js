const express = require('express');

const RequestsController = require('../controller/products.controller');
const Validator = require('../middleware/validator.middleware');

const RequestRouter = express.Router();

//Sub Routes [/requests]
RequestRouter.get("/", RequestsController.allrequests);

// RequestRouter.post('/create', RequestsController.upload.single('file') ,RequestsController.create)
// RequestRouter.delete('/:reqID/delete', Validator.isLoggedin,RequestsController.deleteRequest)
// RequestRouter.get("/:reqID", RequestsController.getRequest);



//Exports
module.exports = RequestRouter;