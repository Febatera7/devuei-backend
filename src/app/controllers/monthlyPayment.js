const logger = require("../utils/logger");

const create = async (req, res) => {
    try {
        res.status(201).send({ message: "ok" });
    } catch(error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};
const read = async (req, res) => {
    try {
        res.status(200).send({ message: "ok" });
    } catch(error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};
const update = async (req, res) => {
    try {
        res.status(200).send({ message: "ok" });
    } catch(error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};
const deleteOne = async (req, res) => {
    try {
        res.status(200).send({ message: "ok" });
    } catch(error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};

module.exports = {
    create,
    read,
    update,
    deleteOne
}
