/*
  Warnings:

  - You are about to drop the column `salesValue` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the column `totalCost` on the `Customer` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Customer" DROP COLUMN "salesValue",
DROP COLUMN "totalCost";

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "salesValue" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "totalCost" DOUBLE PRECISION NOT NULL DEFAULT 0;
