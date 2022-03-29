const Notes     = require("../models/Notes");
const Customers = require("../models/Customers");
const Users     = require("../models//Users");



exports.getMetricStats = async (req, res, next) => {
    try{
        const notes               = new Notes();
        const customers           = new Customers();
        const user                = new Users();
        let session_id            = req.params.session_id;
        let [result,_]            = await user.identify_user(session_id);
        let username              = result[0]?.username;

        let [num_notes, ]         = await notes.countNotes(username);
        let [num_customers, ]     = await customers.countCustomers(username);
        let [avg_customers_ytd, ] = await customers.avgCustomersYTD(username);
        let [customer_delta,]     = await customers.delta(username,1);
        let [notes_delta,]        = await notes.delta(username,1);    
        

        const stats = {
            num_notes:         num_notes[0]["num_notes"],
            num_customers:     num_customers[0]["num_customers"],
            avg_customers_ytd: Math.round(avg_customers_ytd[0]["days_between"]*100)/100,
            customer_delta:    customer_delta[0]["diff"],
            notes_delta:       notes_delta[0]["diff"]
        }
        res.status(200).json(stats);

    } catch(err){
      console.log("Something went wrong with user query.");
      next(err);
    }
  }

  exports.geTopCustomers = async (req, res, next) => {
    try{
        const customers      = new Customers();
        const user           = new Users();
        let session_id       = req.params.session_id;
        let username         = user.identify_user(session_id);

        let [topCustomers, ] = await customers.topX(username,5);
        res.status(200).json(topCustomers);

    } catch(err){
      console.log("Something went wrong with user query.");
      next(err);
    }
  }


  
  exports.geCumulativeCustomerTotal = async (req, res, next) => {
    try{
        const customers    = new Customers();
        const user       = new Users();
        let session_id   = req.params.session_id;
        let username     = user.identify_user(session_id);

        let [cumulative, ] = await customers.cumulative(username);
        res.status(200).json(cumulative);

    } catch(err){
      console.log("Something went wrong with user query.");
      next(err);
    }
  }
