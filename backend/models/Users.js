const db = require("../config/db");

class Users{

    constructor(){
        this.tablename = "users";
    }

    create_table(){
        let sql = `
            create table if not exists ${this.tablename} (
                id int primary key auto_increment, 
                username varchar(255),
                password varchar(255), 
                date_created date
            );
        `;

        console.log(sql);

        return db.execute(sql);
    }
    

    insert_data(username, password, date_created, email){
        /**
         * Insert a new row into table
         */

        this.username     = username;
        this.password     = password; 
        this.email        = email; 
        this.date_created = date_created;

        let sql = `
            INSERT INTO ${this.tablename} (username, password, date_created) VALUES 
            ( '${this.username}', '${this.password}'  ,'${this.date_created}' );
        `;

        return db.execute(sql);
    }

    static findUser(username){
        /**
         * Retrieve Current user
         */

        let sql =  `
            SELECT * FROM ${this.tablename} where username = '${username}'; 
        `
        return db.execute(sql);
    }

}

module.exports = Users;
