import { Router } from "express";
import { userAuthController } from "../app/controller/User/UserAuthController";

const router: Router = Router()

//Routes
router.get("/signup", userAuthController.signup);
router.post("/login", userAuthController.login);

export { router };