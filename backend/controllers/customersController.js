const Customers = require("../models/Customers");
const Users = require("../models/Users");
let json2csv = require('json2csv').parse;


exports.findAllCustomers = async (req, res, next) => {
  try {
    const customer = new Customers();
    const user = new Users();

    let session_id = req.params.session_id;
    let [result, _] = await user.identify_user(session_id);
    let username = result[0]?.username;

    [result, _] = await customer.findAll(username);
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    next(err);
  }
}


exports.addCustomer = async (req, res, next) => {
  try {

    let customer = new Customers();
    let user = new Users();
    let session_id = req.body.session_id;

    let [result, _] = await user.identify_user(session_id);
    let username = result[0]?.username;
    let customer_name = req.body.customer_name;
    let dob = req.body.dob;
    let email = req.body.email;
    let profit = req.body.profit;
    let acq_cost = req.body.acq_cost;
    let date_created = new Date().toJSON().slice(0, 10).replace(/-/g, '-');

    [result, _] = await customer.insert_data(
      username,
      customer_name,
      dob,
      email,
      profit,
      acq_cost,
      date_created);
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    next(err);
  }
}

exports.generateCustomerCsv = async (req, res, next) => {
  try {
    let customer = new Customers();
    let user = new Users();
    let session_id = req.params.session_id;
    let [result, _] = await user.identify_user(session_id);
    let username = result[0]?.username;
    [result, _] = await customer.findAll(username);

    let fields = ["customer_name", "date_of_birth", "email", "profit", "acquisition_cost", "date_created"];
    let csv = result.length > 0 ?
      json2csv(result, fields) :
      json2csv([{ "No Data": "No Data" }], ["No Data"]);
    res.attachment('Customers.csv');
    return res.status(200).send(csv);
  } catch (err) {
    console.log(err);
    next(err);
  }
}
