require("dotenv").config();
const express = require("express");
const massive = require("massive");
const { json } = require("body-parser");
const routes = require("./routes/routes");
const cors = require("cors");
const app = express();
const port = process.env.port || 3001;
const passport = require("passport");
const session = require("express-session");

app.use(cors());
app.use(json());

massive(process.env.CONNECTION_STRING).then(db => {
	app.set("db", db);
});

app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: false
	})
);

app.use(passport.initialize());
app.use(passport.session());
// passport.use(strategy);

// What properties do we want our user to have on session?
passport.serializeUser((profile, done) => {
	const db = app.get("db");
	db.get_user_by_authid(profile.id).then(user => {
		if (!user[0]) {
			db.add_user_by_authid(profile.id, profile.displayName)
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

routes(app);
app.listen(port, () => {
	console.log(`app is listening on port ${port}`);
});
