/*
  Warnings:

  - You are about to drop the column `data` on the `mensagem` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `mensagem` DROP COLUMN `data`,
    ADD COLUMN `dataMensagem` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
