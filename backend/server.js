var app = new (require("express"))();

var pg = require("pg");

var conString =
  "postgres://wqveieli:mvEacuIGcuuUi43j2WBBrKEM0m_Dd2-a@balarama.db.elephantsql.com:5432/wqveieli"; //Can be found in the Details page
var client = new pg.Client(conString);

client.connect(function (err) {
  if (err) {
    return console.error("could not connect to postgres", err);
  }
  const query = {
    text: "INSERT INTO users(login, password, status) VALUES($1, $2, $3)",
    values: ["test3", "haslo", "offline"],
  };

  client.query(query, (err, res) => {
    if (err) {
      return console.error("error running query", err);
    } else {
      console.log(res.rows[0]);
    }
    // console.log(result.rows[0].result);
    // >> output: 2018-08-23T14:02:57.117Z
    client.end();
  });
});
