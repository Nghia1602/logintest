const pool = require('../config/db')


const User = {
    async findByUserNameOrEmail(userNameOrEmail){
        const [row] = await pool.query(
            'SELECT * FROM users WHERE userName =? or email =?',
            [userNameOrEmail, userNameOrEmail]
        );
        return row[0];
    },
    async findByUsernameOrEmailExists(userName, email){
        const [row] = await pool.query(
            'SELECT * FROM users WHERE userName =? or email =?',
            [userName, email]
        );
        return row.length >0
    },
    async createUser(userName, email, password){
        const [row] = await pool.query(
            'INSERT INTO users (userName, email, password) VALUES (?,?,?)',
            [userName, email, password] 
        );
        return row.insertId
    }
}   
module.exports = User;