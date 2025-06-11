/*
  Warnings:

  - Made the column `isDeleted` on table `note` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "note" ALTER COLUMN "isDeleted" SET NOT NULL;
