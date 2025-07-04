import db from "../../core/db";
import { handlePrismaError } from "../utils/PrismaErrorHandler";

interface Address {
    uf: string;
    cep: string;
    city: string;
    street: string;
    number: string;
    type: string;
    complement: string;
    userId: Promise<number>;
}

class AddressDao {

    async getAddresses() {
        try {
            return await db.address.findMany();
        } catch (error) {
            handlePrismaError(error);
        }
    }

    async getAddressesByUserId(userId: number) {
        try {
            return await db.address.findMany({
                where: { userId }
            });
        } catch (error) {
            handlePrismaError(error);
        }
    }

    async getAddressById(id: number) {
        try {
            return await db.address.findUnique({
                where: { id }
            });
        } catch (error) {
            handlePrismaError(error);
        }
    }

    async createAddress(address: Address) {
        try {
            const userId = await address.userId;
            return await db.address.create({
                data: {
                    uf: address.uf,
                    cep: address.cep,
                    city: address.city,
                    street: address.street,
                    number: address.number,
                    type: address.type,
                    complement: address.complement,
                    userId: userId
                }
            });
        } catch (error) {
            handlePrismaError(error);
        }
    }

    async updateAddress(id: number, address: Address) {
        try {
            const userId = await address.userId;
            return await db.address.update({
                where: { id },
                data: {
                    uf: address.uf,
                    cep: address.cep,
                    city: address.city,
                    street: address.street,
                    number: address.number,
                    type: address.type,
                    complement: address.complement,
                    userId: userId
                }
            });
        } catch (error) {
            handlePrismaError(error);
        }
    }

    async deleteAddress(id: number) {
        try {
            return await db.address.delete({
                where: { id }
            });
        } catch (error) {
            handlePrismaError(error);
        }
    }

}

export const addressDao = new AddressDao();