/*
  Warnings:

  - You are about to drop the column `creado_por` on the `evento` table. All the data in the column will be lost.
  - Added the required column `usuarioId` to the `Evento` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `acomodoId` ON `evento`;

-- DropIndex
DROP INDEX `usuarioId` ON `salida`;

-- DropIndex
DROP INDEX `usuarioId` ON `departamento`;

-- DropIndex
DROP INDEX `usuarioId` ON `permisos`;

-- DropIndex
DROP INDEX `lugarId` ON `mantenimiento`;

-- DropIndex
DROP INDEX `departamentoId` ON `evento`;

-- DropIndex
DROP INDEX `usuarioId` ON `vehiculo`;

-- DropIndex
DROP INDEX `lugarId` ON `evento`;

-- DropIndex
DROP INDEX `usuarioId` ON `mantenimiento`;

-- DropIndex
DROP INDEX `departamentoId` ON `mantenimiento`;

-- AlterTable
ALTER TABLE `evento` DROP COLUMN `creado_por`,
    ADD COLUMN     `usuarioId` INT NOT NULL;

-- AddForeignKey
ALTER TABLE `Departamento` ADD FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Evento` ADD FOREIGN KEY (`departamentoId`) REFERENCES `Departamento`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Evento` ADD FOREIGN KEY (`lugarId`) REFERENCES `Lugar`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Evento` ADD FOREIGN KEY (`acomodoId`) REFERENCES `Acomodo`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Evento` ADD FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

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

-- AddForeignKey
ALTER TABLE `Vehiculo` ADD FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
