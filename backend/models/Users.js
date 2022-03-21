const db = require("../config/db");
const bcrypt = require("bcrypt");

class Users {

    constructor() {
        this.tablename = "users";
    }

    create_table() {
        let sql = `
            create table if not exists ${this.tablename} (
                id int primary key auto_increment, 
                username varchar(255),
                password varchar(255), 
                date_created date,
                img_path varchar(255)
            );
        `;

        return db.execute(sql);
    }


    async insert_data(username, password, date_created, email, img_path) {
        /**
         * Insert a new row into table
         */

        password = await bcrypt.hash(password, 10);

        let sql = `
            INSERT INTO ${this.tablename} (username, password, date_created, img_path) 
            VALUES 
            ( '${username}', '${password}'  ,'${date_created}', '${img_path}' );
        `;

        return db.execute(sql);
    }

    async findUser(username) {
        /**
         * Retrieve Current user
         */

        let sql = `
            SELECT username, password FROM ${this.tablename} 
            WHERE username = '${username}';
        `
        return db.execute(sql);
    }

    async updateUser(username, img_path, user_id) {
        /**
         * Update user
         */
        let user_found = await this.findUser(username);
        console.log(user_found);

        let sql = `
         UPDATE ${this.tablename}  
            SET username = '${username}',
                img_path = '${img_path}'
         WHERE id = '${user_id}';
        `
        return db.execute(sql);

    }

}

module.exports = Users;
