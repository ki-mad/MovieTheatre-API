const models = require("../models");
const Seat = models.seat;

// get all seat
exports.getAllSeat = (req, res) => {
  Seat.findAll({
      attributes: ['id', 'name']
  })
    .then(data =>
      res.send({
        message: "Success",
        data
      })
    )
    .catch(err => res.send(err));
};