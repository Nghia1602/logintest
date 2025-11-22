const jwt = require("jsonwebtoken");
require("dotenv").config();

function createToken(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
}
function createRefreshToken(payload){
  return jwt.sign (payload, process.env.JWT_REFRESH_SECRET,{
    expiresIn: process.env.JWT_REFRESH_EXPIRES_IN,
  });
}

function verifyToken(token) {
  return jwt.verify(token, process.env.JWT_SECRET);
}
 module.exports= {createToken, verifyToken, createRefreshToken};