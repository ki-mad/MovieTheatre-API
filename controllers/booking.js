const models = require("../models");
const Booking = models.booking;

// get all booking
exports.getAllBooking = (req, res) => {
  Booking.findAll()
    .then(data =>
      res.send({
        message: "Success",
        data
      })
    )
    .catch(err => res.send(err));
};

// booking by id
exports.getBookingById = (req, res) => {
  Booking.findOne({
    where: { id: req.params.id }
  })
    .then(data =>
      res.send({
        message: "Success",
        data
      })
    )
    .catch(err => res.send(err));
};

//post booking
exports.create = (req, res) => {
  Booking.create(req.body)
    .then(data => {
      res.send({ data });
    })
    .catch(err => res.send(err));
};

exports.updateStatusConfirm = (req, res) => {
  Booking.update(
    { status: "confirmed" },
    { where: { id: req.params.id } }
  ).then(data => {
    res.send({
      message: "Update Success",
      data
    });
  });
};

exports.updateStatusApproved = (req, res) => {
  Booking.update({ status: "approved" }, { where: { id: req.params.id } }).then(
    data => {
      res.send({
        message: "Update Success",
        data
      });
    }
  );
};
