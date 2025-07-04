import { Request, Response } from "express";
import { signUpUserAction } from "../usecases/User/SignupUserAction";
import { loginUserAction } from "../usecases/User/LoginUserAction";

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Endpoints de autenticação
 */

/**
 * @swagger
 * /signup:
 *   post:
 *     summary: Cadastra um novo usuário
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuário cadastrado com sucesso
 *       500:
 *         description: Erro interno
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Realiza login do usuário
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 *       500:
 *         description: Erro interno
 */

class UserController {
  public async signup(req: Request, res: Response): Promise<Response> {
    try {
      const response = await signUpUserAction.signUp(req.body);
      return res.json(response);
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error', error: error as any });
    }
  }

  public async login(req: Request, res: Response): Promise<Response> {
    try {
      const response = await loginUserAction.login(req.body);
      return res.json(response);
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error', error: error as any });
    }
  }
}

export const userController = new UserController();
