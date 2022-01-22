const exp = require("express");
const DB = require("./modules/db");
const app = exp();
var cors = require("cors");
app.use(cors());

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});

// get request with route '/customer' - get as a query string
app.get("/customer", cors(), (req, res) => {
  console.log("query", req.query);
  DB.getCustomers(req.query.cid)
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      console.log(e);
    });
});

// static pages
app.use("/", exp.static(__dirname + "/public"));
