const db = require("../config/db");

class Notes{

    constructor(){
        this.tablename    = "notes";
    }

    create_table(){
        let sql = `
            create table if not exists ${this.tablename} (
                id int primary key auto_increment, 
                username varchar(255),
                title varchar(255),
                body text, 
                date_created date
            );
        `;

        return db.execute(sql);
    }
    

    insert_data(username, title, body, date_created){
        /**
         * Insert a new row into table
         */

         this.username     = username;
         this.title        = title; 
         this.body         = body; 
         this.date_created = date_created;

        let sql = `
            INSERT INTO ${this.tablename}(username, title, body, date_created) VALUES 
            ('${this.username}','${this.title}','${this.body}', '${this.date_created}');
        `;

        return db.execute(sql);
    }

    findAll(username){
        /**
         * Retrieve all rows
         */

        let sql =  `
            SELECT 
               id,
               title,
               body, 
               DATE_FORMAT(date_created, '%m/%d/%Y') as date_created 
            FROM ${this.tablename} 
            WHERE username = '${username}'; 
        `
        return db.execute(sql);
    }

    findById(id){
        /**
         * Retrieve certain row
         */

        let sql =  `
            SELECT * FROM ${this.tablename} where username = '${this.username}' and id=${id}; 
        `
        return db.execute(sql);
    }

    delete(id){
        /**
         * Delete a row
         */
        
        let sql =  `DELETE FROM ${this.tablename} where id=${id}; `;
        return db.execute(sql);
    }
}

module.exports = Notes;
