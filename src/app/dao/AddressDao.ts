import db from "../../core/db";
import { Prisma } from "@prisma/client";

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
            throw new Error("Erro ao buscar endereços.");
        }
    }

    async getAddressById(id: number) {
        try {
            const address = await db.address.findUnique({
                where: { id: id }
            });
            if (!address) {
                throw new Error("Endereço não encontrado.");
            }
            return address;
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2025") {
                throw new Error("Endereço não encontrado.");
            }
            throw new Error("Erro ao buscar endereço por ID.");
        }
    }

    async getAddressesByUserId(userId: number) {
        try {
            return await db.address.findMany({
                where: { userId: userId }
            });
        } catch (error) {
            throw new Error("Erro ao buscar endereços do usuário.");
        }
    }

    async findAddressByCep(cep: string) {
        try {
            return await db.address.findMany({
                where: { cep: cep }
            });
        } catch (error) {
            throw new Error("Erro ao buscar endereço pelo CEP.");
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
            if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
                throw new Error("Já existe um endereço com esse valor único.");
            }
            throw new Error("Erro ao criar endereço.");
        }
    }

    async existsAddress(id: number): Promise<boolean> {
        const address = await db.address.findUnique({
            where: { id }
        });
        return !!address;
    }

    async updateAddress(id: number, address: Address) {
        try {
            const userId = await address.userId;
            return await db.address.update({
                where: { id: id },
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
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                if (error.code === "P2025") {
                    throw new Error("Endereço não encontrado para atualização.");
                }
                if (error.code === "P2002") {
                    throw new Error("Violação de unicidade ao atualizar endereço.");
                }
            }
            throw new Error("Erro ao atualizar endereço.");
        }
    }

    async deleteAddress(id: number) {
        try {
            return await db.address.delete({
                where: { id: id }
            });
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2025") {
                throw new Error("Endereço não encontrado para exclusão.");
            }
            throw new Error("Erro ao deletar endereço.");
        }
    }
}
export const addressDao = new AddressDao();