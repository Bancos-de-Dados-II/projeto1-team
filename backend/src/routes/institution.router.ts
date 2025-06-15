import { Router } from "express";
import { createInstitutionController } from "../controllers/institution/create-institution.controller";
import { deleteInstitutionController } from "../controllers/institution/delete-institution.controller";
import { getInstitutionController } from "../controllers/institution/get-institution.controller";
import { updateInstitutionController } from "../controllers/institution/update-institution.controller";
import { updateLocalizationInstitutionController } from "../controllers/institution/update-localization-institution.controller";
import { validateCnpj } from "../middlewares/institution/validate-cnpj";

const router = Router();

router.post("/", validateCnpj,createInstitutionController);
router.delete("/:id", deleteInstitutionController);
router.get("/", getInstitutionController);
router.put("/:id", updateInstitutionController)
router.patch("/:id", updateLocalizationInstitutionController);

export default router;