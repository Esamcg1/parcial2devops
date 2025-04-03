import express from "express";
//import cors from "cors";
import inventoryRoutes from "./routes/inventoryRoutes";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", inventoryRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Ejecutando en:  ${PORT}`));

function cors(): any {
    throw new Error("Function not implemented.");
}
