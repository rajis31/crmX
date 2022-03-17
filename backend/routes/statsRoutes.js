const express = require("express");
const statsController = require("../controllers/statsController"); 
const router  = express.Router();

// Stats Routes  
router.route("/get_metric_stats")
      .get(statsController.getMetricStats);

router.route("/get_top_customers")
      .get(statsController.geTopCustomers);

router.route("/get_cumulative_customer_total")
      .get(statsController.geCumulativeCustomerTotal);

module.exports = router;
