import axios from "axios";

axios.defaults.baseURL = "https://social-api1-ba63b7ae14c7.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;