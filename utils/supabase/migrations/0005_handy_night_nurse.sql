ALTER TABLE "boosts" ADD CONSTRAINT "boosts_type_owner_telegram_id_unique" UNIQUE("type","owner_telegram_id");