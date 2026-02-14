const service = require("../services/auth.service");

async function signup(req, res) {
  try {
    const result = await service.signup(req.body);
    res.json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function login(req, res) {
  try {
    const result = await service.login(req.body);
    res.json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

module.exports = {
  signup,
  login
};
