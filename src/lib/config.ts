import dotenv from "dotenv";
dotenv.config();

export const SALT_ROUNDS:string = process.env.SALT_ROUNDS || "10"
export const JWT_SECRET:string = process.env.JWT_SECRET || "secret"
export const ENVIORMENT:string = process.env.ENVOIRMENT || 'local'
export const REDIS_URL:string = process.env.REDIS_URL || ""
export const REDIS_TOKEN: string = process.env.REDIS_TOKEN || "";