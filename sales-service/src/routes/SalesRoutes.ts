import { Router } from "express";
import { SalesController } from "../controllers/SalesController";

const router = Router();
router.post("/sales", SalesController.createSale);

export default router;