CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" text,
	"telegram_id" text,
	"created_at" varchar NOT NULL
);
