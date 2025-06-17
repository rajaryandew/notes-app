import { NewTag, Tag } from "../types";
import prisma from "./prisma";

export async function createTagRecord(newTag:NewTag){
    await prisma.tag.create({
        data:{
            ...newTag
        }
    })
}

export async function updateTagRecord(tag:Tag,updatedTag:NewTag){
    await prisma.tag.update({
        where: {
            id: tag.id
        },
        data:{
            ...updatedTag
        }
    })
}

export async function getTagRecords(username:string){
    const tags:Tag[] = await prisma.tag.findMany({
        where:{
            OR:[
                {user:username},
                {user:null}
            ]
        }
    })

    return tags
}

export async function deleteTagRecord(tag:Tag){
    await prisma.tag.delete({
        where:{
            id:tag.id
        }
    })
}