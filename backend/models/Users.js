const db = require("../config/db");
const bcrypt = require("bcrypt");

class Users {

    constructor() {
        this.tablename = "users";
    }

    create_table() {
        /**
        * Create sql table
        */

        let sql = `
            create table if not exists ${this.tablename} (
                id int primary key auto_increment, 
                username varchar(255),
                password varchar(255), 
                email varchar(255),
                date_created date,
                img_path varchar(255),
                session_id varchar(255)
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
            INSERT INTO ${this.tablename} (username, password, email, date_created, img_path) 
            VALUES 
            ( 
              '${username}', 
              '${password}', 
              '${email}' , 
              '${date_created}', 
              '${img_path}' 
            );
        `;

        return db.execute(sql);
    }

    async findUser(username) {
        /**
         * Retrieve Current user
         */

        let sql = `
            SELECT username, 
                   password, 
                   session_id 
            FROM ${this.tablename} 
            WHERE username = '${username}';
        `
        return db.execute(sql);
    }

    async authorize(username, password) {
        /**
         * Authorize user based on username and password
         */

        const [result, _] = await this.findUser(username);
        let passwordComparison = result[0]?.password ?
            await bcrypt.compare(password, result[0]?.password) :
            false;

        if (result.length > 0 && passwordComparison) {
            return true;
        } else {
            return false;
        }
    }

    async updateUser(session_id, img_path) {
        /**
         * Update user
         */
        
        let [result, _] = await this.identify_user(session_id);
        let user_found;
        result?.length > 0 ? user_found = true : user_found = false;

        if (user_found) {
            let username = result[0]?.username;
            let sql = `
            UPDATE ${this.tablename}  
               SET img_path = '${img_path}'
            WHERE username = '${username}';
           `
            return db.execute(sql);
        } else {
            let sql = `SELECT 1 from ${this.tablename};`;
            return db.execute(sql);
        }

    }
    async updateSessionId(username, session_id) {
        /**
         * Update user's session id
         */

        let sql = `
        UPDATE ${this.tablename}  
            SET session_id = '${session_id}'
        WHERE username = '${username}';
        `
        return db.execute(sql);
    }

    async check_session_id(session_id) {
        /**
         * Check if session_id is in the db
         */
        let sql = `
            SELECT session_id 
            FROM ${this.tablename}  
            WHERE session_id = '${session_id}';
        `;

        return db.execute(sql);
    }

    async update_password(username, password) {
        /**
         *  Update Password
         */
        
        password = await bcrypt.hash(password, 10);
        let sql = `
             UPDATE ${this.tablename}
             SET password = '${password}' 
             WHERE username = '${username}';
        `;

        return db.execute(sql);
    }

    async retrieve_image_path(username) {
        /**
         *  Retrieve Image Path
         */
        
        let sql = `
            SELECT img_path 
            FROM ${this.tablename}
            WHERE username = '${username}';
        `;

        return db.execute(sql);
    }

    
    async logout(session_id) {
        /**
         *  Delete Session ID from DB
         */
        
        let sql = `
            UPDATE ${this.tablename} 
            SET session_id = null 
            WHERE session_id = '${session_id}';
        `;

        return db.execute(sql);
    }

    async identify_user(session_id) {
        /**
         *  
         */
        
        let sql = `
            SELECT username 
            FROM ${this.tablename}
            WHERE session_id = '${session_id}';
        `;

        return db.execute(sql);
    }

}

module.exports = Users;
