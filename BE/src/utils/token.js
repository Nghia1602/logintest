const jwt = require('josnwebtoken');
require('dotenv').config();

function createToken(payload,){
return jwt.sign(payload,process.env.JWT_SECRET,{
    expiresIn: process.env.JWT_EXPIRES_IN,
})
}