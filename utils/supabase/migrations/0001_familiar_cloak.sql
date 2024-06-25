CREATE TABLE IF NOT EXISTS "balance" (
	"id" serial PRIMARY KEY NOT NULL,
	"static_balance" integer DEFAULT 0 NOT NULL,
	"balance_updated_at" timestamp DEFAULT now() NOT NULL,
	"token_gain" integer DEFAULT 1 NOT NULL,
	"static_energy_level" integer NOT NULL,
	"energy_updated_at" timestamp DEFAULT now() NOT NULL,
	"energy_capacity" integer DEFAULT 1000 NOT NULL
);
--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "claimable_balance" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "address" text DEFAULT '';