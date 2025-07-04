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


//Address
router.post("/address/create", addressController.createAddress);
router.get("/addresses", addressController.getAdressesByUserId);
router.put("/address/:id", addressController.updateAddress);
router.delete("/address/:id", addressController.deleteAddress);

if(process.env.DEV_MODE == "true"){
    console.log("DEV MODE ENABLED");
    router.get("/products/seed",  productController.generateSeed);
    router.delete("/products",  productController.deleteAllProducts);
}

export { router };
