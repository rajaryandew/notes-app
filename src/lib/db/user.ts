import bcrypt from "bcrypt"
import prisma from "./prisma";
import { SALT_ROUNDS } from "../config";

export async function AddUser(username:string,email:string,password:string){
    const hashedPassword = await bcrypt.hash(password,SALT_ROUNDS)
    prisma.profile.create({
        data:{
            username:username,
            email:email,
            password:hashedPassword
        }
    })
}