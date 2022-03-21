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

    async authorize(username, password) {
        /**
         * Authorize user based on username and password
         */
        const [result,_] = await this.findUser(username);
        let authorize    = result?.length>0 ?
                         bcrypt.compare(result[0].password, password) ?true : false :
                         false;


        return authorize;
    }

    async updateUser(username, img_path, user_id) {
        /**
         * Update user
         */
        let [result, _] = await this.findUser(username);
        let user_found = false;
        result[0]?.length > 0 ? user_found = true : user_found = false;

        if (user_found) {
            let sql = `
            UPDATE ${this.tablename}  
               SET username = '${username}',
                   img_path = '${img_path}'
            WHERE id = '${user_id}';
           `
            return db.execute(sql);
        } else {
            let sql = `SELECT 1 from ${this.tablename};`;
            return db.execute(sql);
        }

    }

}

module.exports = Users;
