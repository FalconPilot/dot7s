-- CreateEnum
CREATE TYPE "Race" AS ENUM ('Human', 'Elf', 'Porcus', 'Nautilus');

-- CreateEnum
CREATE TYPE "ArmorWeight" AS ENUM ('Light', 'Medium', 'Heavy');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('Male', 'Female');

-- CreateTable
CREATE TABLE "Enchantment" (
    "id" SERIAL NOT NULL,
    "statsModifiers" JSONB NOT NULL,
    "nameFR" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DamageType" (
    "id" SERIAL NOT NULL,
    "nameFR" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CharacterClass" (
    "id" SERIAL NOT NULL,
    "nameFR" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" SERIAL NOT NULL,
    "nameFR" TEXT NOT NULL,
    "descriptionFR" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WeaponClass" (
    "id" SERIAL NOT NULL,
    "nameFR" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Weapon" (
    "id" SERIAL NOT NULL,
    "minDamage" INTEGER NOT NULL,
    "maxDamage" INTEGER NOT NULL,
    "weaponClassId" INTEGER NOT NULL,
    "nameFR" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TorsoArmor" (
    "id" SERIAL NOT NULL,
    "weight" "ArmorWeight" NOT NULL,
    "nameFR" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ring" (
    "id" SERIAL NOT NULL,
    "nameFR" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Character" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "race" "Race" NOT NULL,
    "gender" "Gender" NOT NULL,
    "inDungeon" BOOLEAN NOT NULL,
    "userId" INTEGER NOT NULL,
    "weaponId" INTEGER,
    "torsoArmorId" INTEGER,
    "ring1Id" INTEGER,
    "ring2Id" INTEGER,
    "ring3Id" INTEGER,
    "ring4Id" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "accountId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_EnchantmentToWeapon" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_EnchantmentToTorsoArmor" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_EnchantmentToRing" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_SkillToWeaponClass" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Character.name_unique" ON "Character"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Character_userId_unique" ON "Character"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "User.accountId_unique" ON "User"("accountId");

-- CreateIndex
CREATE UNIQUE INDEX "_EnchantmentToWeapon_AB_unique" ON "_EnchantmentToWeapon"("A", "B");

-- CreateIndex
CREATE INDEX "_EnchantmentToWeapon_B_index" ON "_EnchantmentToWeapon"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EnchantmentToTorsoArmor_AB_unique" ON "_EnchantmentToTorsoArmor"("A", "B");

-- CreateIndex
CREATE INDEX "_EnchantmentToTorsoArmor_B_index" ON "_EnchantmentToTorsoArmor"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EnchantmentToRing_AB_unique" ON "_EnchantmentToRing"("A", "B");

-- CreateIndex
CREATE INDEX "_EnchantmentToRing_B_index" ON "_EnchantmentToRing"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_SkillToWeaponClass_AB_unique" ON "_SkillToWeaponClass"("A", "B");

-- CreateIndex
CREATE INDEX "_SkillToWeaponClass_B_index" ON "_SkillToWeaponClass"("B");

-- AddForeignKey
ALTER TABLE "Weapon" ADD FOREIGN KEY ("weaponClassId") REFERENCES "WeaponClass"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD FOREIGN KEY ("weaponId") REFERENCES "Weapon"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD FOREIGN KEY ("torsoArmorId") REFERENCES "TorsoArmor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD FOREIGN KEY ("ring1Id") REFERENCES "Ring"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD FOREIGN KEY ("ring2Id") REFERENCES "Ring"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD FOREIGN KEY ("ring3Id") REFERENCES "Ring"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD FOREIGN KEY ("ring4Id") REFERENCES "Ring"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EnchantmentToWeapon" ADD FOREIGN KEY ("A") REFERENCES "Enchantment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EnchantmentToWeapon" ADD FOREIGN KEY ("B") REFERENCES "Weapon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EnchantmentToTorsoArmor" ADD FOREIGN KEY ("A") REFERENCES "Enchantment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EnchantmentToTorsoArmor" ADD FOREIGN KEY ("B") REFERENCES "TorsoArmor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EnchantmentToRing" ADD FOREIGN KEY ("A") REFERENCES "Enchantment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EnchantmentToRing" ADD FOREIGN KEY ("B") REFERENCES "Ring"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SkillToWeaponClass" ADD FOREIGN KEY ("A") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SkillToWeaponClass" ADD FOREIGN KEY ("B") REFERENCES "WeaponClass"("id") ON DELETE CASCADE ON UPDATE CASCADE;
