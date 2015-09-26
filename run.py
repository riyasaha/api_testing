import sys
from tornado.httpserver import HTTPServer
from tornado.ioloop import IOLoop
from tornado.wsgi import WSGIContainer
from analytics import app
#
# app.run(port=1119, debug=True, host='0.0.0.0')

sys.dont_write_bytecode = True

http_server = HTTPServer(WSGIContainer(app))
port_number = str(sys.argv[1])
# port_number = str(1119)
http_server.listen(port_number,'0.0.0.0')
IOLoop.instance().start()