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
