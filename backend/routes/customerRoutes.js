const express = require("express");
const CustomersController = require("../controllers/customersController"); 
const router  = express.Router();

// Customer Routes  
router.route("/:session_id")
      .get(CustomersController.findAllCustomers);

router.route("/create")
      .post(CustomersController.addCustomer);

router.route("/report/:session_id")
      .get(CustomersController.generateCustomerCsv);

module.exports = router; 
