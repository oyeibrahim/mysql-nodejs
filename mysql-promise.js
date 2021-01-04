

const mysql = require('mysql');

//for promisifying
const util = require('util');

//connection object
var conn = mysql.createConnection({//input DataBase HOST, USERNAME, PASSWORD and DATABASE NAME
    host: "HOST",
    user: "USERNAME",
    password: "PASSWORD",
    database: "DATABASE_NAME"
});

//promisify the connection object
var db = util.promisify(conn.query).bind(conn);



/////////////
// We can now use our db connection 



//Fetch data from DataBase
function fetchData() {

    //we can use in async function so we can await the result
    (async function () {
        //fetch query
        let fetch_sql = "SELECT * FROM table_name WHERE condition='condition' ORDER BY something ASC";

        let result = await db(fetch_sql);

        let tempResult = JSON.stringify(result);
        let jsonResult = JSON.parse(tempResult);

        //jsonResult now contains a JSON array of the result
        //NOTE: it will be an array even if the result is one row. The array will look like:

        jsonResult = [
            {
                id: 1,
                firstname: "Ibrahim",
                lastname: "Oyetunji"
            }
        ]

    })();

}





//Insert data into DataBase
function insertData() {

    //we can use in async function so we can await the result
    (async function () {
        //insert query
        let insert_sql = "INSERT INTO table_name (column1, column2, column3) VALUES ('val1', 'val2', 'val3')";

        await db(insert_sql);

        //Query will be executed

    })();

}





//Update data in DataBase
function updateData() {

    //we can use in async function so we can await the result
    (async function () {
        //update query
        let update_sql = "UPDATE table_name SET column1 = 'val1', column2 = 'val2', column3 = column3 +2 WHERE condition='condition'";

        await db(update_sql);

        //Query will be executed

    })();

}




//To catch error use .catch()
function catchError() {

    //we can use in async function so we can await the result
    (async function () {
        //query
        let fetch_sql = "SELECT * FROM table_name WHERE condition='condition' ORDER BY something ASC";

        //catch error
        let result = await db(fetch_sql).catch(function (e) {
            console.log(e)
        });

        let tempResult = JSON.stringify(result);
        let jsonResult = JSON.parse(tempResult);

        //jsonResult now contains a JSON array of the result
        //NOTE: it will be an array even if the result is one row. The array will look like:

        jsonResult = [
            {
                id: 1,
                firstname: "Ibrahim",
                lastname: "Oyetunji"
            }
        ]

    })();

}