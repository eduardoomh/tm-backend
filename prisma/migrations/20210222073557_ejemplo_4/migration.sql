-- DropIndex
DROP INDEX `departamentoId` ON `evento`;

-- DropIndex
DROP INDEX `lugarId` ON `evento`;

-- DropIndex
DROP INDEX `usuarioId` ON `mantenimiento`;

-- DropIndex
DROP INDEX `usuarioId` ON `salida`;

-- DropIndex
DROP INDEX `acomodoId` ON `evento`;

-- DropIndex
DROP INDEX `lugarId` ON `acomodo`;

-- DropIndex
DROP INDEX `lugarId` ON `mantenimiento`;

-- DropIndex
DROP INDEX `usuarioId` ON `departamento`;

-- DropIndex
DROP INDEX `departamentoId` ON `mantenimiento`;

-- CreateTable
CREATE TABLE `Vehiculo` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `placas` VARCHAR(191) NOT NULL,
    `modelo` VARCHAR(191) NOT NULL,
    `cantidad_pasajeros` INT NOT NULL,
    `estado` ENUM('DISPONIBLE', 'NO_DISPONIBLE') NOT NULL DEFAULT 'NO_DISPONIBLE',
    `createdAt` INT NOT NULL,
    `updatedAt` INT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Evidencia` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `tipo` ENUM('EVENTO', 'MANTENIMIENTO', 'SALIDA', 'VEHICULO') NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `createdAt` INT NOT NULL,
    `updatedAt` INT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Extintor` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `numero_serie` VARCHAR(191) NOT NULL,
    `fecha_expiracion` VARCHAR(191) NOT NULL,
    `createdAt` INT NOT NULL,
    `updatedAt` INT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Permisos` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `ver_eventos` BOOLEAN NOT NULL,
    `ver_mantenimientos` BOOLEAN NOT NULL,
    `ver_salidas` BOOLEAN NOT NULL,
    `ver_vehiculos` BOOLEAN NOT NULL,
    `ver_departamentos` BOOLEAN NOT NULL,
    `ver_usuarios` BOOLEAN NOT NULL,
    `ver_extintores` BOOLEAN NOT NULL,
    `ver_calendario` BOOLEAN NOT NULL,
    `crear_eventos` BOOLEAN NOT NULL,
    `crear_mantenimientos` BOOLEAN NOT NULL,
    `crear_salidas` BOOLEAN NOT NULL,
    `crear_vehiculos` BOOLEAN NOT NULL,
    `crear_departamentos` BOOLEAN NOT NULL,
    `crear_extintores` BOOLEAN NOT NULL,
    `subir_evidencias_mantenimiento` BOOLEAN NOT NULL,
    `subir_Evidencias_eventos` BOOLEAN NOT NULL,
    `aprobar_eventos` BOOLEAN NOT NULL,
    `aprobar_mantenimientos` BOOLEAN NOT NULL,
    `verificar_eventos` BOOLEAN NOT NULL,
    `verificar_mantenimientos` BOOLEAN NOT NULL,
    `actualizar_eventos` BOOLEAN NOT NULL,
    `actualizar_mantenimientos` BOOLEAN NOT NULL,
    `actualizar_salidas` BOOLEAN NOT NULL,
    `actualizar_Extintores` BOOLEAN NOT NULL,
    `borrar_evidencias_eventos` BOOLEAN NOT NULL,
    `borrar_evidencias_mantenimientos` BOOLEAN NOT NULL,
    `borrar_eventos` BOOLEAN NOT NULL,
    `borrar_mantenimientos` BOOLEAN NOT NULL,
    `borrar_salidas` BOOLEAN NOT NULL,
    `borrar_departamentos` BOOLEAN NOT NULL,
    `borrar_Extintores` BOOLEAN NOT NULL,
    `modificar_permisos` BOOLEAN NOT NULL,
    `usuarioId` INT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Permisos` ADD FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

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
ALTER TABLE `Salida` ADD FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
