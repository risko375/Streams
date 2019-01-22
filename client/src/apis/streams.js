import axios from "axios";

// create an instance of axios

export default axios.create({
  baseURL: "http://localhost:3001"
});
