const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const authConfig = require('../../config/auth');
const { Users } = require('../models');

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: 'User not authorized',
    });
  }

  const [, token] = authHeader.split(' ');

  if (!token) {
    return res.status(401).json({
      message: 'User not authorized',
    });
  }

  try {
    const owner = await Users.findOne({ where: { TOKEN: token } });

    if (!owner) {
      return res.status(401).json({ message: 'User not authorized' });
    }

    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    req.user = decoded.ID_USUARIO;

    return next();
  } catch (err) {
    return res.status(401).json({
      message: 'Expired session',
    });
  }
};
