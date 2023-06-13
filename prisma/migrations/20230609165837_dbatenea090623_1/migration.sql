/*
  Warnings:

  - Added the required column `rfc` to the `invoices` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "invoices" ADD COLUMN     "rfc" VARCHAR(13) NOT NULL;
