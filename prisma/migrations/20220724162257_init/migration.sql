/*
  Warnings:

  - Made the column `titulo` on table `chamado` required. This step will fail if there are existing NULL values in that column.
  - Made the column `descricao` on table `chamado` required. This step will fail if there are existing NULL values in that column.
  - Made the column `nome` on table `cliente` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `cliente` required. This step will fail if there are existing NULL values in that column.
  - Made the column `senha` on table `cliente` required. This step will fail if there are existing NULL values in that column.
  - Made the column `nome` on table `suporte` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `suporte` required. This step will fail if there are existing NULL values in that column.
  - Made the column `senha` on table `suporte` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `chamado` MODIFY `titulo` VARCHAR(100) NOT NULL,
    MODIFY `descricao` TEXT NOT NULL,
    MODIFY `data_fechamento` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `cliente` MODIFY `nome` VARCHAR(100) NOT NULL,
    MODIFY `email` VARCHAR(100) NOT NULL,
    MODIFY `senha` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `suporte` MODIFY `nome` VARCHAR(100) NOT NULL,
    MODIFY `email` VARCHAR(100) NOT NULL,
    MODIFY `senha` VARCHAR(100) NOT NULL;
