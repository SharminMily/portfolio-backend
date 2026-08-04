/*
  Warnings:

  - You are about to drop the column `slug` on the `Blog` table. All the data in the column will be lost.
  - Made the column `category` on table `Blog` required. This step will fail if there are existing NULL values in that column.
  - Made the column `readTime` on table `Blog` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "Blog_slug_key";

-- AlterTable
ALTER TABLE "Blog" DROP COLUMN "slug",
ADD COLUMN     "reactionCount" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "ratting" SET DEFAULT 0,
ALTER COLUMN "ratting" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "category" SET NOT NULL,
ALTER COLUMN "readTime" SET NOT NULL;
