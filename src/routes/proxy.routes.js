import { Router } from "express";
import { proxyRequest } from "../controllers/proxy.controller.js";

const router = Router();

// Routes
router.use('/', proxyRequest);


export default router;
