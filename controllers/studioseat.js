const models = require("../models");
const StudioSeat = models.StudioSeat;

// get all Studioseat
exports.getAllStudioSeat = (req, res) => {
  StudioSeat.findAll()
    .then(data =>
      res.send({
        message: "Success",
        data
      })
    )
    .catch(err => res.send(err));
};

//post studioseat
exports.create = (req, res) => {
  StudioSeat.create(req.body)
    .then(data => {
      res.send({ data });
    })
    .catch(err => res.send(err));
};

//update cinemas by id
exports.updateStudioseat = (req, res) => {
  StudioSeat.update(req.body, { where: { id: req.params.id } })
    .then(data =>
      res.send({
        data,
        message: "Studioseat Updated"
      })
    )
    .catch(err => {
      res.send(err);
    });
};

exports.destroy = (req, res) => {
  StudioSeat.destroy({
    where: {
      id: req.params.id
    }
  }).then(studioseat => {
    res.send({
      message: "destroy success"
    });
  });
};
