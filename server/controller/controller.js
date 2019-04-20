module.exports = {
  newDog(req, res) {
    const db = req.app.get("db");
    console.log(req.body);
    const { name, age, picture, breed, sex } = req.body;
    db.newDog([name, age, picture, breed, sex])
      .then(response => {
        res.status(200).send(response);
      })
      .catch(console.log);
  }
};
