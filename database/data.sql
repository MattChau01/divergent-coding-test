-- warehouse zones

insert into "warehouseZones" ("facilityName")
values ('Jersey 1');

insert into "warehouseZones" ("facilityName")
values ('Atlanta 2');

insert into "warehouseZones" ("facilityName")
values ('Chicago 3');

insert into "warehouseZones" ("facilityName")
values ('Atlanta 4');

insert into "warehouseZones" ("facilityName")
values ('Chester 5');

insert into "warehouseZones" ("facilityName")
values ('Downey 6');

insert into "warehouseZones" ("facilityName")
values ('Houston 7');

insert into "warehouseZones" ("facilityName")
values ('Georgia 8');

insert into "warehouseZones" ("facilityName")
values ('Kansas 9');

insert into "warehouseZones" ("facilityName")
values ('Florida 10');

insert into "warehouseZones" ("facilityName")
values ('Iowa 11');

insert into "warehouseZones" ("facilityName")
values ('Brooklyn 12');

-- warehouse shelves

insert into "shelves" ("shelfName", "zoneId")
values
  ('water filters', 1),
  ('stove parts', 1),
  ('dishwasher parts', 1),
  ('oven parts', 1),
  ('cooktop parts', 1);

insert into "shelves" ("shelfName", "zoneId")
values
  ('cups', 2),
  ('straws', 2),
  ('cup holders', 2),
  ('plastic bags', 2),
  ('forks', 2),
  ('spoons', 2);

insert into "shelves" ("shelfName", "zoneId")
values
  ('pencils', 3),
  ('erasers', 3),
  ('sharpeners', 3),
  ('paper', 3),
  ('notebooks', 3),
  ('backpacks', 3),
  ('crayons', 3);

insert into "shelves" ("shelfName", "zoneId")
values
  ('poultry', 4),
  ('eggs', 4),
  ('beef', 4);

 insert into "shelves" ("shelfName", "zoneId")
values
  ('range hood parts', 5),
  ('microwave parts', 5),
  ('small appliance parts', 5);

insert into "shelves" ("shelfName", "zoneId")
values
  ('washing machine parts', 6),
  ('refrigerator parts', 6);

insert into "shelves" ("shelfName", "zoneId")
values
  ('window glass', 7),
  ('bolts', 7),
  ('hand drills', 7),
  ('motor oil', 7),
  ('car hood', 7),
  ('spoiler', 7);

insert into "shelves" ("shelfName", "zoneId")
values
  ('cards', 8),
  ('hats', 8),
  ('chairs', 8),
  ('rabbits', 8);

insert into "shelves" ("shelfName", "zoneId")
values
  ('machinery', 9),
  ('robots', 9);

insert into "shelves" ("shelfName", "zoneId")
values
  ('windex', 10);

insert into "shelves" ("shelfName", "zoneId")
values
  ('sheet music', 11),
  ('pics', 11),
  ('amplifiers', 11),
  ('guitars', 11);

insert into "shelves" ("shelfName", "zoneId")
values
  ('monitors', 12),
  ('computers', 12);
