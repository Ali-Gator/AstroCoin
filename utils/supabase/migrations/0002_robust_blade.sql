ALTER TABLE "users" ADD PRIMARY KEY ("telegram_id");--> statement-breakpoint
ALTER TABLE "balance" ALTER COLUMN "static_energy_level" SET DEFAULT 1000;--> statement-breakpoint
ALTER TABLE "balance" ADD COLUMN "owner_telegram_id" text NOT NULL;--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "id";