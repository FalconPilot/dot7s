-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "characterName" TEXT NOT NULL,
    "inDungeon" BOOLEAN NOT NULL,
    "weapons" JSONB NOT NULL,
    "equipment" JSONB NOT NULL,
    "inventory" JSONB NOT NULL,
    "firstClass" JSONB,
    "secondClass" JSONB,
    "craftClass" JSONB,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User.characterName_unique" ON "User"("characterName");
