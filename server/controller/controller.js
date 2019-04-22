module.exports = {
  newDog(req, res) {
    const db = req.app.get("db");
    const { name, age, picture, breed, sex, owner_id } = req.body;
    db.newDog([name, age, picture, breed, sex, owner_id])
      .then(response => {
        res.status(200).send(response);
      })
      .catch(console.log);
  },
  getDogs(req, res) {
    const db = req.app.get("db");
    console.log(req.body);
    db.getDogs(db.owners.owner_id)
      .then(response => res.status(200).json(response))
      .catch(console.log);
  }
};
