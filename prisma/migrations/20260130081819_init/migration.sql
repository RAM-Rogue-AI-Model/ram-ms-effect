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

INSERT INTO Effet (id, stat_name, count, modificator, duration) VALUES ('660e8400-e29b-41d4-a716-446655440000', 'pv', 20, '+', 1);
INSERT INTO Effet (id, stat_name, count, modificator, duration) VALUES ('660e8400-e29b-41d4-a716-446655440001', 'attack', 5, '+', 2);
INSERT INTO Effet (id, stat_name, count, modificator, duration) VALUES ('660e8400-e29b-41d4-a716-446655440002', 'speed', 5, '-', 2);
INSERT INTO Effet (id, stat_name, count, modificator, duration) VALUES ('660e8400-e29b-41d4-a716-446655440003', 'speed', 15, '+', 2);
INSERT INTO Effet (id, stat_name, count, modificator, duration) VALUES ('660e8400-e29b-41d4-a716-446655440004', 'attack', 50, '+', 2);
INSERT INTO Effet (id, stat_name, count, modificator, duration) VALUES ('660e8400-e29b-41d4-a716-446655440005', 'attack', 10, '-', 3);
INSERT INTO Effet (id, stat_name, count, modificator, duration) VALUES ('660e8400-e29b-41d4-a716-446655440006', 'speed', 10, '-', 3);
INSERT INTO Effet (id, stat_name, count, modificator, duration) VALUES ('660e8400-e29b-41d4-a716-446655440007', 'pv', 40, '+', 2);
