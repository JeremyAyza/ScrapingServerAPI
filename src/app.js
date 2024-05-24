import express from "express";
import morgan from "morgan";
import cors from "cors";
const app = express();

// Import routes
import scrapRoutes from "./routes/scrap.routes.js";
import proxyRoutes from "./routes/proxy.routes.js";




// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// Routes
app.use("/scrap", scrapRoutes);

app.use('/proxy', proxyRoutes);



export default app;
