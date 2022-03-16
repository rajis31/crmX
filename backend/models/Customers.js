const db = require("../config/db");

class Customers {

    constructor() {
        this.tablename = "customers";
    }

    create_table() {
        let sql = `
            create table if not exists ${this.tablename} (
                id int primary key auto_increment, 
                username varchar(255),
                customer_name varchar(255),
                date_of_birth date,
                email text,
                profit decimal(15,2),
                acquisition_cost decimal(15,2), 
                date_created date
            );
        `;

        return db.execute(sql);
    }


    insert_data(username, customer_name, dob, email, profit, acquisition_cost, date_created) {
        /**
         * Insert a new row into table
         */

        let sql = `
            INSERT INTO ${this.tablename}(
                        username, 
                        customer_name, 
                        date_of_birth, 
                        email, 
                        profit, 
                        acquisition_cost, 
                        date_created) 
            VALUES 
                    ('${username}',
                    '${customer_name}',
                    '${dob}', 
                    '${email}', 
                    ${profit}, 
                    ${acquisition_cost}, 
                    '${date_created}');
        `;

        return db.execute(sql);
    }

    findAll(username) {

        let sql = `
                select customer_name,
                       DATE_FORMAT(date_of_birth, '%m/%d/%Y') as date_of_birth, 
                       email,
                       profit,
                       acquisition_cost,
                       DATE_FORMAT(date_created, '%m/%d/%Y') as date_created  
                from ${this.tablename} 
                where username = '${username}';
            `;

        return db.execute(sql);
    }

    countCustomrs(username) {
        /**
         * Find the number of customers a user has created
         */
        let sql = `SELECT COUNT(*) as num_customers
                   FROM ${this.tablename} 
                   WHERE username = '${username}';`;

        return db.execute(sql);
    }

    avgCustomersYTD(username) {
        /**
         * Find the Avg # of customers created YTD
         */

        let sql = `
            SELECT
            IFNULL(AVG(datediff(curdate(), date_created)),0) as days_between 
            FROM customers
            WHERE datediff(curdate(), date_created)  <= 365
            AND username = "${username}";
        `;

        return db.execute(sql);
    }
}

module.exports = Customers;
