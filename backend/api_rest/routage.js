var mysql = require('mysql');
const app = express();
var router = express.Router()

var con = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword",
    database: ""


})


router.get('/about', function(req, res) {

    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM customers", function(err, result, fields) {
            if (err) throw err;
            console.log(result);
        });
    });

    res.json(result)
})


module.exports = app;