CREATE TABLE IF NOT EXISTS "quests" (
	"id" serial PRIMARY KEY NOT NULL,
	"is_completed" boolean DEFAULT false NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"owner_telegram_id" text NOT NULL,
	CONSTRAINT "quests_id_owner_telegram_id_unique" UNIQUE("id","owner_telegram_id")
);
