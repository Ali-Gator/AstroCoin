CREATE TABLE IF NOT EXISTS "boosts" (
	"id" serial PRIMARY KEY NOT NULL,
	"type" text NOT NULL,
	"items_left" integer DEFAULT 1 NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"owner_telegram_id" text NOT NULL
);
