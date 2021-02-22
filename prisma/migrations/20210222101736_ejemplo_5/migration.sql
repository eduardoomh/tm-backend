/*
  Warnings:

  - You are about to drop the column `acomodoId` on the `lugar` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `usuarioId` ON `salida`;

-- DropIndex
DROP INDEX `usuarioId` ON `permisos`;

-- DropIndex
DROP INDEX `acomodoId` ON `evento`;

-- DropIndex
DROP INDEX `departamentoId` ON `mantenimiento`;

-- DropIndex
DROP INDEX `acomodoId` ON `lugar`;

-- DropIndex
DROP INDEX `departamentoId` ON `evento`;

-- DropIndex
DROP INDEX `lugarId` ON `evento`;

-- DropIndex
DROP INDEX `usuarioId` ON `departamento`;

-- DropIndex
DROP INDEX `usuarioId` ON `mantenimiento`;

-- DropIndex
DROP INDEX `lugarId` ON `mantenimiento`;

-- AlterTable
ALTER TABLE `acomodo` ADD COLUMN     `lugarId` INT;

-- AlterTable
ALTER TABLE `lugar` DROP COLUMN `acomodoId`;

-- AddForeignKey
ALTER TABLE `Acomodo` ADD FOREIGN KEY (`lugarId`) REFERENCES `Lugar`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Departamento` ADD FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Evento` ADD FOREIGN KEY (`departamentoId`) REFERENCES `Departamento`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Evento` ADD FOREIGN KEY (`lugarId`) REFERENCES `Lugar`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Evento` ADD FOREIGN KEY (`acomodoId`) REFERENCES `Acomodo`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Mantenimiento` ADD FOREIGN KEY (`departamentoId`) REFERENCES `Departamento`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Mantenimiento` ADD FOREIGN KEY (`lugarId`) REFERENCES `Lugar`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Mantenimiento` ADD FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Permisos` ADD FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Salida` ADD FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
