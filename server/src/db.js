import mongoose from "mongoose";
import config from "./config.js";


mongoose.connect(config.mongodbURI,{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
.then(()=>{
    console.log("DB Connected !");
})
.catch((error)=>{
    console.log(`DB connection Error: ${error.message}`)
});