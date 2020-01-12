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

// post new Schedule
exports.addSchedule = (req, res) => {
  Schedule.create(req.body).then(data => {
    res.send({
      message: "Success",
      data
    });
  });
};

//update Schedule by id
exports.updateSchedule = (req, res) => {
  Schedule.update(req.body, { where: { id: req.params.id } })
    .then(data =>
      res.send({
        data,
        message: "Schedule Updated"
      })
    )
    .catch(err => {
      res.send(err);
    });
};

//delete Schedule by id
exports.deleteSchedule = (req, res) => {
  Schedule.destroy({ where: { id: req.params.id } }).then(data => {
    res
      .send({
        data,
        message: "Schedule Deleted"
      })
      .catch(err => {
        res.send(err);
      });
  });
};