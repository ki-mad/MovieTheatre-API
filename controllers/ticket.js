const models = require("../models");
const ticket = models.ticket;

// get all ticket
exports.getAllTicket = (req, res) => {
  ticket.findAll()
    .then(data =>
      res.send({
        data,
        message: "Success"
      })
    )
    .catch(err => res.send(err));
};

//get ticket by id
exports.getTicketById = (req, res) => {
  ticket.findOne({
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

// post new ticket
exports.addTicket = (req, res) => {
  ticket.create(req.body).then(data => {
    res.send({
      message: "Success",
      data
    });
  });
};

//update ticket by id
exports.updateTicket = (req, res) => {
  ticket.update(req.body, { where: { id: req.params.id } })
    .then(data =>
      res.send({
        data,
        message: "ticket Updated"
      })
    )
    .catch(err => {
      res.send(err);
    });
};

//delete ticket by id
exports.deleteTicket = (req, res) => {
  ticket.destroy({ where: { id: req.params.id } }).then(data => {
    res
      .send({
        data,
        message: "ticket Deleted"
      })
      .catch(err => {
        res.send(err);
      });
  });
};
