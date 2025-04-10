import express from "express";
import cors from "cors";
import salesRoutes from "./routes/SalesRoutes";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", salesRoutes);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Ventas corriendo en puerto ${PORT}`));