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

  const defaultIcon =
    "data:image/png;base64,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";

  bcrypt.hash(passwordToHash, 10, function (err, hash) {
    const password = hash;
    const newUser = new User({
      username: username,
      password: password,
      image: defaultIcon,
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
