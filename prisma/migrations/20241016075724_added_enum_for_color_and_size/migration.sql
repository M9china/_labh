/*
  Warnings:

  - The `color` column on the `CartItem` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `size` column on the `CartItem` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Size" AS ENUM ('XS', 'S', 'M', 'L', 'XL');

-- CreateEnum
CREATE TYPE "Color" AS ENUM ('BLUE', 'GRAY', 'BLACK', 'WHITE');

-- AlterTable
ALTER TABLE "CartItem" DROP COLUMN "color",
ADD COLUMN     "color" "Color",
DROP COLUMN "size",
ADD COLUMN     "size" "Size";
