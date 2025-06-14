import { Request, Response } from "express";
import { createInstitutionService } from "../../services/instituicao/create-instituicao.service";

export const createInstitutionController = async (req: Request, res: Response) => {
  try {
    const { name, cnpj, contact, description, positionX, positionY } = req.body;
    if (
      !name ||
      !cnpj ||
      !contact ||
      !description ||
      !positionX ||
      !positionY
    ) {
      res.status(400).json({ error: "Preencha todos os campos" });
      return;
    }

    await createInstitutionService({
      name,
      cnpj,
      contact,
      description,
      positionX,
      positionY,
    });

    res.status(201).json({ message: "Instituição criada com sucesso!" });
    return;
  } catch (error) {}
};
