import { ProductRepository } from "../repositories/ProductRepository";

export class InventoryService {
  static getProduct(id: number) {
    return ProductRepository.findById(id);
  }
}