import { response } from "express";
import { userDao } from "../../dao/UserDao";
import { productDao } from "../../dao/ProductDao";

interface Data {
    code: string;
    quantity: number;   
    description: string;
}

class ListProductAction{

    public async getProducts() {
        const response = await productDao.getProducts();
        if(response){
            return {message: 'Produto cadastrado com sucesso!'};
        }
        return {message: 'Erro: Não foi possível cadastrar o produto!'};
    }
    public async getProductById(id:number) {
        const response = await productDao.getProductById(id);
        if(response){
            return {message: 'Produto cadastrado com sucesso!'};
        }
        return {message: 'Erro: Não foi possível cadastrar o produto!'};
    }
}

export const listProductAction = new ListProductAction();