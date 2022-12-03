/*
  Warnings:

  - You are about to drop the column `closedAt` on the `PullRequest` table. All the data in the column will be lost.
  - You are about to drop the column `mergedAt` on the `PullRequest` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "PullRequest" DROP COLUMN "closedAt",
DROP COLUMN "mergedAt",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "updatedAt" SET DEFAULT CURRENT_TIMESTAMP;
DROP SEQUENCE "PullRequest_id_seq";
