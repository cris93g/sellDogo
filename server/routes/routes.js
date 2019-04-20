const { newDog } = require("../controller/controller");

module.exports = app => {
  app.post("/api/newDog", newDog);
};
