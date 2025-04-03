// import { Sale } from "../models/Sale";

// const sales: Sale[] = [];

// export class SalesRepository {
//     static save(sale: Sale) {
//         sales.push(sale);
//         return sale;
//     }
// }
import pool from "../config/database";
import { Sale } from "../models/Sale";

export class SaleRepository {
    static async save(sale: Sale): Promise<Sale> {
        const connection = await pool.getConnection();
        await connection.execute("INSERT INTO sales (productId, quantity) VALUES (?, ?)", [sale.productId, sale.quantity]);
        connection.release();
        return sale;
  }
}