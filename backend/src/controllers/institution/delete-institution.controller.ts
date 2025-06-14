import { Request, Response } from "express";
import { deleteInstitutionService } from "../../services/instituicao/delete-institution.service";

export const deleteInstitutionController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        if(!id || isNaN(Number(id))) {
            console.error("ID inválido:", id);
            res.status(400).json({ error: "Informe o Id da instituição desejada" });
            return;
        }
        console.log("ID recebido:", id);

        await deleteInstitutionService(Number(id));
        res.status(200).json({ message: "Instituição deletada com sucesso!" });
        return;

    } catch (error) {
        console.error("Erro ao deletar a instituição:", error);
        res.status(500).json({ error: "Erro interno no servidor" });
        return;
    }
}