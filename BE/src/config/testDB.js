const pool = require("./db");

async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log("Kết nối DB thành công");
    connection.release();
  } catch (err) {
    console.error("Kết nối MySQL thất bại:", err.message)
  }
}
module.exports = testConnection;