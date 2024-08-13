import { response } from "express";
import { userDao } from "../../dao/UserDao";
import { productDao } from "../../dao/ProductDao";

interface Data {
    code: string;
    quantity: number;   
    description: string;
    category: string;
    initial_price: number;
    promotional_price: number;
    needs_prescription: boolean;
    image: string;
}
class ListProductAction{

    public async getProducts() {
        const response = await productDao.getProducts();
        if(response){
            return response;
        }
        return {message: 'Erro: Não foi possível cadastrar o produto!'};
    }
    
    public async getProductById(id:number) {
        const response = await productDao.getProductById(id);
        if(response){
            return response;
        }
        return {message: 'Erro: Não foi possível cadastrar o produto!'};
    }

    public async getProductByCode(code:string) {
        const response = await productDao.getProductByCode(code);
        if(response){
            return response;
        }
        return {message: 'Erro: Não foi possível cadastrar o produto!'};
    }
    
    public async getProductsByCategory(category:string) {
        const response = await productDao.getProductsByCategory(category);
        if(response){
            return response;
        }
        return {message: 'Erro: Não foi possível cadastrar o produto!'};
    }

}

export const listProductAction = new ListProductAction();