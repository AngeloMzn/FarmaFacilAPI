import { Router } from "express";
import { adminAuthController } from "../app/controller/User/UserAuthController";

const router: Router = Router()

//Routes
router.get("/signup", userAuthController.signup);
router.get("/login", userAuthController.login);

export { router };
