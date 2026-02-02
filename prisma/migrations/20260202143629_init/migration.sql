/*
  Warnings:

  - You are about to alter the column `stat_name` on the `Effet` table. The data in that column could be lost. The data in that column will be cast from `VarChar(50)` to `Enum(EnumId(0))`.

*/
-- AlterTable
ALTER TABLE `Effet` MODIFY `stat_name` ENUM('pv', 'speed', 'attack') NOT NULL;
