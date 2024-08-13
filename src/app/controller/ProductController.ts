import { Request, Response } from "express";
import { crudProductAction } from "../usecases/Product/CrudProductAction";
import { listProductAction } from "../usecases/Product/ListProductAction";

class ProductController{

  public async createProduct(req: Request, res: Response): Promise<Response> {
    try {
      const response = await crudProductAction.createProduct(req.body);
      return res.json(response);
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error', error: error as any });
    }
  }

  public async getProducts(req: Request, res: Response): Promise<Response> {
    try {
      const response = await listProductAction.getProducts();
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error', error: error as any });
    }
  }

  public async getProductById(req: Request, res: Response): Promise<Response> {
    try {
      const response = await listProductAction.getProductById(Number(req.params.id));
      return res.json(response);
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error', error: error as any });
    }
  }

  public async updateProduct(req: Request, res: Response): Promise<Response> {
    try {
      const response = await crudProductAction.updateProduct(Number(req.params.id), req.body);
      return res.json(response);
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error', error: error as any });
    }
  }

  public async deleteProduct(req: Request, res: Response): Promise<Response> {
    try {
      const response = await crudProductAction.deleteProduct(Number(req.params.id));
      return res.json(response);
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error', error: error as any });
    }
  }
  
  public async getProductByCode(req: Request, res: Response): Promise<Response> {
    try {
      const response = await listProductAction.getProductByCode(req.params.code);
      return res.json(response);
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error', error: error as any });
    }
  }

  public async getProductsByCategory(req: Request, res: Response): Promise<Response> {
    try {
      const response = await listProductAction.getProductsByCategory(req.params.category);
      return res.json(response);
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error', error: error as any });
    }
  }

}

export const productController = new ProductController();
