export function createTables() {
  return `
    PRAGMA journal_mode = 'wal';
    PRAGMA foreign_keys = ON;

    CREATE TABLE IF NOT EXISTS decks (
      deck_id VARCHAR(255) PRIMARY KEY NOT NULL,
      title VARCHAR(100) NOT NULL
    );

    CREATE TABLE IF NOT EXISTS cards (
      card_id VARCHAR(255) PRIMARY KEY NOT NULL,
      deck_id VARCHAR(255) NOT NULL,
      front VARCHAR(255) NOT NULL,
      back VARCHAR(255) NOT NULL,
      feedback VARCHAR(30) NOT NULL DEFAULT 'NONE',
      FOREIGN KEY (deck_id) REFERENCES decks(deck_id)
    );
    
`;
}
