



var mysql = require('mysql');

//connection object
var db = mysql.createConnection({//input DataBase HOST, USERNAME, PASSWORD and DATABASE NAME
    host: "HOST",
    user: "USERNAME",
    password: "PASSWORD",
    database: "DATABASE_NAME"
});


//connect
db.connect((err) => {
    if (err) {
        console.log("Error !!!")
    } else {
        console.log("DB Connected !!!");
    }

});




/////////////
// We can now use our db connection 



//Fetch data from DataBase
function fetchData() {

    //fetch query
    let fetch_sql = "SELECT * FROM table_name WHERE condition='condition' ORDER BY something ASC";

    db.query(fetch_sql, (err, result) => {

        if (err) {//if there is an error

            console.log(err);

        } else {//if the operation was successful

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

        }
    });


}





//Insert data into DataBase
function insertData() {

    //insert query
    let insert_sql = "INSERT INTO table_name (column1, column2, column3) VALUES ('val1', 'val2', 'val3')";

    db.query(insert_sql);

    //Query will be executed

}





//Update data in DataBase
function updateData() {

    //update query
    let update_sql = "UPDATE table_name SET column1 = 'val1', column2 = 'val2', column3 = column3 +2 WHERE condition='condition'";

    db.query(update_sql);

    //Query will be executed

}




//using callback for insert and update to catch error
function insertUpdateError() {

    //update query
    let update_sql = "UPDATE table_name SET column1 = 'val1', column2 = 'val2', column3 = column3 +2 WHERE condition='condition'";

    db.query(update_sql, (err, result) => {

        if (err) {//if there is an error

            console.log(err);

        }
    });

    //Query will be executed

}