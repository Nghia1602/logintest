const { verifyToken } = require("../utils/token");

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token =
    authHeader && authHeader.startsWith("Bearer")
      ? authHeader.split(" ")[1]
      : null;
  if (!token) {
    return res.status(401).json({ message: "Thiếu token" });
  }
  try {
    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({message:"Lỗi token hoặc token hết hạn"})
  }
}

module.exports = authenticateToken;