set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "public"."warehouseZones" (
	"zoneId" serial NOT NULL,
	"facilityName" TEXT NOT NULL,
	CONSTRAINT "warehouseZones_pk" PRIMARY KEY ("zoneId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."shelves" (
	"zoneId" int NOT NULL,
	"shelfName" TEXT NOT NULL UNIQUE,
  "entryId" serial NOT NULL
) WITH (
  OIDS=FALSE
);




ALTER TABLE "shelves" ADD CONSTRAINT "shelves_fk0" FOREIGN KEY ("zoneId") REFERENCES "warehouseZones"("zoneId");
