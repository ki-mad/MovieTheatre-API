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

// post new Seat
exports.addSeat = (req, res) => {
  Seat.create(req.body).then(data => {
    res.send({
      message: "Success",
      data
    });
  });
};

//update Seat by id
exports.updateSeat = (req, res) => {
  Seat.update(req.body, { where: { id: req.params.id } })
    .then(data =>
      res.send({
        data,
        message: "Seat Updated"
      })
    )
    .catch(err => {
      res.send(err);
    });
};

//delete Seat by id
exports.deleteSeat = (req, res) => {
  Seat.destroy({ where: { id: req.params.id } }).then(data => {
    res
      .send({
        data,
        message: "Seat Deleted"
      })
      .catch(err => {
        res.send(err);
      });
  });
};