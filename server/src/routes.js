import { Router } from "express";
import todoRouter from "./routes/todo.js";

const router= Router();


/**
 * Routes
 */

router.use("/todo",todoRouter)
router.get("/",(req,res)=>{
    return res.send(
        ` \n ============================ \n HFM API \n ============================ `
    );
});


export const apiRoutes = router;
