const models = require("../models");
const Schedule = models.schedule;

// get all schedule
exports.getAllSchedule = (req, res) => {
  Schedule.findAll()
    .then(data =>
      res.send({
        message: "Success",
        data
      })
    )
    .catch(err => res.send(err));
};

//get schedule by movie id
exports.getScheduleByMovieId = (req, res) => {
  Schedule.findOne({
    include: [
      {
        model: models.studio,
        as: "studios",
        required: false,
        attributes: ["id", "name"],
        through: { attributes: ["showDate", "time", "schedule_id"] }
      },
      {
        model: models.movie,
        as: "movies"
      }
    ],
    where: { movie_id: req.params.id }
  })
    .then(data =>
      res.send({
        data,
        message: "Succes"
      })
    )
    .catch(err => res.send(err));
};