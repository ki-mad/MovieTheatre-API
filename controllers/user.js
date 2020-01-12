// const jwt = require('jsonwebtoken')
const models = require("../models");
const User = models.user;
const Event = models.event;
const Favorite = models.favorite;

//get all data user
exports.getAllUser = (req, res) => {
  User.findAll()
    .then(data => res.send({
      data,
      message: "Success"
    }))
    .catch(err => res.send(err));
};

// get user byId
exports.UserById = (req, res) => {
  User.findOne({
    where: { id: req.params.id },
  })
    .then(data => res.send(data))
    .catch(err => res.send(err));
};

//update user by id
exports.updateUser = (req, res) => {
  User.update(req.body, { where: { id: req.params.id } })
    .then(data => res.send({
      data,
      message: "User Updated",
    }))
    .catch(err => {
      res.send(err);
    });
};

//delete user by id
exports.deleteUser = (req, res) => {
  User.destroy({ where: { id: req.params.id } }).then(data => {
    res.send({
      message: "User Deleted",
      data
    })
    .catch(err => {
      res.send(err);
    });
  });
};
