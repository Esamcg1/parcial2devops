import axios from "axios";
import { SaleRepository } from "../repositories/SalesRepository";

export class SalesService {
  static async processSale(productId: number, quantity: number) {
    const response = await axios.get(`http://localhost:3001/api/products/${productId}`);
    const product = response.data;

    if (!product || product.stock < quantity) {
      throw new Error("Stock insuficiente");
    }

    return SaleRepository.save({ productId, quantity });
  }
}