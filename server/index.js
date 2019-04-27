//importing librarys
require("dotenv").config();
const express = require("express");
const massive = require("massive");
const { json } = require("body-parser");
const routes = require("./routes/routes");
const cors = require("cors");
const app = express();
const passport = require("passport");
const session = require("express-session");
// brings  functions needed for auth to get data
const { getUser, strat, logout } = require(`${__dirname}/controller/authCtrl`);

//brings cors so our api wont get hit by anyone else
app.use(cors());
//brings json from body-parser to parse data in json format
app.use(json());
//create port for server
const port = process.env.port || 3001;

//brings massive so we can query our database
massive(process.env.CONNECTION_STRING).then(db => {
	app.set("db", db);
});

//brings sessions
app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: false
	})
);

//functions for passport
app.use(passport.initialize());
app.use(passport.session());
passport.use(strat);

// What properties do we want our user to have on session?
passport.serializeUser((profile, done) => {
	const db = app.get("db");
	db.getUserByAuthid(profile.id).then(user => {
		console.log(profile.name);
		if (!user[0]) {
			db.addUserByAuthid(
				profile.name.givenName,
				profile.name.familyName,
				profile.id,
				profile.picture,
				profile.displayName
			)
				.then(response => {
					return done(null, response[0]);
				})
				.catch(err => console.log(err));
		} else {
			return done(null, user[0]);
		}
	});
});

// Put user on req.session
passport.deserializeUser((user, done) => {
	done(null, user);
});
app.get(
	"/login",
	passport.authenticate("auth0", {
		successRedirect: "http://localhost:3000/",
		failureRedirect: "http://localhost:3000/#/"
	})
);
app.get("/me", getUser);
app.get("/logout", logout);

//wraps our app with our routes folder
routes(app);

//function to listen to our server
app.listen(port, () => {
	console.log(`app is listening on port ${port}`);
});
