import { Request, Response } from "express";
import { InventoryService } from "../services/services";

export class InventoryController {
  static getProduct(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const product = InventoryService.getProduct(id);

    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    return res.json(product);
  }
}