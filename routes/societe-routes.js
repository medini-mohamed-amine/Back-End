const { Router } = require("express")
const controller = require('../controller');

const router = Router();


router.post("/", controller.addSociete);
router.put("/:idsociete", controller.updateSociete);





module.exports = router;