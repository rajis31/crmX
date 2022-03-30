const express = require("express");
const statsController = require("../controllers/statsController"); 
const router  = express.Router();

// Stats Routes  
router.route("/get_metric_stats/:session_id")
      .get(statsController.getMetricStats);

router.route("/get_top_customers/:session_id")
      .get(statsController.getTopCustomers);

router.route("/get_cumulative_customer_total/:session_id")
      .get(statsController.getCumulativeCustomerTotal);

module.exports = router;
