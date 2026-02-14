const repo = require("../repositories/user.repository");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const SECRET = "mysecretkey";

async function signup(data) {
  const existingUser = await repo.findUserByEmail(data.email);
  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);

  const user = await repo.createUser({
    name: data.name,
    email: data.email,
    password: hashedPassword
  });

  return user;
}

async function login(data) {
  const user = await repo.findUserByEmail(data.email);
  if (!user) throw new Error("User not found");

  const isMatch = await bcrypt.compare(data.password, user.password);
  if (!isMatch) throw new Error("Invalid password");

  const token = jwt.sign(
    { email: user.email, id: user._id },
    SECRET,
    { expiresIn: "1d" }
  );

  return { token };
}

module.exports = {
  signup,
  login
};
