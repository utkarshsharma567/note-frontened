import axios from "axios";

const BACKEND_URL = axios.create({
  baseURL: "https://note-backhand-1.onrender.com"
});

export default BACKEND_URL;

