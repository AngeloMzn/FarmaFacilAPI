import { userDao } from "../../dao/UserDao";
import bcrypt from "bcrypt";

interface Data {
    email: string;
    password: string;   
}

class LoginUserAction{

    public async login(data: Data) {
        const user = await userDao.getUserByEmail(data.email);
        if(!user){
            return {message: 'Credenciais inválidas, email e/ou senha incorretos.'};
        }else if(bcrypt.compareSync(data.password, user.password)){
            return {message: 'Usuário logado com sucesso!', user: user};
        }
        return {message: 'Credenciais inválidas, email e/ou senha incorretos.'};
    }
}

export const loginUserAction = new LoginUserAction();