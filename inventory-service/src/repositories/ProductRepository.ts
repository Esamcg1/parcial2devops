// import { Product } from "../models/Product";

// const products: Product[] = [
//   { id: 1, name: "Laptop", stock: 10 },
//   { id: 2, name: "Mouse", stock: 5 }
// ];

// export class ProductRepository {
//   static findById(id: number): Product | undefined {
//     return products.find(product => product.id === id);
//   }
// }
import db from "../config/database";
import { Product } from "../models/Product";

export class ProductRepository {
  static async findById(id: number): Promise<Product | null> {
    const product = await db.oneOrNone("SELECT * FROM products WHERE id = $1", [id]);
    return product;
  }
}