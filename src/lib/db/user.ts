import bcrypt from "bcrypt"
import prisma from "./prisma";
import { SALT_ROUNDS } from "../config";
import { Prisma } from "@/generated/prisma";

export async function addUser(username:string,password:string){
    try{
        const hashedPassword = await bcrypt.hash(password,parseInt(SALT_ROUNDS))
        
        await prisma.profile.create({
            data:{
                username,
                password:hashedPassword
            }
        })
    }catch(error){
        if(error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002"){
            throw new Error("Username already exists")
        }
    }
}

export async function getUser(username:string,password:string){
    try{
        const user = await prisma.profile.findFirst({
            where:{username}
        })
        if(!user){
            throw new Error("User not found")
        }

        const isPasswordMatching = await bcrypt.compare(password,user.password);

        if(!isPasswordMatching){
            throw new Error("Password incorrect")
        }

        return user
    } catch(error){
        throw error        
    }
}