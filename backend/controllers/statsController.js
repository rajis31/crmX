const Notes     = require("../models/Notes");
const Customers = require("../models/Customers");


exports.getMetricStats = async (req, res, next) => {
    try{
        const notes     = new Notes();
        const customers = new Customers();

        let [num_notes, ]         = await notes.countNotes();
        let [num_customers, ]    = await customers.countCustomrs();
        let [avg_customers_ytd, ] = await customers.avgCustomersYTD();

        const stats = {
            num_notes: num_notes,
            num_customers: num_customers,
            avg_customers_ytd: avg_customers_ytd
        }
        res.status(200).json(stats);

    } catch(err){
      console.log("Something went wrong with user query.");
      next(err);
    }
  }