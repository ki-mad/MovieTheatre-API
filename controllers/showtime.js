const models = require("../models");
const Showtime = models.showtime;

// get all cinemas
exports.getAllShowtimes = (req, res) => {
  Showtime.findAll({
      include: [{
          model: models.schedule,
          as: 'schedules'
      },
      {
          model:models.studio,
          as: 'studios'
      }
    ]
  })
    .then(data =>
      res.send({
        data,
        message: "Success"
      })
    )
    .catch(err => res.send(err));
};

//get cinemas by id
exports.getShowtimeById = (req, res) => {
  Showtime.findAll({
    where: { schedule_id: req.params.id },
    attributes: ['id','showDate', 'showTime','endTime', 'endDate', 'studio_id'],
    include: [{
      model: models.schedule,
      as: 'schedules',
      attributes: ['movie_id'],
    }]
  })
    .then(data =>
      res.send({
        data,
        message: "Succes"
      })
    )
    .catch(err => res.send(err));
};

exports.getCapacity = (req, res) => {
  Showtime.findOne({
    where: { id: req.params.id },
    attributes: ['schedule_id', 'studio_id'],
    include: [
      {
        model: models.studio,
        as: 'studios',
        include: [
          {
            model: models.ticket,
            as: 'tickets'
          }
        ]
      }
    ]
  })
  .then(data =>
    res.send({
      data,
      message: "Succes"
    })
  )
  .catch(err => res.send(err));
}

// post new Showtimes
exports.addShowtimes = (req, res) => {
  Showtime.create(req.body).then(data => {
    res.send({
      message: "Success",
      data
    });
  });
};

//update Schedule by id
exports.updateShowtime = (req, res) => {
  Showtime.update(req.body, { where: { id: req.params.id } })
    .then(data =>
      res.send({
        data,
        message: "Showtime Updated"
      })
    )
    .catch(err => {
      res.send(err);
    });
};

//delete Schedule by id
exports.deleteShowtime = (req, res) => {
  Showtime.destroy({ where: { id: req.params.id } }).then(data => {
    res
      .send({
        data,
        message: "Showtime Deleted"
      })
      .catch(err => {
        res.send(err);
      });
  });
};