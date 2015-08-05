#!/usr/bin/env python

import os.path
import sqlite3
import logging
import hashlib

fitdb = os.path.normpath('./fit.db')
logfile = os.path.normpath('../var/init.log')
createquery = os.path.normpath('./create.sql')

# Logging
logging.basicConfig(filename=logfile,format='%(asctime)s %(levelname)s:%(message)s' ,level=logging.DEBUG)
logging.info('start log')

def createdb():
	# create db wenn file noch nicht existiert
	if os.path.isfile(fitdb):
		# db existiert bereits
		logging.warning('db existiert bereits')
		exit(1)
	else:
		# fit.db erstellen
		qry = open(createquery, 'r').read()
		conn = sqlite3.connect(fitdb)
		cur = conn.cursor()
		cur.executescript(qry)
		conn.commit()
		# admin user erstellen
		cur.execute("INSERT INTO user (username, password, tscreated) VALUES (\'%s\', \'%s\', datetime(\'now\'))" %("admin", hashlib.md5("password").hexdigest()))
		conn.commit()
		cur.close()
		conn.close()
		logging.info(fitdb + " wurde erstellt")
		
def createuser(username, password):
	conn = sqlite3.connect(fitdb)
	cur = conn.cursor()
	cur.execute("INSERT INTO user (username, password, tscreated) VALUES ('%s', '%s', datetime(\'now\'))" %(username, hashlib.md5(password).hexdigest()))
	conn.commit()
	
if __name__ == "__main__":
	createdb()
