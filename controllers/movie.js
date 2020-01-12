const models = require("../models");
const Movie = models.movie;
const Cinemas = models.cinemas;
const Schedule = models.schedule;
const Studio = models.studio;

// get all movie
exports.getAllMovie = (req, res) => {
  Movie.findAll()
    .then(data =>
      res.send({
        data,
        message: "Success"
      })
    )
    .catch(err => res.send(err));
};

//get Movie include studio
exports.getMovieStudioById = (req, res) => {
  Movie.findOne({
    include: [{
      model: models.studio,
      as: 'studios',
      required: false,
      attributes: ['id', 'name'],
      through: { attributes: ['price', 'date', 'time'] },
      include: [{
        model: Cinemas,
        as: 'cinemasId',
        attributes: ['id','name']
      }]
    }],
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

//get Movie and all cinemas
exports.getMovieById = (req, res) => {
  Movie.findOne({
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

// post new Movie
exports.addMovie = (req, res) => {
  Movie.create(req.body).then(data => {
    res.send({
      message: "Success",
      data
    });
  });
};

//update movie by id
exports.updateMovie = (req, res) => {
  Movie.update(req.body, { where: { id: req.params.id } })
    .then(data =>
      res.send({
        data,
        message: "Movie Updated"
      })
    )
    .catch(err => {
      res.send(err);
    });
};


//delete Movie by id
exports.deleteMovie = (req, res) => {
  Movie.destroy({ where: { id: req.params.id } })
    .then(data =>
      res.send({
        data,
        message: "Movie Deleted"
      })
    )
    .catch(err => {
      res.send(err);
    });
};
