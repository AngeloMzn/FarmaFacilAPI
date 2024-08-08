import { Router } from "express";
import { userAuthController } from "../app/controller/User/UserAuthController";

const router: Router = Router()

//Routes
router.post("/signup", userAuthController.signup);
router.post("/login", userAuthController.login);

export { router };