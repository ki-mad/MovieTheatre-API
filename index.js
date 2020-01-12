require("express-group-routes");
//init express module
const express = require("express");
//declare express in app variable
const app = express();

const cors = require("cors");
//set port
const port = process.env.PORT || 5000;
//init bodyparser
const bodyParser = require("body-parser");

//allow this app o receive incoming json request
app.use(bodyParser.json());
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Header", "*");
  res.header("Access-Control-Allow-Method", "*");
  next();
});

//middlewares
const { authenticated } = require("./middleware");

//home route
app.get("/", (req, res) => {
  // res berarti response dan berfungsi mengirimkan "Hello Express" kepada API
  res.send("Welcome to Movie Theatre API Kimad");
});

// when this nodejs app executed, it will listen to defined port
app.listen(port, () => console.log(`Listening on port ${port}!`));

//import controllers
const auth = require("./controllers/auth");
const user = require("./controllers/user");
const movie = require("./controllers/movie");
const cinemas = require("./controllers/cinemas");
const studio = require("./controllers/studio");
const schedule = require("./controllers/schedule");
const showtime = require("./controllers/showtime");
const seat = require("./controllers/seat");
const ticket = require("./controllers/ticket");

app.group("/movie21", router => {
  //auth
  router.post("/login", auth.login);
  router.post("/register", auth.register);

  //user
  router.get("/users", user.getAllUser);
  router.get("/user/:id", user.UserById);
  router.put("/user/:id/update", user.updateUser);
  router.delete("/user/:id/delete", user.deleteUser);

  //movies
  router.get("/movies", movie.getAllMovie);
  router.get("/movie/:id", movie.getMovieById);
  router.post("/movie", movie.addMovie);
  router.put("/movie/:id/update", movie.updateMovie);
  router.delete("/movie/:id/delete", movie.deleteMovie);
  router.get("/movie/:id/studio", movie.getMovieStudioById);

  //cinemas
  router.get("/cinemas", cinemas.getAllCinemas);
  router.get("/cinema/:id", cinemas.getCinemasById);
  router.post("/cinema", cinemas.addCinemas);
  router.put("/cinema/:id/update", cinemas.updateCinemas);

  //studio
  router.get("/studios", studio.getAllStudio);
  router.get("/studio/:id", studio.getStudioById);
  router.post("/studio", studio.addStudio);
  router.put("/studio/:id/update", studio.updateStudio);
  router.delete("/studio/:id/delete", studio.deleteStudio);

  //schedule
  router.get("/schedule/:id", schedule.getScheduleByMovieId);

  //showtimes
  router.get("/showtimes", showtime.getAllShowtimes);
  router.get("/showtime/:id", showtime.getShowtimeById);
  router.get("/showtime/:id/studio", showtime.getCapacity);

  //seat
  router.get("/seats", seat.getAllSeat);

  //ticket
  router.get("/tickets", ticket.getAllTicket);
  router.get("/ticket/:id", ticket.getTicketById);
  router.post("/ticket", ticket.addTicket);
  router.put("/ticket/:id/update", ticket.updateTicket);
});
