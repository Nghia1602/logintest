const {createToken} = require("../utils/token");
const User = require("../models/users.model");
const { verify } = require("jsonwebtoken");
const AuthController = {
    async login(req, res){
        try {
            const {username,password}= req.body;
        if (!username || !password){
            return res.status(400).json({message:"Thiếu thông tin đăng nhập"});
        }
        const findUser = await User.findByUserNameOrEmail(username);
        if (!findUser){
            return res.status(401).json({message:"Tên đăng nhập hoặc mật khẩu không đúng"})
        }
        if (findUser.password !== password){
            return res.status(401).json({message:"Tên đăng nhập hoặc mật khẩu không đúng"})
        }
        const token = createToken({id:findUser.id, username:findUser.username,email: findUser.email});
        return res.status(200).json({message:"Đăng nhập thành công", token})
        } catch (error) {
            console.error("Lỗi đăng nhập:", error);
            return  res.status(500).json({message:"Lỗi Server"})
        }
        
        
    },
    async register(req, res){
        try {
           const {username,email,password} = req.body;
           if (!username || !email || !password) {
            return res.status(400). json({message:"Thiếu thông tin đăng ký"})
           }
           const userExist = await User.findByUsernameOrEmailExists(username, email);
           if (userExist){
            return res.status(400).json({message:" Tài khoản đã tồn tại"})
           }
           await User.createUser(username, email, password);
              return res.status(201).json({message:"Đăng ký thành công"})
        } catch (error) {
            console.error("Lỗi đăng ký:", error);
            return res.status(500).json({message:"Lỗi Server"})
        }
    }, 
    async profile (req, res){
        return res.status (200).json({message:"Thông tin người dùng", user:req.user})
    },
    // async refreshToken(req, res){
    //     try {
    //         const {refreshToken}= req.body;
    //         if (!refreshToken) {
    //             return res.status(400).json({message:"thiếu refresh token"})
    //         }
    //         const decoded =verify(refreshToken);
            
    //     } catch (error) {
            
    //     }
    // }
}
module.exports = AuthController;