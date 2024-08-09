import { Router } from "express";
import { userController } from "../app/controller/UserController";
import { productController } from "../app/controller/ProductController";


const router: Router = Router()

//Auth
router.post("/signup", userController.signup);
router.post("/login", userController.login);

//Product
router.post("/product/create",  productController.createProduct);
router.get("/products",  productController.getProducts);
router.get("/product/:id",  productController.getProductById);
router.put("/product/:id",  productController.updateProduct);
router.delete("/product/:id",  productController.deleteProduct);

//Sell

export { router };
