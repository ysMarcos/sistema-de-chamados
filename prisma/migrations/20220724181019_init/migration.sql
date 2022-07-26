/*
  Warnings:

  - Made the column `data` on table `mensagem` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `mensagem` DROP FOREIGN KEY `Mensagem_cliente_id_fkey`;

-- DropForeignKey
ALTER TABLE `mensagem` DROP FOREIGN KEY `Mensagem_suporte_id_fkey`;

-- AlterTable
ALTER TABLE `mensagem` MODIFY `cliente_id` INTEGER NULL,
    MODIFY `suporte_id` INTEGER NULL,
    MODIFY `data` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AddForeignKey
ALTER TABLE `Mensagem` ADD CONSTRAINT `Mensagem_cliente_id_fkey` FOREIGN KEY (`cliente_id`) REFERENCES `Cliente`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Mensagem` ADD CONSTRAINT `Mensagem_suporte_id_fkey` FOREIGN KEY (`suporte_id`) REFERENCES `Suporte`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
