require('dotenv').config()
const app = require("./app")
const testConnection = require('./config/testDB')

testConnection();
const PORT=process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Đang listen port ${PORT}`);
})