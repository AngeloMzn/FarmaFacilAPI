import { Request, Response } from "express";
import { crudFarmaciaAction } from "../usecases/Farmacia/CrudFarmaciaAction";
import { listFarmaciaAction } from "../usecases/Farmacia/ListFarmaciaAction";

class FarmaciaController {

  public async createFarmacia(req: Request, res: Response): Promise<Response> {
    try {
      const response = await crudFarmaciaAction.createFarmacia(req.body);
      return res.json(response);
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error', error: error as any });
    }
  }

  public async getFarmacias(req: Request, res: Response): Promise<Response> {
    try {
      const response = await listFarmaciaAction.getFarmacias();
      return res.json(response);
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error', error: error as any });
    }
  }

  public async getFarmaciaById(req: Request, res: Response): Promise<Response> {
    try {
      const response = await listFarmaciaAction.getFarmaciaById(Number(req.params.id));
      return res.json(response);
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error', error: error as any });
    }
  }

  public async updateFarmacia(req: Request, res: Response): Promise<Response> {
    try {
      const response = await crudFarmaciaAction.updateFarmacia(Number(req.params.id), req.body);
      return res.json(response);
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error', error: error as any });
    }
  }

  public async deleteFarmacia(req: Request, res: Response): Promise<Response> {
    try {
      const response = await crudFarmaciaAction.deleteFarmacia(Number(req.params.id));
      return res.json(response);
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error', error: error as any });
    }
  }

}

export const farmaciaController = new FarmaciaController();
