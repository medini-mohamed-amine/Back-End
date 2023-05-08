const { Router } = require("express");
const controller = require("../controller");

const router = Router();

// // router.post("/", controller.addUtilisateur);
// router.put("/:idutilisateur", controller.updateUtilisateur);

router.post("/ajouternote", controller.addNote);
router.post("/ajouteravis", controller.addAvis);
router.post("/ajouterquestion", controller.addQuestion);

module.exports = router;
