import axios from "axios";

const api = axios.create({
 baseURL: "https://travel-backend-h89h.onrender.com"
});

export default api;