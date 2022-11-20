const { Router } = require("express");
const {
    create,
    read,
    update,
    deleteOne
} = require("../controllers/courses");

const coursesRoutes = Router();

coursesRoutes.post("/", create);
coursesRoutes.get("/", read);
coursesRoutes.patch("/", update);
coursesRoutes.delete("/", deleteOne);

module.exports = coursesRoutes;
