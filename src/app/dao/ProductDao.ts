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

// Adicione a função de tratamento de erro
function handlePrismaError(error: any) {
    // Aqui você pode customizar o tratamento, logar, lançar erro customizado, etc.
    // Exemplo simples:
    console.error(error);
    throw error;
}

class ProductDao {

    async getProducts() {
        try {
            return await db.product.findMany();
        } catch (error) {
            handlePrismaError(error);
        }
    }

    async getProductById(id: number) {
        try {
            return await db.product.findUnique({
                where: { id }
            });
        } catch (error) {
            handlePrismaError(error);
        }
    }

    async getProductByCode(code: string) {
        try {
            return await db.product.findUnique({
                where: { code }
            });
        } catch (error) {
            handlePrismaError(error);
        }
    }

    async createProduct(product: Product) {
        try {
            if (product.image != "") {
                const imageDirectory = path.join(__dirname, '..', 'public', 'images', 'product');
                const imagePath = path.join(imageDirectory, product.image);
                fs.writeFileSync(imagePath, product.image);
            }

            return await db.product.create({
                data: {
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
        } catch (error) {
            handlePrismaError(error);
        }
    }

    async updateProduct(id: number, product: Product) {
        try {
            return await db.product.update({
                where: { id },
                data: product
            });
        } catch (error) {
            handlePrismaError(error);
        }
    }

    async deleteProduct(id: number) {
        try {
            return await db.product.delete({
                where: { id }
            });
        } catch (error) {
            handlePrismaError(error);
        }
    }

    async getProductsByCategory(category: string) {
        try {
            return await db.product.findMany({
                where: { category }
            });
        } catch (error) {
            handlePrismaError(error);
        }
    }

    async seedProducts() {
        try {
            return await db.product.createMany({
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
        } catch (error) {
            handlePrismaError(error);
        }
    }

    async deleteAllProducts() {
        try {
            return await db.product.deleteMany();
        } catch (error) {
            handlePrismaError(error);
        }
    }

    async getLastTwo() {
        try {
            return await db.product.findMany({
                take: 2,
                orderBy: {
                    id: 'desc'
                }
            });
        } catch (error) {
            handlePrismaError(error);
        }
    }

}
export const productDao = new ProductDao();