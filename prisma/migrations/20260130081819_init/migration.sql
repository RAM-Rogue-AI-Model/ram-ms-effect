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

INSERT INTO Effet (id, stat_name, count, modificator, duration) VALUES ('660e8400-e29b-41d4-a716-446655440031', 'pv', 10, '+', 0);
INSERT INTO Effet (id, stat_name, count, modificator, duration) VALUES ('660e8400-e29b-41d4-a716-446655440032', 'pv', 20, '+', 0);
INSERT INTO Effet (id, stat_name, count, modificator, duration) VALUES ('660e8400-e29b-41d4-a716-446655440033', 'pv', 30, '+', 0);
INSERT INTO Effet (id, stat_name, count, modificator, duration) VALUES ('660e8400-e29b-41d4-a716-446655440041', 'attack', 5, '+', 3);
INSERT INTO Effet (id, stat_name, count, modificator, duration) VALUES ('660e8400-e29b-41d4-a716-446655440042', 'attack', 10, '+', 3);
INSERT INTO Effet (id, stat_name, count, modificator, duration) VALUES ('660e8400-e29b-41d4-a716-446655440043', 'attack', 15, '+', 3);
INSERT INTO Effet (id, stat_name, count, modificator, duration) VALUES ('660e8400-e29b-41d4-a716-446655440044', 'attack', 2, 'x', 1);
INSERT INTO Effet (id, stat_name, count, modificator, duration) VALUES ('660e8400-e29b-41d4-a716-446655440051', 'speed', 5, '+', 3);
INSERT INTO Effet (id, stat_name, count, modificator, duration) VALUES ('660e8400-e29b-41d4-a716-446655440052', 'speed', 10, '+', 3);
INSERT INTO Effet (id, stat_name, count, modificator, duration) VALUES ('660e8400-e29b-41d4-a716-446655440053', 'speed', 15, '+', 3);
INSERT INTO Effet (id, stat_name, count, modificator, duration) VALUES ('660e8400-e29b-41d4-a716-446655440054', 'speed', 2, 'x', 1);
