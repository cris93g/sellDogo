//brings functions from controller file
const { newDog, getDogs, getAllDogs } = require("../controller/controller");

//state each route
module.exports = app => {
	app.post("/api/newDog", newDog);
	// app.get("/api/yourdogs", getDogs);
	app.post("/api/yourdogs", getDogs);
	app.get("/api/dogs", getAllDogs);
};
