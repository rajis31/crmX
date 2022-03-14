const express = require("express");
const CustomersController = require("../controllers/customersController"); 
const router  = express.Router();

// Customer Routes  
router.route("/")
      .get(CustomersController.findAllCustomers);

router.route("/create")
      .post(CustomersController.addCustomer);

module.exports = router; 
