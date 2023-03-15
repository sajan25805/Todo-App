import { Router } from "express";
import * as todoController from "../controllers/todoController.js";

const router= Router();


router.get("/all",todoController.get);
router.post("/post",todoController.add);
router.put("/update/:id",todoController.update);
router.delete("/delete/:id", todoController.remove);
router.get("/:id", todoController.toogleRef);



export default router;

