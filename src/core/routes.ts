import { Router } from "express";
import { userController } from "../app/controller/UserController";
import { productController } from "../app/controller/ProductController";
import { addressController } from "../app/controller/Addresscontroller";
import { checkRole } from "../app/middleware/checkRole"; // <-- aqui

const router: Router = Router()

// Auth
router.post("/signup", userController.signup);
router.post("/login", userController.login);

// Product (restrições de role)
router.post("/product/create", checkRole(["admin"]), productController.createProduct);
router.put("/product/:id", checkRole(["admin"]), productController.updateProduct);
router.delete("/product/:id", checkRole(["admin"]), productController.deleteProduct);

router.get("/products", productController.getProducts);
router.get("/product/:id", productController.getProductById);
router.get("/product/code/:code", productController.getProductByCode);
router.get("/products/category/:category", productController.getProductsByCategory);
router.get("/products/lasttwo", productController.getLastTwo);

// Address
router.post("/address/create", checkRole(["admin", "farmaceutico"]), addressController.createAddress);
router.get("/addresses", addressController.getAdressesByUserId);
router.put("/address/:id", addressController.updateAddress);
router.delete("/address/:id", addressController.deleteAddress);

// DEV mode
if (process.env.DEV_MODE == "true") {
    console.log("DEV MODE ENABLED");
    router.get("/products/seed", productController.generateSeed);
    router.delete("/products", productController.deleteAllProducts);
}
router.get("/health", (req, res) => {
  res.json({ status: "ok" });
});
export { router };
