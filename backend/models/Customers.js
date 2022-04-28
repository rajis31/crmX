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

    countCustomers(username) {
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
            IFNULL(round(count(*)/datediff(Now(), Date(concat_ws("-", year(curdate()),1,1))),0),0) as avg_customers_ytd
            FROM customers
            WHERE date_created>=Date(concat_ws("-", year(curdate()),1,1))
            AND username = '${username}';
        `;

        return db.execute(sql);
    }

    delta(username, days) {
        /**
         * Return the change in customers created
         */

        let sql = `
                SELECT 
                    SUM(CASE
                        WHEN DATEDIFF(CURDATE(), date_created) = 0 THEN 1
                        ELSE 0
                    END) AS num_customers_today,
                    SUM(CASE
                        WHEN DATEDIFF(CURDATE(), date_created) = ${days} THEN 1
                        ELSE 0
                    END) AS num_customers_yesterday,
                    IFNULL(SUM(CASE
                        WHEN DATEDIFF(CURDATE(), date_created) = 0 THEN 1
                        ELSE 0
                    END) - SUM(CASE
                        WHEN DATEDIFF(CURDATE(), date_created) = ${days} THEN 1
                        ELSE 0
                    END),0) AS diff
            FROM
                ${this.tablename}
            WHERE
                username = '${username}';
        `

        return db.execute(sql);
    }

    topX(username, x) {
        /**
         * Return top X customers
         */
        let sql = `
            SELECT customer_name, profit 
            FROM ${this.tablename}
            WHERE username = '${username}'
            ORDER by profit desc
            LIMIT ${x}; 
        `;

        return db.execute(sql);
    }

    total_acquistion_cost(username) {
      /**
       *  Returns total acq. cost for customers 
       *  entered 
       */
        let sql = `
            SELECT IFNULL(sum(acquisition_cost),0) as total_acquistion_cost 
            FROM customers 
            WHERE username='${username}';
       `;

        return db.execute(sql);
    }

    total_profit(username) {
        /**
         *  Returns total projected profit for customers 
         *  entered 
         */
          let sql = `
              SELECT sum(profit) as total_profit 
              FROM customers 
              WHERE username='${username}';
         `;
  
          return db.execute(sql);
      }

    cumulative(username) {
        let sql = `
            select p.day, p.cnt, sum(p.cnt) over (order by day) as 'Cumulative Total'  from 
            ( SELECT 
                DAY(date_created) AS day, 
                COUNT(id) as cnt
            FROM
                ${this.tablename}
            WHERE
                username = '${username}'
                    AND date_created >= DATEDIFF(CURDATE(), date_created) <= 30
            GROUP BY day)
            as p ;
        `;

        return db.execute(sql);
    }
}

module.exports = Customers;
