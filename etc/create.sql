/* fitdb mit folgenden Tables:

- user
	- id, username, password, lastname, firstname, birthdate, tscreated, tsdeleted
- caloriebalance
	- id, userid, calories, weight, tscreated, tsdeleted
- bodymass
	- id, lowerleg, thigh, butt, belly, chest, shoulder, neck, upperarm, forearm, tscreated, tsdeleted

*/
CREATE TABLE IF NOT EXISTS system
(
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	dbversion VARCHAR,
	tscreated DATETIME,
	tsdeleted DATETIME	
);

CREATE TABLE IF NOT EXISTS user
(
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	username VARCHAR,
	password VARCHAR,
	lastname VARCHAR,
	firstname VARCHAR,
	birthdate DATE,
	tscreated DATETIME,
	tsdeleted DATETIME	
);

CREATE TABLE IF NOT EXISTS caloriebalance
(
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	userid INTEGER,
	calories INTEGER,
	description VARCHAR,
	weight INTEGER,
	tscreated DATETIME,
	tsdeleted DATETIME	
);

CREATE TABLE IF NOT EXISTS bodymass
(
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	userid INTEGER,
	lowerleg INTEGER,
	thigh INTEGER,
	butt INTEGER,
	belly INTEGER,
	chest INTEGER,
	shoulder INTEGER,
	neck INTEGER,
	upperarm INTEGER,
	forearm INTEGER,
	tscreated DATETIME,
	tsdeleted DATETIME	
);


