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

    async seedProducts(){
        return db.product.createMany({
            data: [
              {
                name: 'Produto 1',
                code: 'PROD001',
                quantity: 50,
                description: 'Descrição do Produto 1',
                category: 'Categoria 1',
                initial_price: 100.1,
                promotional_price: 90.1,
                needs_prescription: false,
                image: 'product.webp',
              },
              {
                name: 'Produto 2',
                code: 'PROD002',
                quantity: 30,
                description: 'Descrição do Produto 2',
                category: 'Categoria 2',
                initial_price: 150.1,
                promotional_price: 140.1,
                needs_prescription: true,
                image: 'product.webp',
              },
              {
                name: 'Produto 3',
                code: 'PROD003',
                quantity: 20,
                description: 'Descrição do Produto 3',
                category: 'Categoria 1',
                initial_price: 200.1,
                promotional_price: 180.1,
                needs_prescription: false,
                image: 'product.webp',
              },
              {
                name: 'Produto 4',
                code: 'PROD004',
                quantity: 10,
                description: 'Descrição do Produto 4',
                category: 'Categoria 3',
                initial_price: 250.1,
                promotional_price: 230.1,
                needs_prescription: true,
                image: 'product.webp',
              },
              {
                name: 'Produto 5',
                code: 'PROD005',
                quantity: 60,
                description: 'Descrição do Produto 5',
                category: 'Categoria 2',
                initial_price: 300.1,
                promotional_price: 270.1,
                needs_prescription: false,
                image: 'product.webp',
              },
              {
                name: 'Produto 6',
                code: 'PROD006',
                quantity: 15,
                description: 'Descrição do Produto 6',
                category: 'Categoria 1',
                initial_price: 350.1,
                promotional_price: 320.1,
                needs_prescription: true,
                image: 'product.webp',
              },
              {
                name: 'Produto 7',
                code: 'PROD007',
                quantity: 40,
                description: 'Descrição do Produto 7',
                category: 'Categoria 3',
                initial_price: 400.1,
                promotional_price: 370.1,
                needs_prescription: false,
                image: 'product.webp',
              },
              {
                name: 'Produto 8',
                code: 'PROD008',
                quantity: 25,
                description: 'Descrição do Produto 8',
                category: 'Categoria 2',
                initial_price: 450.1,
                promotional_price: 420.1,
                needs_prescription: true,
                image: 'product.webp',
              },
              {
                name: 'Produto 9',
                code: 'PROD009',
                quantity: 70,
                description: 'Descrição do Produto 9',
                category: 'Categoria 1',
                initial_price: 500.1,
                promotional_price: 470.1,
                needs_prescription: false,
                image: 'product.webp',
              },
              {
                name: 'Produto 10',
                code: 'PROD010',
                quantity: 35,
                description: 'Descrição do Produto 10',
                category: 'Categoria 3',
                initial_price: 550.1,
                promotional_price: 520.1,
                needs_prescription: true,
                image: 'product.webp',
              },
            ],
          });
    }

    async deleteAllProducts(){
        return db.product.deleteMany();
    }

    async getLastTwo(){
        return db.product.findMany({
            take: 2,
            orderBy: {
                id: 'desc'
            }
        });
    }

} 
export const productDao = new ProductDao();