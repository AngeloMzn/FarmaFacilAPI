import { Router } from "express";
import { adminAuthController } from "../app/controller/User/UserAuthController";

const router: Router = Router()

//Routes
router.get("/signup", adminAuthController.signup);
router.get("/login", adminAuthController.login);

export { router };