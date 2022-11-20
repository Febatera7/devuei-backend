const { Router } = require("express");
const {
    create,
    read,
    update,
    deleteOne
} = require("../controllers/users");

const usersRoutes = Router();

usersRoutes.post("/", create);
usersRoutes.get("/", read);
usersRoutes.patch("/", update);
usersRoutes.delete("/", deleteOne);

module.exports = usersRoutes;
