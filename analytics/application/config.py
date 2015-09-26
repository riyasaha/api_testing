import logging, os
from simpleconfigparser import simpleconfigparser

appconfig = simpleconfigparser()

domain = "dev"

SECRET_KEY = 'hireEDGE1analytics'
PROJECT_DIR = os.path.abspath('.')
APP_DIR = os.path.join(PROJECT_DIR, "analytics")
TEMPLATE_DIR = 'templates'
STATIC_DIR = 'static'
CACHE_DIR = APP_DIR + '/cache'
LOGFILE = APP_DIR + '/log/dashboard.log'
DATA_DIR = APP_DIR + '/data/'
CACHE_TIME = 60 * 60 * 24 * 365
DATA_SOURCE = 'analytics/' +STATIC_DIR + '/data_source/data_important_nonull.json'

appconfig.read(APP_DIR + "/conf/" + domain + ".exp")
js_config = {}
js_config["JS_DEBUG"] = appconfig.JS.JS_DEBUG
js_config["MINJS"] = appconfig.JS.MINJS
js_config["JS_VER"] = appconfig.JS.JS_VER
