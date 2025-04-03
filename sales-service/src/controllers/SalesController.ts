import { Request, Response } from "express";
import { SalesService } from "../services/SalesService";

export class SalesController {
  static async createSale(req: Request, res: Response) {
    
    try {
      
      const { productId, quantity } = req.body;
      const sale = await SalesService.processSale(productId, quantity);
      res.json(sale);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}