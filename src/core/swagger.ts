import swaggerJSDoc from 'swagger-jsdoc';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'FarmaFacil API',
      version: '1.0.0',
      description: 'Documentação gerada automaticamente com Swagger',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['**/controller/*.ts'],
};

export const swaggerSpec = swaggerJSDoc(options);
