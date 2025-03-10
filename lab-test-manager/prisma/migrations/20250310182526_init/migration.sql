/*
  Warnings:

  - You are about to drop the `DiagnosticTest` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "DiagnosticTest";

-- CreateTable
CREATE TABLE "diagnosticTest" (
    "id" TEXT NOT NULL,
    "patientName" TEXT NOT NULL,
    "investigationType" TEXT NOT NULL,
    "result" TEXT NOT NULL,
    "investigationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "notes" TEXT,

    CONSTRAINT "diagnosticTest_pkey" PRIMARY KEY ("id")
);
