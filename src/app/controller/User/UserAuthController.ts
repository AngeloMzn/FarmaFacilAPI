import { Request, Response } from "express";
import { signUpUserAction } from "../../usecases/User/SignupUserAction";
import { loginUserAction } from "../../usecases/User/LoginUserAction";

class AdminAuthController {

  public async signup(req: Request, res: Response): Promise<Response> {
    try {
      const result = await signUpUserAction.signUp(req.body);

      return res.json(result);
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error', error: error as any });
    }
  }

  public async login(req: Request, res: Response): Promise<Response> {
    try {
      const result = await loginUserAction.login(req.body);
      return res.json(result);
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error', error: error as any });
    }
  }

}

export const adminAuthController = new AdminAuthController();
