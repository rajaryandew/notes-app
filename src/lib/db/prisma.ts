import { PrismaClient } from "@/generated/prisma";
import { ENVIORMENT } from "../config";

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined
}

const prisma = globalForPrisma.prisma || new PrismaClient({
    transactionOptions:{
        maxWait:2000,
        timeout:2000      
    }
})

if(ENVIORMENT !== "prod" || "production") globalForPrisma.prisma = prisma

export default prisma
