import prisma from "@/lib/db/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const now = new Date();

    if (
        req.headers.get("Authorization") !== `Bearer ${process.env.CRON_SECRET}`
    ) {
        return NextResponse.json({ status: "Unauthorized" }, { status: 401 });
    }

    try {
        const result = await prisma.note.deleteMany({
            where: {
                isDeleted: true,
                expiresAt: {
                    lte: now,
                },
            },
        });

        return NextResponse.json({ deletedCount: result.count });
    } catch (err) {
        return NextResponse.json({err})
    }
}
