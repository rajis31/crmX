const Notes = require("../models/Notes");
const Users = require("../models/Users");


async function setup_db(){
    /* Create Model Objects */ 
    let note = new Notes();
    let user = new Users();

    /* Create Tables */
    let result = await note.create_table();
    console.log(result);

    result = await user.create_table();
    console.log(result);


    /* Insert Values */
    // let note = new Notes("raji","Test 1", "This is body of Test 1", "2022-03-03");
    // result = await note.insert_data();
    // console.log(result);

    // note = new Notes("raji","Test 2", "This is body of Test 3", "2022-03-01");
    // result = await note.insert_data();
    // console.log(result);

    // note = new Notes("raji","Test 3", "This is body of Test 1", "2022-03-01");
    // result = await note.insert_data();
    // console.log(result);


    /* Find all Values */
    // [result,_] = await note.findAll();
    // console.log(result);

}

setup_db();
