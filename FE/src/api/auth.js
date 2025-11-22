
import axios from "axios";
//  require('dotenv').config();
const API_URL = import.meta.env.API_URL || 'http://localhost:3000/api/auth';
export const Authlogin = async (username, password) => {
    return await axios.post(`${API_URL}/login`, { username, password });
}