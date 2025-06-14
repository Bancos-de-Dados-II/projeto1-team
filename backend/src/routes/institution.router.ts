import { Router } from "express";
import { createInstitutionController } from "../controllers/institution/create-institution.controller";
import { deleteInstitutionController } from "../controllers/institution/delete-institution.controller";

const router = Router();

router.post("/", createInstitutionController);
router.delete("/:id", deleteInstitutionController);

export default router;