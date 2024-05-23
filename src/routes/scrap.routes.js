import { Router } from "express";
import { getImages } from "../controllers/scrap.controller.js";

const router = Router();

// Routes
router.get("/", getImages);
// router.put("/:id", updateTask);
// router.delete("/:id", deleteTask);
// router.get("/", getTasks);
// router.get("/:id", getTask);

export default router;
