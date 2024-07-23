import app from "./app.js";
import cloudinary from "cloudinary";
// import dotenv from 'dotenv';

// require("dotenv").config();
const PORT = 4000;
cloudinary.v2.config({
  cloud_name: "dqxtn43ks",
  api_key: "RRmHfBkx4lbYVkn8LHNQ8",
  api_secret: "263444528913261",
});

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
