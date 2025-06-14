import { Router } from "express";
import { createInstitutionController } from "../controllers/institution/create-institution.controller";

const router = Router();

router.post("/", createInstitutionController);

export default router;