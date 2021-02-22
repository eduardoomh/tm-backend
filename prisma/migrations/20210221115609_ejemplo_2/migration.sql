/*
  Warnings:

  - You are about to alter the column `estado` on the `usuario` table. The data in that column could be lost. The data in that column will be cast from `String` to `Enum("Usuario_estado")`.

*/
-- AlterTable
ALTER TABLE `usuario` MODIFY `estado` ENUM('PENDIENTE', 'ACTIVO', 'SUSPENDIDO', 'ADMINISTRADOR') NOT NULL DEFAULT 'PENDIENTE';

-- CreateTable
CREATE TABLE `Departamento` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `subdireccion_asignada` VARCHAR(191) NOT NULL,
    `creado_por` INT NOT NULL,
    `createdAt` INT NOT NULL,
    `updatedAt` INT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Acomodo` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `imagen` VARCHAR(191) NOT NULL,
    `createdAt` INT NOT NULL,
    `updatedAt` INT NOT NULL,
    `lugarId` INT,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Lugar` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `informacion` VARCHAR(191) NOT NULL,
    `estado` ENUM('DISPONIBLE', 'NO_DISPONIBLE') NOT NULL DEFAULT 'DISPONIBLE',
    `createdAt` INT NOT NULL,
    `updatedAt` INT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Evento` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `informacion` VARCHAR(191) NOT NULL,
    `fecha` VARCHAR(191) NOT NULL,
    `hora_inicio` VARCHAR(191) NOT NULL,
    `hora_final` VARCHAR(191) NOT NULL,
    `estado` ENUM('PENDIENTE', 'VERIFICADA', 'APROBADA', 'REPROGRAMADA') NOT NULL DEFAULT 'PENDIENTE',
    `departamento_solicitante` INT NOT NULL,
    `lugar` INT NOT NULL,
    `acomodo` INT NOT NULL,
    `creado_por` INT NOT NULL,
    `createdAt` INT NOT NULL,
    `updatedAt` INT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Departamento` ADD FOREIGN KEY (`creado_por`) REFERENCES `Usuario`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Acomodo` ADD FOREIGN KEY (`lugarId`) REFERENCES `Lugar`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Evento` ADD FOREIGN KEY (`departamento_solicitante`) REFERENCES `Departamento`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
