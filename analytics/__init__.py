import os
import sys
import pickle
import elasticsearch
from flask import Flask
from analytics.application.hire_elastic import ElasticConnect
# from analytics.get_pickle_data import Get_pickle


app = Flask(__name__, template_folder="templates", static_folder="static")
# sys.setdefaultencoding('utf8')
# elasObj = ElasticConnect()
# es = elasObj.connectelastic()
# pickle_obj = Get_pickle()
# data_important = pickle_obj.get_pickle()
APP_ROOT = os.path.dirname(os.path.abspath(__file__))
APP_MODEL = os.path.join(APP_ROOT, 'application')


from analytics.routes import baseroutes
app.secret_key = "hireanalytics"

# if __name__ == "__main__":
#     #app.debug = config.DEBUG
#     app.run(host='0.0.0.0', port=1119)
#     #app.run()
