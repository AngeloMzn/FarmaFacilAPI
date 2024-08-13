import db from "../../core/db";
import fs from 'fs';
import path from 'path';

interface Product {
    name: string;
    code: string;
    quantity: number;   
    description: string;
    category: string;
    initial_price: number;
    promotional_price: number;
    needs_prescription: boolean;
    image: string;
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
        if(product.image != "") {
            const imageDirectory = path.join(__dirname, '..', 'public', 'images', 'product');
            const imagePath = path.join(imageDirectory, product.image);
            fs.writeFileSync(imagePath, product.image);
        }

        return db.product.create({
            data:{
                code: product.code,
                quantity: product.quantity,
                description: product.description,
                name: product.name,
                category: product.category,
                initial_price: product.initial_price,
                promotional_price: product.promotional_price,
                needs_prescription: product.needs_prescription,
                image: product.image
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

    async getProductsByCategory(category: string){
        return db.product.findMany({
            where:{
                category: category
            }
        });
    }

} 
export const productDao = new ProductDao();