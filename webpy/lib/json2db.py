#!/usr/bin/env python

import os.path
import sqlite3
import sys
import logging
import json

fitdb = os.path.normpath('../etc/fit.db')
logfile = os.path.normpath('../var/json2db.log')

def insertcalories(userid, values):

	"""
Als values wird ein Json Element mit folgender Struktur erwartet:


{targetdate: "2015-08-05T18:40:44", calories: "22", description: "Doener"}

	"""
	
	# Logging
	logging.basicConfig(filename=logfile,format='%(asctime)s %(levelname)s:%(message)s' ,level=logging.DEBUG)
	logging.info('start log')
	
	if os.path.isfile(fitdb):
		# db existiert
		try:
			conn = sqlite3.connect(fitdb)
			cur = conn.cursor()
			myvalues = json.loads(values)
			if myvalues['description'] == "":
				myvalues['description'] = 'NULL'
			else:
				myvalues['description'] = "\'" + myvalues['description'] + "\'"
			myvalues['targetdate'] = "\'" + myvalues['targetdate'] + "\'"
			qry = 'INSERT INTO caloriebalance (userid, calories, description, tscreated) VALUES (%s, %s, %s, %s)' %(userid, myvalues['calories'], myvalues['description'], myvalues['targetdate'])
			logging.info(qry)
			cur.execute(qry)
			conn.commit()
			cur.close()
			conn.close()
			returnvalue = dict(error= dict(code=0, message= qry))
		except:
			logging.warning('werte konnten nicht in DB geschrieben werden')
			logging.error(sys.exc_info()[0])
			returnvalue = dict(error= dict(code=1, message='werte konnten nicht in DB geschrieben werden'))
	else:
		logging.warning('db existiert nicht')
		returnvalue = dict(error= dict(code=1, message='db existiert nicht'))
	return json.dumps(returnvalue)
		
def insertbodymass(userid, values):
	"""
Als values wird ein Json Element mit folgender Struktur erwartet:


{"targetdate":"2015-08-09T13:52:13","lowerleg":"134","thigh":"52","butt":"2345","belly":"34","chest":"2545","shoulder":"42","neck":"24","upperarm":"524","forearm":"522"}

	"""
	
	# Logging
	logging.basicConfig(filename=logfile,format='%(asctime)s %(levelname)s:%(message)s' ,level=logging.DEBUG)
	logging.info('start log')
	logging.info('jou')
	
	if os.path.isfile(fitdb):
		# db existiert
		myvalues = json.loads(values)
		myvalues['targetdate'] = "\'" + myvalues['targetdate'] + "\'"
		logging.info(str(myvalues))
		qry = 'INSERT INTO bodymass (userid, lowerleg, thigh, butt, belly, chest, shoulder, neck, upperarm, forearm, tscreated) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)' %(userid, rmv(myvalues['lowerleg']), rmv(myvalues['thigh']), rmv(myvalues['butt']), rmv(myvalues['belly']), rmv(myvalues['chest']), rmv(myvalues['shoulder']), rmv(myvalues['neck']), rmv(myvalues['upperarm']), rmv(myvalues['forearm']), myvalues['targetdate'])
		logging.info(qry)
		try:
			conn = sqlite3.connect(fitdb)
			cur = conn.cursor()
			cur.execute(qry)
			conn.commit()
			cur.close()
			conn.close()
			returnvalue = dict(error= dict(code=0, message= qry))
		except:
			logging.warning('werte konnten nicht in DB geschrieben werden')
			logging.error(sys.exc_info()[0])
			returnvalue = dict(error= dict(code=1, message='werte konnten nicht in DB geschrieben werden'))
	else:
		logging.warning('db existiert nicht')
		returnvalue = dict(error= dict(code=1, message='db existiert nicht'))
	return json.dumps(returnvalue)
		
		
def rmv(value):
	return int(round(float(value)*10,0))
		
		
	
		
		
		
		
		
		
		
		
