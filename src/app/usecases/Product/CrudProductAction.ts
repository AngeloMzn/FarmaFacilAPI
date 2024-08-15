import { response } from "express";
import { userDao } from "../../dao/UserDao";
import { productDao } from "../../dao/ProductDao";

interface Data {
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

class CrudProductAction{

    public async createProduct(data: Data) {
        const response = await productDao.createProduct(data);
        if(response){
            return {message: 'Produto cadastrado com sucesso!'};
        }
        return {message: 'Erro: Não foi possível cadastrar o produto!'};
    }
    public async updateProduct(id:number, data: Data) {
        const response = await productDao.updateProduct(id, data);
        if(response){
            return {message: 'Produto atualizado com sucesso!'};
        }
        return {message: 'Erro: Não foi possível atualizar o produto!'};
    }
    public async deleteProduct(id:number) {
        const response = await productDao.deleteProduct(id);
        if(response){
            return {message: 'Produto deletado com sucesso!'};
        }
        return {message: 'Erro: Não foi possível deletar o produto!'};
    }
    public async generateSeed() {
        const response = await productDao.seedProducts();
        if(response){
            return {message: 'Seed de produtos gerada com sucesso!'};
        }
        return {message: 'Erro: Não foi possível gerar a seed de produtos!'};
    }

}

export const crudProductAction = new CrudProductAction();