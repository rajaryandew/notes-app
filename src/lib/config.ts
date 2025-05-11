import dotenv from "dotenv";
dotenv.config();

export const SALT_ROUNDS:string = process.env.SALT_ROUNDS || "10"