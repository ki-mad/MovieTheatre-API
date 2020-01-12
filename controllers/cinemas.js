const models = require("../models");
const Cinemas = models.cinemas;

// get all cinemas
exports.getAllCinemas = (req, res) => {
  Cinemas.findAll()
    .then(data =>
      res.send({
        data,
        message: "Success"
      })
    )
    .catch(err => res.send(err));
};

//get cinemas by id
exports.getCinemasById = (req, res) => {
  Cinemas.findOne({
    where: { id: req.params.id }
  })
    .then(data =>
      res.send({
        data,
        message: "Succes"
      })
    )
    .catch(err => res.send(err));
};

// post new cinemas
exports.addCinemas = (req, res) => {
  Cinemas.create(req.body).then(data => {
    res.send({
      message: "Success",
      data
    });
  });
};

//update cinemas by id
exports.updateCinemas = (req, res) => {
  Cinemas.update(req.body, { where: { id: req.params.id } })
    .then(data =>
      res.send({
        data,
        message: "cinemas Updated"
      })
    )
    .catch(err => {
      res.send(err);
    });
};

//delete cinemas by id
exports.deleteCinemas = (req, res) => {
  Cinemas.destroy({ where: { id: req.params.id } }).then(data => {
    res
      .send({
        data,
        message: "cinemas Deleted"
      })
      .catch(err => {
        res.send(err);
      });
  });
};
