import express from "express";
import morgan from "morgan";

const app = express();

// Import routes
import scrapRoutes from "./routes/scrap.routes.js";


// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/scrap", scrapRoutes);


export default app;
