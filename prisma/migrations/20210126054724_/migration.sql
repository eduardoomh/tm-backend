/*
  Warnings:

  - You are about to alter the column `createdAt` on the `usuario` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `updatedAt` on the `usuario` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- AlterTable
ALTER TABLE `usuario` MODIFY `createdAt` INT NOT NULL,
    MODIFY `updatedAt` INT NOT NULL;
