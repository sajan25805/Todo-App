import "./env.js";
import * as process from "process";


const config = {
    mongodbURI: process.env.MONGODB_URI,
    port: process.env.PORT || 3007
}

export default config;
