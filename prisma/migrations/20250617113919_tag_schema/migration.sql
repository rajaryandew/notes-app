-- AlterTable
ALTER TABLE "note" ADD COLUMN     "tagId" INTEGER;

-- CreateTable
CREATE TABLE "tag" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "user" TEXT,

    CONSTRAINT "tag_pkey" PRIMARY KEY ("id")
);

-- RenameForeignKey
ALTER TABLE "note" RENAME CONSTRAINT "fk_user" TO "note_username_fkey";

-- AddForeignKey
ALTER TABLE "note" ADD CONSTRAINT "note_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "tag"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tag" ADD CONSTRAINT "tag_user_fkey" FOREIGN KEY ("user") REFERENCES "profile"("username") ON DELETE CASCADE ON UPDATE NO ACTION;

-- RenameIndex
ALTER INDEX "unique_username" RENAME TO "profile_username_key";
