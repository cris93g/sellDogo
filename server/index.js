require("dotenv").config();
const express = require("express");
const massive = require("massive");
const { json } = require("body-parser");
const routes = require("./routes/routes");
const cors = require("cors");
const app = express();
const port = process.env.port || 3001;

app.use(cors());
app.use(json());

massive(process.env.CONNECTION_STRING).then(db => {
  app.set("db", db);
});

routes(app);
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
