/*
  Warnings:

  - You are about to drop the column `testDate` on the `DiagnosticTest` table. All the data in the column will be lost.
  - You are about to drop the column `testType` on the `DiagnosticTest` table. All the data in the column will be lost.
  - Added the required column `investigationType` to the `DiagnosticTest` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DiagnosticTest" DROP COLUMN "testDate",
DROP COLUMN "testType",
ADD COLUMN     "investigationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "investigationType" TEXT NOT NULL;
