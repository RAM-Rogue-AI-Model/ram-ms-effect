-- CreateTable
CREATE TABLE `Effet` (
    `id` VARCHAR(50) NOT NULL,
    `stat_name` VARCHAR(50) NOT NULL,
    `count` TINYINT NOT NULL,
    `modificator` VARCHAR(2) NOT NULL,
    `duration` TINYINT NOT NULL,

    INDEX `Effet_stat_name_idx`(`stat_name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
