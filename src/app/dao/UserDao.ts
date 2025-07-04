import db from "../../core/db";
import fs from 'fs';
import path from 'path';
import { handlePrismaError } from "../utils/PrismaErrorHandler";

interface User {
    email: string;
    name: string;
    cpf: string;
    rg: string;
    role: string;
    phone: string;
    birthdate: Date;
    password: string;
    image: string;
}


class UserDao {

    async getUsers() {
        try {
            return await db.user.findMany();
        } catch (error) {
            handlePrismaError(error);
        }
    }

    async getUserById(id: number) {
        try {
            return await db.user.findUnique({
                where: {
                    id: id
                }
            });
        } catch (error) {
            handlePrismaError(error);
        }
    }

    async getUserByEmail(email: string) {
        try {
            return await db.user.findUnique({
                where: {
                    email: email
                }
            });
        } catch (error) {
            handlePrismaError(error);
        }
    }

    async createUser(user: User) {
        try {
            if (user.image != "") {
                const imageDirectory = path.join(__dirname, '..', 'public', 'images', 'product');
                const imagePath = path.join(imageDirectory, user.image);
                fs.writeFileSync(imagePath, user.image);
            }
            return await db.user.create({
                data: {
                    email: user.email,
                    name: user.name,
                    cpf: user.cpf,
                    rg: user.rg,
                    role: user.role,
                    phone: user.phone,
                    birthDate: user.birthdate,
                    password: user.password,
                    image: user.image
                }
            });
        } catch (error) {
            handlePrismaError(error);
        }
    }

    async updateUser(id: number, user: User) {
        try {
            return await db.user.update({
                where: {
                    id: id
                },
                data: user
            });
        } catch (error) {
            handlePrismaError(error);
        }
    }

    async deleteUser(id: number) {
        try {
            return await db.user.delete({
                where: {
                    id: id
                }
            });
        } catch (error) {
            handlePrismaError(error);
        }
    }

}
export const userDao = new UserDao();