const { Router } = require("express")
const controller = require('../controller');

const router = Router();



router.get("/clients", controller.getUtilisateurs);
router.get("/clients/:idutilisateur",controller.getUtilisateurById);
router.delete("/clients/:idutilisateur", controller.removeUtilisateur);


router.get("/avis", controller.getAvis);
router.get("/avis/:idavis",controller.getAvisById);
router.delete("/avis/:idavis", controller.removeAvis);



router.get("/notes", controller.getNotes);
router.get("/notes/:idnote",controller.getNotesById);
router.delete("/notes/:idnote", controller.removeNote);




router.get("/questions", controller.getQuestions);
router.get("/questions/:idquestion",controller.getQuestionsById);
router.delete("/questions/:idquestion", controller.removeQuestion);



router.get("/reponses", controller.getReponses);
router.get("/reponses/:idreponse",controller.getReponsesById);
router.post("/ajouterreponse", controller.addReponse);
router.delete("/reponses/:idreponse", controller.removeReponse);


router.get("/societes", controller.getSocietes);
router.get("/societes/:idsociete",controller.getSocietesById);
router.delete("/societes/:idsociete", controller.removeSociete);






router.get("/clientsavis", controller.getClientavis);
router.get("/clientsavis/:idutilisateur",controller.getClientavisbyID);



module.exports = router;