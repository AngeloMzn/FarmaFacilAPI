import { Request, Response } from "express";
import { signUpUserAction } from "../usecases/User/SignupUserAction";
import { loginUserAction } from "../usecases/User/LoginUserAction";
import { listAddressAction } from "../usecases/Address/ListAdressAction";


class AddressController {
  public async getAdressesByUserId(req: Request, res: Response): Promise<Response> {
    try {
        const response = await listAddressAction.getAddressesByUserId(Number(req.params.id));
        return res.json(response);
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error', error: error as any });
    }
  }
}

export const addressController = new AddressController();
