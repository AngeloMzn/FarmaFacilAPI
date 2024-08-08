import db from "../../core/db";

interface Product {
    code: string;
    quantity: number;   
    description: string;
}
class ProductDao{

    async getProducts(){
        return db.product.findMany();
    }

    async getProductById(id:number){
        return db.product.findUnique({
            where:{
                id:id
            }
        });
    }

    async getProductByCode(code:string){
        return db.product.findUnique({
            where:{
                code:code
            }
        });
    }

    async createProduct(product: Product){
        return db.product.create({
            data:{
                code: product.code,
                quantity: product.quantity,
                description: product.description
            }
        });
    }

    async updateProduct(id:number, product: Product){
        return db.product.update({
            where:{
                id:id
            },
            data: product
        });
    }

    async deleteProduct(id:number){
        return db.product.delete({
            where:{
                id:id
            }
        });
    }

} 
export const productDao = new ProductDao();