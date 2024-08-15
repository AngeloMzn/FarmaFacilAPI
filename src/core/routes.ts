import { Router } from "express";
import { userController } from "../app/controller/UserController";
import { productController } from "../app/controller/ProductController";
import { addressController } from "../app/controller/Addresscontroller";


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
router.get("/product/code/:code",  productController.getProductByCode);
router.get("/products/category/:category",  productController.getProductsByCategory);
router.get("/products/lasttwo",  productController.getLastTwo);
//devmode
router.get("/products/seed",  productController.generateSeed);
router.delete("/products",  productController.deleteAllProducts);

//Address
router.get("/addresses", addressController.getAdressesByUserId);

export { router };