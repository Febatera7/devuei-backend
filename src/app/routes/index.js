const { Router } = require("express");
// const authMiddleware = require("../middlewares/auth");
const coursesRoutes = require("./courses");
const monthlyPayment = require("./monthlyPayment");
const sessionRoute = require("./session");
const usersRoutes = require("./users");

const routes = Router();

routes.use("/courses", coursesRoutes);
routes.use("/payment", monthlyPayment);
routes.use("/session", sessionRoute);
routes.use("/users", usersRoutes);
routes.get("/test", (req, res) => res.send({ message: "Hello World!" }));

module.exports = routes;
