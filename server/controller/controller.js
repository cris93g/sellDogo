module.exports = {
	//makes new dog in db
	newDog(req, res) {
		const db = req.app.get("db");
		const { name, age, picture, breed, sex, owner_id } = req.body;
		db.newDog([name, age, picture, breed, sex, owner_id])
			.then(response => {
				res.status(200).send(response);
			})
			.catch(console.log);
	},
	//get dogs depending on which user is signed in
	getDogs(req, res) {
		const { owner_id } = req.body;
		const db = req.app.get("db");
		db.getDogs([owner_id])
			.then(response => res.status(200).json(response))
			.catch(console.log);
	},
	//get all dogs
	getAllDogs(req, res) {
		const db = req.app.get("db");
		db.getAllDogs()
			.then(response => res.status(200).json(response))
			.catch(console.log);
	}
};
