require('dotenv').config()
var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    var connection = mysql.createConnection({
        port: 3306,
        host: "y5s2h87f6ur56vae.cbetxkdyhwsb.us-east-1.rds.amazonaws.com"	,
        user: "ywoo1b5xo5xzzxat",
        password: "ob5peqwm9nochcz9",
        database: "ryvxc2l7z82eaigc"
    });
}



connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;
