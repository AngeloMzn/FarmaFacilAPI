import { Request, Response } from "express";

class ProductController{

  public async createProduct(req: Request, res: Response): Promise<Response> {
    try {
      const result = await createProductAction.createProduct(req.body);

      return res.json(result);
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error', error: error as any });
    }
  }

}

export const productController = new ProductController();
