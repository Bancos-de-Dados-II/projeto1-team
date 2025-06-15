import { Router } from "express";
import { createInstitutionController } from "../controllers/institution/create-institution.controller";
import { deleteInstitutionController } from "../controllers/institution/delete-institution.controller";
import { getInstitutionController } from "../controllers/institution/get-institution.controller";
import { updateInstitutionController } from "../controllers/institution/update-institution.controller";
import { updateLocalizationInstitutionController } from "../controllers/institution/update-localization-institution.controller";

const router = Router();

router.post("/", createInstitutionController);
router.delete("/:id", deleteInstitutionController);
router.get("/", getInstitutionController);
router.put("/:id", updateInstitutionController)
router.patch("/:id", updateLocalizationInstitutionController);

export default router;