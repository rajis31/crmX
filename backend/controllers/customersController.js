const Customers = require("../models/Customers");


exports.findAllCustomers = async (req, res, next) => {
    try{
        let customer       = new Customers();
        let username       = "raji"; 
        let [result,_] = await customer.findAll(username);
        return res.status(200).json(result);
    } catch(err){
      console.log(err);
      next(err);
    }
  }


exports.addCustomer = async (req, res, next) => {
    try{

        let customer       = new Customers();
        let username       = "raji"; 
        let customer_name  = req.body.customer_name;
        let dob            = req.body.dob;
        let email          = req.body.email;
        let profit         = req.body.profit; 
        let acq_cost       = req.body.acq_cost; 
        let date_created   = new Date().toJSON().slice(0,10).replace(/-/g,'-');

        let [result,_] = await customer.insert_data(
                                    username,
                                    customer_name,
                                    dob, 
                                    email,
                                    profit,
                                    acq_cost, 
                                    date_created);
        return res.status(200).json(result);
    } catch(err){
      console.log(err);
      next(err);
    }
  }
