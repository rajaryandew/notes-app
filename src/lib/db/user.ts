import bcrypt from "bcrypt"
import prisma from "./prisma";
import { SALT_ROUNDS } from "../config";
import { Prisma } from "@/generated/prisma";

export async function addUser(username:string,email:string,password:string){
    try{
        const hashedPassword = await bcrypt.hash(password,parseInt(SALT_ROUNDS))
        
        await prisma.profile.create({
            data:{
                username,
                email,
                password:hashedPassword
            }
        })
    }catch(error:any){
        if(error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002"){
            throw new Error("Username already exists")
        }
    }
}