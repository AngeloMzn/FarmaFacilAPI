import db from "../../core/db";

interface User {
    email: string;
    name: string;
    cpf: string;
    rg: string;
    role: string;
    phone: string;
    birthdate: Date;  
    password: string;
}
class UserDao{

    async getUsers(){
        return db.user.findMany();
    }

    async getUserById(id:number){
        return db.user.findUnique({
            where:{
                id:id
            }
        });
    }

    async getUserByEmail(email:string){
        return db.user.findUnique({
            where:{
                email:email
            }
        });
    }

    public async getUserByRole(role: string) {
        return db.user.findMany({
            where: {
                role: role
            }
        });
    }


    async createUser(user: User){
        return db.user.create({
            data:{
                email: user.email,
                name: user.name,
                cpf: user.cpf,
                rg: user.rg,
                role: user.role,
                phone: user.phone,
                birthDate: user.birthdate,
                password: user.password
            }
        });
    }

    async updateUser(id:number, user: User){
        return db.user.update({
            where:{
                id:id
            },
            data: user
        });
    }

    async deleteUser(id:number){
        return db.user.delete({
            where:{
                id:id
            }
        });
    }

} 
export const userDao = new UserDao();