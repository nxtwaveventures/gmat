-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_VocabularyWord" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "word" TEXT NOT NULL,
    "definition" TEXT NOT NULL,
    "example" TEXT NOT NULL,
    "difficulty" TEXT NOT NULL,
    "mastered" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_VocabularyWord" ("createdAt", "definition", "difficulty", "example", "id", "updatedAt", "word") SELECT "createdAt", "definition", "difficulty", "example", "id", "updatedAt", "word" FROM "VocabularyWord";
DROP TABLE "VocabularyWord";
ALTER TABLE "new_VocabularyWord" RENAME TO "VocabularyWord";
CREATE UNIQUE INDEX "VocabularyWord_word_key" ON "VocabularyWord"("word");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
