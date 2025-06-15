import bcrypt from "bcrypt"
import prisma from "./prisma";
import { SALT_ROUNDS } from "../config";
import { Prisma } from "@/generated/prisma";

/**
 * Create a new user with a hashed password.
 * @param username - The username for the new user.
 * @param password - The plain text password to hash and store.
 * @throws Error if the username already exists or on server error.
 */
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
        } else{
            throw new Error("Server error, try again")
        }
    }
}

/**
 * Retrieve a user by username and verify the password.
 * @param username - The username to look up.
 * @param password - The plain text password to verify.
 * @returns Promise resolving to the user object if authentication succeeds.
 * @throws Error if user is not found or password is incorrect.
 */
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