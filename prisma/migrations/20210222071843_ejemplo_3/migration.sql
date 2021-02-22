/*
  Warnings:

  - You are about to drop the column `creado_por` on the `departamento` table. All the data in the column will be lost.
  - You are about to drop the column `departamento_solicitante` on the `evento` table. All the data in the column will be lost.
  - You are about to drop the column `lugar` on the `evento` table. All the data in the column will be lost.
  - You are about to drop the column `acomodo` on the `evento` table. All the data in the column will be lost.
  - Added the required column `usuarioId` to the `Departamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `departamentoId` to the `Evento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lugarId` to the `Evento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `acomodoId` to the `Evento` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `departamento_solicitante` ON `evento`;

-- DropIndex
DROP INDEX `creado_por` ON `departamento`;

-- DropIndex
DROP INDEX `lugarId` ON `acomodo`;

-- AlterTable
ALTER TABLE `departamento` DROP COLUMN `creado_por`,
    ADD COLUMN     `usuarioId` INT NOT NULL;

-- AlterTable
ALTER TABLE `evento` DROP COLUMN `departamento_solicitante`,
    DROP COLUMN `lugar`,
    DROP COLUMN `acomodo`,
    ADD COLUMN     `departamentoId` INT NOT NULL,
    ADD COLUMN     `lugarId` INT NOT NULL,
    ADD COLUMN     `acomodoId` INT NOT NULL;

-- CreateTable
CREATE TABLE `Mantenimiento` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `informacion` VARCHAR(191) NOT NULL,
    `fecha` VARCHAR(191) NOT NULL,
    `hora_inicio` VARCHAR(191) NOT NULL,
    `hora_final` VARCHAR(191) NOT NULL,
    `equipo_proteccion` VARCHAR(191) NOT NULL DEFAULT 'No aplica',
    `asignado_a` ENUM('INTERNO', 'EXTERNO') NOT NULL,
    `tipo` ENUM('INTERNO', 'EXTERNO') NOT NULL,
    `estado` ENUM('PENDIENTE', 'VERIFICADA', 'APROBADA', 'REPROGRAMADA') NOT NULL DEFAULT 'PENDIENTE',
    `createdAt` INT NOT NULL,
    `updatedAt` INT NOT NULL,
    `departamentoId` INT NOT NULL,
    `lugarId` INT NOT NULL,
    `usuarioId` INT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Salida` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `informacion` VARCHAR(191) NOT NULL,
    `fecha` VARCHAR(191) NOT NULL,
    `hora_salida` VARCHAR(191) NOT NULL,
    `hora_llegada` VARCHAR(191) NOT NULL,
    `chofer` VARCHAR(191) NOT NULL,
    `pasajeros` INT NOT NULL,
    `createdAt` INT NOT NULL,
    `updatedAt` INT NOT NULL,
    `usuarioId` INT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Mantenimiento` ADD FOREIGN KEY (`departamentoId`) REFERENCES `Departamento`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Mantenimiento` ADD FOREIGN KEY (`lugarId`) REFERENCES `Lugar`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Mantenimiento` ADD FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Salida` ADD FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

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
