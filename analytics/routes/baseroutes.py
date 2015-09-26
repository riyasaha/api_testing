from analytics import app
from flask import render_template, redirect, request, session, jsonify, send_file
import simplejson as json
from analytics.application import  user_controller


@app.route("/")
def index():
    print "hello world"
    return render_template('pages/index.html')


@app.route("/api/login", methods=['POST'])
def api_do_login():
    print 'api dologin'
    userObj = user_controller.UserController()
    res = userObj.Dologin(request)
    return jsonify(res)



@app.route("/api/change_password", methods=['GET', 'POST'])
# @login_required
def api_change_password():
    userObj = user_controller.UserController()
    check_is_Session = userObj.checkSession()
    print 'check_is_Session', check_is_Session
    if check_is_Session:

        result = userObj.changePass(request)

        return json.dumps(result)
    else:
        return False

@app.route("/api/forgot_password", methods=['GET', 'POST'])
# @login_required
def api_forgot_password():
    userObj = user_controller.UserController()
    result = userObj.forgot_password(request)

    return json.dumps(result)

@app.route("/api/logout", methods=['GET'])
# @login_required
def api_logout():
    userObj = user_controller.UserController()
    check_is_Session = userObj.checkSession()
    print 'check_is_Session', check_is_Session
    if check_is_Session:
        session.clear()
        return jsonify({'status': 'success'})
    else:
        return ''

