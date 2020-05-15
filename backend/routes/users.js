const router = require("express").Router();
let User = require("../models/user.model");
const bcrypt = require("bcrypt");

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.login;
  const passwordToHash = req.body.password;

  bcrypt.hash(passwordToHash, 10, function (err, hash) {
    const password = hash;
    const newUser = new User({
      username,
      password,
    });

    newUser
      .save()
      .then(() => res.json("User added!"))
      .catch((err) => res.status(400).json("Error: " + err));
  });
});

router.route("/authenticate").post((req, res) => {
  const usernameToFind = req.body.login;
  const passwordToHash = req.body.password;

  const query = { username: usernameToFind };
  const userToAuthenticate = {};

  User.findOne(query)
    .then((userToAuthenticate) => {
      bcrypt.compare(passwordToHash, userToAuthenticate.password, function (
        err,
        result
      ) {
        if (result) {
          return res.json("Authentication Successful");
        } else {
          return res.status(401).json("Error: " + err);
        }
      });
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

/*
router.route("/delete").post((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update").post((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});
*/
module.exports = router;
