const { Router } = require("express");
const {
    create,
    read,
    update,
    deleteOne
} = require("../controllers/monthlyPayment");

const monthlyPaymentRoutes = Router();

monthlyPaymentRoutes.post("/", create);
monthlyPaymentRoutes.get("/", read);
monthlyPaymentRoutes.patch("/", update);
monthlyPaymentRoutes.delete("/", deleteOne);

module.exports = monthlyPaymentRoutes;
