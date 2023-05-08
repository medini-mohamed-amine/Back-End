const { Router } = require("express")
const controller = require('../controller');

const router = Router();


router.post("/loginclient", controller.getloginclient);
router.post("/loginsociete", controller.getloginsociete);
router.post("/registerclient", controller.addUtilisateur);
router.post("/registersociete", controller.addSociete);


module.exports = router;