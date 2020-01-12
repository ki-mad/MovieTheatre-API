const jwt = require("jsonwebtoken");
const models = require("../models");
const User = models.user;
const hash = require("password-hash");

//register
exports.register = (req, res) => {
  User.findOne({ where: { email: req.body.email } }).then(user => {
    if (user) {
      res
        .send({
          err: true,
          message: "email has been registered"
        })
        .catch(err => res.send(err));
    } else {
      User.create({
        name: req.body.name,
        address: req.body.address,
        email: req.body.email,
        password: hash.generate(req.body.password),
        phone: req.body.phone,
        role: req.body.role,
        balance: req.body.balance,
        createdAt: Date.now(),
        updatedAt: Date.now()
      })
      .then(register => res.json(register))
      .catch(err => res.send(err));
    }
  })
  // .catch(err => res.send(err));
};

//login
exports.login = (req, res) => {
  const email = req.body.email;
  // const password = req.body.password

  User.findOne({ where: { email } })
    .then(user => {
      if (user) {
        const password = user.password;
        const verify = hash.verify(req.body.password, password);
        if (verify === true) {
          const token = jwt.sign(
            {
              userId: user.id
            },
            "my-secret-key"
          );
          const message = "success";
          res
            .send({
              user,
              token,
              message
            })
        } else {
          res.send({
            error: true,
            message: "Wrong Username or Password"
          });
        }
      } else {
        res.send({
          error: true,
          message: "your email not registered"
        });
      }
    })
    // .catch(err => res.send(err));
};
