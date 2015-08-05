#!/usr/bin/env python
# -*- coding: utf-8 -*-

import json

# example json message
def test():
	values = dict({
	'error': 0,
	'colums': ['id', 'Stadt', 'Land', 'Farbe', 'Sprache', 'Zahl1', 'Zahl2', 'Datum1', 'Datum2', 'Datum3'], 
	'data': [[0, 'Basel', 'Schweiz', 'Blau', 'Deutsch', 42, 256, '2014-08-22', '2015-07-03', '2012-01-01'],
	[1, 'Berlin', 'Deutschland', 'Orange', 'Deutsch', 22, 55, '2010-08-08', '2010-01-02', '2009-06-07'],
	[2, 'Barcelona', 'Spanien', 'Gelb', 'Spanisch', 44, 66, '1999-06-04', '1999-07-08', '1999-12-12'],
	[3, 'Paris', 'Frankreich', 'Gruen', 'Franzoesisch', 45, 67, '1892-05-01', '1893-10-10', '1900-05-05']]
	})
	return json.dumps(values)
