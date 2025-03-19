const express = require("express");
const router = express.Router();
const autoRentaController = require("../controller/autoRentaController");

router.post("/",autoRentaController.addAutoRenta);
router.get("/",autoRentaController.getAutoRentas);
router.get("/:id",autoRentaController.getRentaById);
router.put("/:id",autoRentaController.updatedAutoRenta);
router.put("/estado/:id",autoRentaController.changeEstadoRenta);

module.exports = router;