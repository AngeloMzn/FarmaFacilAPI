import { Router } from "express";
import { userAuthController } from "../app/controller/User/UserAuthController";

const router: Router = Router()

//Auth
router.post("/signup", userController.signup);
router.post("/login", userController.login);

//Product
router.post("/product/create", )


export { router };