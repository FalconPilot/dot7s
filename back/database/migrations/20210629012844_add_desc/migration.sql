/*
  Warnings:

  - Added the required column `descriptionFR` to the `Ring` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descriptionFR` to the `TorsoArmor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descriptionFR` to the `Weapon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descriptionFR` to the `WeaponClass` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ring" ADD COLUMN     "descriptionFR" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "TorsoArmor" ADD COLUMN     "descriptionFR" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Weapon" ADD COLUMN     "descriptionFR" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "WeaponClass" ADD COLUMN     "descriptionFR" TEXT NOT NULL;
