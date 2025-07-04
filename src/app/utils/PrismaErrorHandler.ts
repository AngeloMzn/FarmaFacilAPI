import {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
} from "@prisma/client/runtime/library";

export function handlePrismaError(error: any): never {
  if (error instanceof PrismaClientKnownRequestError) {
    throw new Error(`Erro do banco de dados: ${error.message}`);
  } else if (error instanceof PrismaClientUnknownRequestError) {
    throw new Error("Erro desconhecido no banco de dados.");
  } else if (error instanceof PrismaClientRustPanicError) {
    throw new Error("Erro de conexão com o banco de dados.");
  } else if (error instanceof PrismaClientInitializationError) {
    throw new Error("Erro na inicialização do banco de dados.");
  } else if (error instanceof PrismaClientValidationError) {
    throw new Error(`Erro de validação: ${error.message}`);
  } else {
    throw error;
  }
}
