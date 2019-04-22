const { newDog, getDogs } = require("../controller/controller");

module.exports = app => {
  app.post("/api/newDog", newDog);
  app.get("/api/yourdogs", getDogs);
};
