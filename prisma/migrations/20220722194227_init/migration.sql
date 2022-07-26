/*
  Warnings:

  - You are about to drop the column `status` on the `chamado` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `chamado` DROP COLUMN `status`,
    ADD COLUMN `isFechado` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `titulo` VARCHAR(100) NULL,
    MODIFY `descricao` TEXT NULL,
    MODIFY `data_abertura` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `cliente` MODIFY `nome` VARCHAR(100) NULL,
    MODIFY `email` VARCHAR(100) NULL,
    MODIFY `senha` VARCHAR(100) NULL;

-- AlterTable
ALTER TABLE `suporte` MODIFY `nome` VARCHAR(100) NULL,
    MODIFY `email` VARCHAR(100) NULL,
    MODIFY `senha` VARCHAR(100) NULL;

-- CreateTable
CREATE TABLE `Mensagem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `chamado_id` INTEGER NOT NULL,
    `cliente_id` INTEGER NOT NULL,
    `suporte_id` INTEGER NOT NULL,
    `data` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `mensagem` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Mensagem` ADD CONSTRAINT `Mensagem_chamado_id_fkey` FOREIGN KEY (`chamado_id`) REFERENCES `Chamado`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Mensagem` ADD CONSTRAINT `Mensagem_cliente_id_fkey` FOREIGN KEY (`cliente_id`) REFERENCES `Cliente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Mensagem` ADD CONSTRAINT `Mensagem_suporte_id_fkey` FOREIGN KEY (`suporte_id`) REFERENCES `Suporte`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
