const Notes = require("../models/Notes");
const Customers = require("../models/Customers");
const Users = require("../models//Users");


exports.getMetricStats = async (req, res, next) => {
  try {
    const notes = new Notes();
    const customers = new Customers();
    const user = new Users();
    let session_id                = req.params.session_id;
    let [result, _]               = await user.identify_user(session_id);
    let username                  = result[0]?.username;

    let [num_notes,]              = await notes.countNotes(username);
    let [num_customers,]          = await customers.countCustomers(username);
    let [avg_customers_ytd,]      = await customers.avgCustomersYTD(username);
    let [customer_delta,]         = await customers.delta(username, 1);
    let [notes_delta,]            = await notes.delta(username, 1);
    let [total_acquisition_cost,] = await customers.total_acquistion_cost(username);
    let [total_profit,]           = await customers.total_profit(username);
  
    const stats = {
      num_notes:              num_notes[0]["num_notes"],
      num_customers:          num_customers[0]["num_customers"],
      avg_customers_ytd:      avg_customers_ytd[0]["avg_customers_ytd"],
      customer_delta:         customer_delta[0]["diff"],
      notes_delta:            notes_delta[0]["diff"],
      total_acquisition_cost: total_acquisition_cost[0]["total_acquistion_cost"],
      total_profit:           total_profit[0]["total_profit"]
    }
    res.status(200).json(stats);

  } catch (err) {
    console.log("Something went wrong with user query.");
    next(err);
  }
}

exports.getTopCustomers = async (req, res, next) => {
  try {
    const customers    = new Customers();
    const user         = new Users();
    let session_id     = req.params.session_id;
    let [result, ]      = await user.identify_user(session_id);
    let username       = result[0]?.username;

    let [topCustomers,] = await customers.topX(username, 5);
    res.status(200).json(topCustomers);

  } catch (err) {
    console.log("Something went wrong with user query.");
    next(err);
  }
}



exports.getCumulativeCustomerTotal = async (req, res, next) => {
  try {
    const customers      = new Customers();
    const user           = new Users();
    let session_id       = req.params.session_id;
    let [result,]        = await user.identify_user(session_id);
    let username         = await result[0]?.username;

    let [cumulative,]    = await customers.cumulative(username);
    res.status(200).json(cumulative);

  } catch (err) {
    console.log("Something went wrong with user query.");
    next(err);
  }
}
