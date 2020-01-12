const models = require("../models");
const Studio = models.studio;

// get all Studio
exports.getAllStudio = (req, res) => {
  Studio.findAll()
    .then(data =>
      res.send({
        data,
        message: "Success"
      })
    )
    .catch(err => res.send(err));
};

//get Studio by id
exports.getStudioById = (req, res) => {
  Studio.findOne({
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

//get Studio by movie id
exports.getStudioByMovieId = (req, res) => {
  Studio.findAll({
    include: [{
      model: models.movie,
      as: 'movies',
      required: false,
      attributes: [],
      where: { id: req.params.id },
      through: { attributes: ['id'] }
    }],
  })
    .then(data =>
      res.send({
        data,
        message: "Succes"
      })
    )
    .catch(err => res.send(err));
};

// post new Studio
exports.addStudio = (req, res) => {
  Studio.create(req.body).then(data => {
    res.send({
      message: "Success",
      data
    });
  });
};

//update Studio by id
exports.updateStudio = (req, res) => {
  Studio.update(req.body, { where: { id: req.params.id } })
    .then(data =>
      res.send({
        data,
        message: "Studio Updated"
      })
    )
    .catch(err => {
      res.send(err);
    });
};

//delete Studio by id
exports.deleteStudio = (req, res) => {
  Studio.destroy({ where: { id: req.params.id } })
    .then(data =>
      res.send({
        data,
        message: "Studio Deleted"
      })
    )
    .catch(err => {
      res.send(err);
    });
};
