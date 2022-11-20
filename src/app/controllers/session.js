const logger = require("../utils/logger");

const session = async (req, res) => {
    try {
        res.status(201).send({ message: "ok" });
    } catch(error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};

module.exports = session
