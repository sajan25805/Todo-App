import app from "./app.js";
import config from "./config.js";

import "./db.js"

app.listen(config.port,()=>{
    console.log(`Server listening on Port:${config.port}`);
});


