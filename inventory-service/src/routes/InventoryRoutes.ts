import { Router } from "express";
import { InventoryController } from "../controllers/InventoryController";
import { InventoryService } from "../services/services";

const router = Router();
router.get("/products/:id", InventoryService.getProduct);

export default router;