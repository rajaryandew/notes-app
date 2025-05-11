import prisma from "./prisma";

export async function getNotes(username: string) {
    const notes = await prisma.note.findMany({
        where: {
            username: username,
        },
    });
    return notes
}
