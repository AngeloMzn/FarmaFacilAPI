import express from 'express';
import path from 'path';
import { router } from './routes';

import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './swagger';

export class App {
  public server: express.Application;

  constructor() {
    this.server = express();
    this.middleware();
    this.router();
  }

  private middleware() {
    this.server.use(express.json());
    this.server.use('/images', express.static(path.join(__dirname, '../public/images')));

    // Swagger docs
    this.server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  }

  private router() {
    this.server.use(router);
  }
}

require('dotenv').config();
