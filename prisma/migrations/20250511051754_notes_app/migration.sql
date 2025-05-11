/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `profile` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "note" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "username" VARCHAR(255) NOT NULL,

    CONSTRAINT "note_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "unique_username" ON "profile"("username");

-- AddForeignKey
ALTER TABLE "note" ADD CONSTRAINT "fk_user" FOREIGN KEY ("username") REFERENCES "profile"("username") ON DELETE CASCADE ON UPDATE NO ACTION;
