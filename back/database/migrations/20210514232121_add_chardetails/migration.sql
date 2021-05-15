-- CreateEnum
CREATE TYPE "Race" AS ENUM ('Human', 'Elf', 'Djinn', 'Hound');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('Male', 'Female');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "characterRace" "Race",
ADD COLUMN     "characterGender" "Gender";
