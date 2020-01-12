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