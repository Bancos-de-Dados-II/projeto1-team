import prisma from "../../prisma/client";

export async function deleteInstitutionService(id: number): Promise<void> {
  await prisma.$executeRaw`
    DELETE FROM "Instituicao" WHERE "id" = ${id}`;
}
