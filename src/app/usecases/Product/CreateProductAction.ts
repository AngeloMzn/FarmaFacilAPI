import { userDao } from "../../dao/UserDao";

interface Data {
    code: string;
    quantity: int;   
    description: description;
}

class CreateProductAction{

    public async createProduct(data: Data) {
        const user = await userDao.getUserByEmail(data.email);
        if(!user){
            return {message: 'Credenciais inválidas, email e/ou senha incorretos.'};
        }else if(bcrypt.compareSync(data.password, user.password)){
            return {message: 'Usuário logado com sucesso!', user: user};
        }
        return {message: 'Credenciais inválidas, email e/ou senha incorretos.'};
    }
}

export const createProductAction = new CreateProductAction();