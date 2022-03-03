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
    result = await note.insert_data("raji","Test 1", "This is body of Test 1", "2022-03-03");
    console.log(result);

    result = await note.insert_data("raji","Test 2", "This is body of Test 3", "2022-03-01");
    console.log(result);

    result = await note.insert_data("raji","Test 3", "This is body of Test 1", "2022-03-01");
    console.log(result);

    result = await user.insert_data("raji","Password123",  "2022-03-03", "rajiroy123@yahoo.com");
    console.log(result);

    result = await user.insert_data("raji","Welcome123",  "2022-03-01","rajiroy123@yahoo.com");
    console.log(result);

    result = await user.insert_data("raji","Welcome123",  "2022-03-01", "rajiroy123@yahoo.com");
    console.log(result);

    /* Find all Values */
    // [result,_] = await note.findAll();
    // console.log(result);

}

setup_db();
